import React, { useState } from "react";

function Question() {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Selected answer:", selectedAnswer);
    // Add logic to handle the selected answer
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <fieldset className="mb-8">
        <legend className="text-xl font-semibold my-4">
          Государственный музей спорта в Москве находится:
        </legend>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="answer"
              value="В Центральном административном округе"
              checked={
                selectedAnswer === "В Центральном административном округе"
              }
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="w-4 h-4"
            />
            <span>В Центральном административном округе</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="answer"
              value="В Восточном административном округе"
              checked={selectedAnswer === "В Восточном административном округе"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="w-4 h-4"
            />
            <span>В Восточном административном округе</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="answer"
              value="В Западном административном округе"
              checked={selectedAnswer === "В Западном административном округе"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="w-4 h-4"
            />
            <span>В Западном административном округе</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="answer"
              value="В Троицком административном округе"
              checked={selectedAnswer === "В Троицком административном округе"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="w-4 h-4"
            />
            <span>В Троицком административном округе</span>
          </label>
        </div>
      </fieldset>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
      >
        Ответить
      </button>
    </form>
  );
}

export default Question;
