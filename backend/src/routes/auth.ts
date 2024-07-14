import dotenv from "dotenv";
import { Router } from "express";
import { randomBytes, randomInt } from "crypto";
import axios from "axios";
import { usersCol } from "../database";

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
