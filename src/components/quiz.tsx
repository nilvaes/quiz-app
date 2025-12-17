import { useState } from "react";
import Results from "./Results";

export type Question = {
  question: string;
  options: string[];
  answer: string;
};
const questionBank: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
    answer: "Harper Lee",
  },
];
export default function Quiz() {
  const initialAnswers = ["", "", ""];
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const selectedAnswer = userAnswers[currentQuestion];
  function handleSelectOption(option: string) {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = option;

    setUserAnswers(newAnswers);
  }

  function handleNextQuestion() {
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    }
  }
  function handlePrevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function toMainMenu() {
    setIsQuizFinished(false);
    setCurrentQuestion(0);
    setUserAnswers(initialAnswers);
  }

  if (isQuizFinished) {
    return (
      <Results
        questionBank={questionBank}
        userAnswers={userAnswers}
        toMainMenu={toMainMenu}
      />
    );
  }

  return (
    <div className="bg-[#C5AFA0] mx-auto w-11/12 sm:w-3/4 md:w-1/2 max-w-2xl flex flex-col gap-4 justify-center p-4  rounded shadow-lg">
      <h2>
        Question {currentQuestion + 1} / {questionBank.length}
      </h2>
      <p>{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className={
            "p-2 bg-[#06070E]/70 rounded-sm text-gray-300 cursor-pointer hover:bg-[#06070E]/80 " +
            (selectedAnswer === option ? " bg-[#06070E]/99 " : "")
          }
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}
      <div id="nav-buttons" className="flex gap-2 text-gray-300">
        <button
          className="p-2 bg-[#06070E] rounded-sm disabled:opacity-50 disabled:cursor-default cursor-pointer"
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
        >
          {"<"}
        </button>

        <button
          className="p-2 bg-[#06070E] rounded-sm disabled:opacity-50 disabled:cursor-default cursor-pointer"
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          {currentQuestion === questionBank.length - 1 ? "Finish" : ">"}
        </button>
      </div>
    </div>
  );
}
