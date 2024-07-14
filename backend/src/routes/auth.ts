import axios from "axios";
import dotenv from "dotenv";

import { Router } from "express";
import { randomInt } from "crypto";
import { v4 as uuidv4 } from "uuid";

import { sessionsCol, usersCol } from "../database";

dotenv.config();

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const code = randomInt(1000, 9999);
  const phone = req.body.phone;

  await axios.post(
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
        Authorization: "Basic MzU4MTp4NENOSjNGT0tHMGhlOWZwemRSWXA0",
      },
    }
  );

  usersCol.replaceOne(
    { phone },
    { phone, verified: false, code },
    { upsert: true }
  );

  res.send("пользователь зарегистрирован");
});

authRouter.post("/verify", async (req, res) => {
  const phone = req.body.phone;
  const code = req.body.code;

  const user = await usersCol.findOneAndUpdate(
    { phone, code: +code },
    { $set: { verified: true }, $unset: { code: "" } }
  );

  if (!user.value) {
    return res.status(401).send("неверный код");
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

export default authRouter;
