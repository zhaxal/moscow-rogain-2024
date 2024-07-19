import dotenv from "dotenv";
import { Router } from "express";
import { answersCol } from "../database";

dotenv.config();

const adminRouter = Router();

adminRouter.get("/users", async (req, res) => {
  const answers = await answersCol
    .aggregate([
      {
        $group: {
          _id: "$userId",
          totalAnswers: { $sum: 1 },
          correctAnswers: { $sum: { $cond: ["$correct", 1, 0] } },
          incorrectAnswers: { $sum: { $cond: ["$correct", 0, 1] } },
          answers: { $push: "$$ROOT" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      {
        $unwind: "$userInfo",
      },
      {
        $lookup: {
          from: "questions",
          localField: "answers.questionId",
          foreignField: "_id",
          as: "questionDetails",
        },
      },
      {
        $addFields: {
          answers: {
            $map: {
              input: "$answers",
              as: "answer",
              in: {
                $mergeObjects: [
                  "$$answer",
                  {
                    checkpointNumber: {
                      $arrayElemAt: [
                        "$questionDetails.checkpointNumber",
                        {
                          $indexOfArray: [
                            "$questionDetails._id",
                            "$$answer.questionId",
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          userId: "$_id",
          phone: "$userInfo.phone",
          firstName: "$userInfo.firstName",
          lastName: "$userInfo.lastName",
          startNumber: "$userInfo.startNumber",
          totalAnswers: 1,
          correctAnswers: 1,
          incorrectAnswers: 1,
          answers: 1,
        },
      },
    ])
    .toArray();

  res.send(answers);
});

adminRouter.get("/users/csv", async (req, res) => {
  const answers = await answersCol
    .aggregate([
      {
        $group: {
          _id: "$userId",
          totalAnswers: { $sum: 1 },
          correctAnswers: { $sum: { $cond: ["$correct", 1, 0] } },
          incorrectAnswers: { $sum: { $cond: ["$correct", 0, 1] } },
          answers: { $push: "$$ROOT" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      {
        $unwind: "$userInfo",
      },
      {
        $lookup: {
          from: "questions",
          localField: "answers.questionId",
          foreignField: "_id",
          as: "questionDetails",
        },
      },
      {
        $addFields: {
          answers: {
            $map: {
              input: "$answers",
              as: "answer",
              in: {
                $mergeObjects: [
                  "$$answer",
                  {
                    checkpointNumber: {
                      $arrayElemAt: [
                        "$questionDetails.checkpointNumber",
                        {
                          $indexOfArray: [
                            "$questionDetails._id",
                            "$$answer.questionId",
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          userId: "$_id",
          phone: "$userInfo.phone",
          firstName: "$userInfo.firstName",
          lastName: "$userInfo.lastName",
          startNumber: "$userInfo.startNumber",
          totalAnswers: 1,
          correctAnswers: 1,
          incorrectAnswers: 1,
          answers: 1,
        },
      },
    ])
    .toArray();

  let csvContent =
    "Номер телефона,Имя,Фамилия,Стартовый номер,Количество правильных ответов," +
    Array.from({ length: 50 }, (_, i) => `кп${i + 1}`).join(",") +
    "\n";

  answers.forEach((user) => {
    let row = `${user.phone},${user.firstName},${user.lastName},${user.startNumber},${user.correctAnswers},`;
    row += Array.from({ length: 50 }, (_, index) => {
      const hasCorrectAnswer = user.answers.some(
        (answer: { correct: any; checkpointNumber: number }) =>
          answer.correct && answer.checkpointNumber === index + 1
      );
      return hasCorrectAnswer ? "✅" : "❌";
    }).join(",");
    csvContent += row + "\n";
  });

  res.header("Content-Type", "text/csv");
  res.attachment("users_answers.csv");
  res.send(csvContent);
});

export default adminRouter;
