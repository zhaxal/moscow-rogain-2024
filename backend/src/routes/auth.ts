import axios from "axios";
import moment from "moment";
import dotenv from "dotenv";

import { Router } from "express";
import { randomInt } from "crypto";
import { v4 as uuidv4 } from "uuid";

import { sessionsCol, usersCol } from "../database";

dotenv.config();

const authRouter = Router();

const useVoiceCode = true;

authRouter.post("/register", async (req, res) => {
  const code = randomInt(1000, 9999);
  const phone = req.body.phone;

  const cooldownMinutes = 5;
  const now = new Date();
  const cooldownEnd = new Date(now.getTime() - cooldownMinutes * 60000);

  const user = await usersCol.findOne({
    phone,
    lastCodeSentAt: { $gt: cooldownEnd },
  });

  if (user) {
    const lastCodeSent = user.lastCodeSentAt;

    let timediff = "5 минут";

    if (lastCodeSent) {
      const diff = moment().diff(moment(lastCodeSent), "minutes");
      timediff = `${cooldownMinutes - diff} минут`;
    }

    return res
      .status(429)
      .send(`повторная отправка кода возможна через ${timediff}`);
  }

  if (useVoiceCode) {
    axios
      .post(
        "https://direct.i-dgtl.ru/api/v1/message",
        [
          {
            channelType: "VOICECODE",
            senderName: "voicecode",
            destination: phone,
            content: {
              contentType: "text",
              text: `Ваш код от Orient: ${code}`,
            },
          },
        ],
        {
          headers: {
            Authorization: "Basic " + process.env.DIGITAL_DIRECT_TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
      .then(async () => {
        usersCol.updateOne(
          { phone },
          {
            $set: { phone, verified: false, code, lastCodeSentAt: now },
            $setOnInsert: { role: "user" },
          },
          { upsert: true }
        );

        return res.send("код отправлен");
      })
      .catch((error) => {
        console.error("Ошибка отправки кода", error.response.data);
        return res.status(500).send("ошибка отправки кода");
      });
  } else {
    usersCol.replaceOne(
      { phone },
      { phone, verified: false, code, role: "user" },
      { upsert: true }
    );

    return res.send("код отправлен");
  }
});

authRouter.post("/verify", async (req, res) => {
  const phone = req.body.phone;
  const code = req.body.code;

  const user = await usersCol.findOneAndUpdate(
    { phone, code: +code },
    { $set: { verified: true }, $unset: { code: "" } }
  );

  if (!user.value) {
    return res.status(400).send("неверный код");
  }

  const token = uuidv4();

  await sessionsCol.replaceOne(
    { userId: user.value._id },
    {
      userId: user.value._id,
      token,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
    },
    { upsert: true }
  );

  res.send({ token });
});

authRouter.get("/me", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("не авторизован");
  }

  const session = await sessionsCol.findOne({
    token,
    expiresAt: { $gt: new Date() },
  });

  if (!session) {
    return res.status(401).send("не авторизован");
  }

  const user = await usersCol.findOne({ _id: session.userId });

  if (!user) {
    return res.status(401).send("не авторизован");
  }

  res.send({ phone: user.phone, role: user.role });

  await sessionsCol.updateOne(
    {
      token,
    },
    {
      $set: {
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    }
  );
});

authRouter.post("/logout", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("не авторизован");
  }

  await sessionsCol.deleteOne({ token });

  res.send("выход выполнен");
});

export default authRouter;
