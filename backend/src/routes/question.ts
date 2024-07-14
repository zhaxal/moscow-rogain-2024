import dotenv from "dotenv";
import { Router } from "express";
import { answersCol, questionsCol, sessionsCol } from "../database";

dotenv.config();

const questionRouter = Router();

questionRouter.get("/:id", async (req, res) => {
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

  const id = req.params.id;
  const question = await questionsCol.findOne({ id: +id });

  if (!question) {
    return res.status(404).send("вопрос не найден");
  }

  res.send(question);
});

questionRouter.post("/:id/answer", async (req, res) => {
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

  const id = req.params.id;
  const question = await questionsCol.findOne({
    id: +id,
  });

  if (!question) {
    return res.status(404).send("вопрос не найден");
  }

  const answerId = req.body.answerId;
  const answer = question.answers.find((a) => a.id === answerId);

  if (!answer) {
    return res.status(400).send("не верный ответ");
  }

  const existingAnswer = await answersCol.findOne({
    questionId: question._id,
    userId: session.userId,
  });

  if (existingAnswer) {
    return res.status(400).send("ответ уже принят");
  }

  await answersCol.insertOne({
    questionId: question._id,
    userId: session.userId,
    correct: answer.correct,
  });

  res.send("ответ принят");
});

export default questionRouter;
