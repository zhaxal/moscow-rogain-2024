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

  const cooldownMinutes = 1;
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
    usersCol.updateOne(
      { phone },
      {
        $set: { phone, verified: false, code, lastCodeSentAt: now },
        $setOnInsert: { role: "user" },
      },
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

authRouter.post("/name", async (req, res) => {
  let session = null;

  if (!req.headers.authorization) {
    return res.status(401).send("не авторизован");
  } else {
    session = await sessionsCol.findOne({
      token: req.headers.authorization,
    });

    if (!session) {
      return res.status(401).send("не авторизован");
    }

    if (session?.expiresAt < new Date()) {
      await sessionsCol.deleteOne({ token: req.headers.authorization });
      return res.status(401).send("не авторизован");
    }
  }

  const user = await usersCol.findOne({ _id: session.userId });

  if (!user) {
    return res.status(401).send("не авторизован");
  }

  const { firstName, lastName, startNumber } = req.body;

  if (!firstName || !lastName || !startNumber) {
    return res.status(400).send("имя не указано");
  }

  await usersCol.updateOne(
    { _id: session.userId },
    {
      $set: { firstName, lastName, startNumber: parseInt(startNumber) },
    }
  );

  res.send("имя сохранено");
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

  let hasName = false;

  if (user.firstName && user.lastName && user.startNumber) {
    hasName = true;
  }

  res.send({ phone: user.phone, role: user.role, hasName });

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
