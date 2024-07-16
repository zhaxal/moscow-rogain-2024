import { ObjectId } from "mongodb";
import backendInstance from "../../utils/backendInstance";
import { useAuth } from "../../contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";

interface Answer {
  _id: ObjectId;
  questionId: ObjectId;
  userId: ObjectId;
  correct: boolean;
  checkpointNumber: number;
}

interface User {
  totalAnswers: number;
  correctAnswers: number;
  incorrectAnswers: number;
  answers: Answer[];
  userId: ObjectId;
  phone: string;
}

type UserAnswersResponse = User[];

function Admin() {
  const { token } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const { data } = await backendInstance.get<UserAnswersResponse>(
        `/admin/users`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return data;
    },
  });

  const checkpoints = Array.from({ length: 50 }, (_, i) => `кп${i + 1}`);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        Загрузка...
      </div>
    );
  }

  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Номер телефона
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Количество правильных ответов
          </th>
          {checkpoints.map((cp, index) => (
            <th
              key={index}
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              {cp}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((user) => (
          <tr key={user.userId.toString()}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {user.phone}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {user.correctAnswers}
            </td>
            {checkpoints.map((_, index) => {
              // Assuming the presence of a correct answer for a checkpoint
              const hasCorrectAnswer = user.answers.some(
                (answer) =>
                  answer.correct && answer.checkpointNumber === index + 1
              );
              return (
                <td
                  key={index}
                  className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                >
                  {hasCorrectAnswer ? "✅" : "❌"}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Admin;
