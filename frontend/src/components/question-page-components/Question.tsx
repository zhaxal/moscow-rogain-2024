import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import backendInstance from "../../utils/backendInstance";
import { useSnackbar } from "../../contexts/SnackbarContext";

interface Answer {
  id: string;
  answer: string;
  correct: boolean;
}

interface QuestionResponse {
  id: string;
  checkpointNumber: number;
  question: string;
  answers: Answer[];
}

function Question() {
  const { id } = useParams();
  const { token } = useAuth();
  const [stage, setStage] = useState<"question" | "accept" | "answered">(
    "question"
  );

  const { showMessage } = useSnackbar();

  const { data, isLoading } = useQuery({
    queryKey: ["question", id],
    queryFn: async () => {
      try {
        const { data } = await backendInstance.get<QuestionResponse>(
          `/question/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        return data;
      } catch (error) {
        if (
          error instanceof AxiosError &&
          error.response?.data === "ответ уже принят"
        ) {
          setStage("answered");
          const dummyData: QuestionResponse = {
            id: "1",
            checkpointNumber: 1,
            question: "Какой цвету неба?",
            answers: [
              { id: "1", answer: "Синий", correct: true },
              { id: "2", answer: "Красный", correct: false },
              { id: "3", answer: "Зеленый", correct: false },
              { id: "4", answer: "Желтый", correct: false },
            ],
          };
          return dummyData;
        }
        throw error;
      }
    },

    enabled: !!id,
  });

  const [randomizedAnswers, setRandomizedAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    if (data?.answers) {
      setRandomizedAnswers(data.answers.sort(() => 0.5 - Math.random()));
    }
  }, [data?.answers]);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    backendInstance
      .post(
        `/question/${id}/answer`,
        {
          answerId: parseInt(selectedAnswer),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(() => {
        setStage("accept");
      })
      .catch((error) => {
        const message =
          error.response.data.length > 100
            ? "Ошибка, пожалуйста попробуйте позже"
            : error.response.data;
        showMessage(message, 3000, "error");
      });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        Загрузка...
      </div>
    );
  }

  return (
    <>
      {stage === "question" && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center min-h-screen px-4"
        >
          <h1 className="text-2xl font-bold my-4">
            КП №{data?.checkpointNumber}
          </h1>

          <fieldset className="w-full max-w-md mb-8">
            <legend className="text-xl font-semibold my-4 text-center">
              {data?.question}
            </legend>
            <div className="space-y-4">
              {randomizedAnswers.map((item, i) => (
                <label
                  key={`question-${i}`}
                  className="flex items-center space-x-3"
                >
                  <input
                    type="radio"
                    name="answer"
                    value={item.id.toString()}
                    checked={selectedAnswer === item.id.toString()}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm md:text-base">{item.answer}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 text-sm md:text-base"
          >
            Ответить
          </button>
        </form>
      )}

      {stage === "accept" && (
        <div className="flex items-center justify-center h-screen text-2xl font-bold ">
          Ваш ответ принят. Не забудьте отсканировать свою метку на этом КП
        </div>
      )}

      {stage === "answered" && (
        <div className="flex items-center justify-center h-screen text-2xl font-bold ">
          <p>Ответ уже принят</p>
        </div>
      )}
    </>
  );
}

export default Question;
