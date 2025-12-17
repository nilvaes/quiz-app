import { useState } from "react";

type Question = {
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
  }
  function handlePrevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function result() {
    return console.log("Quiz finished. User answers:", userAnswers);
  }
  return (
    <div className="mx-auto w-11/12 sm:w-3/4 md:w-1/2 max-w-2xl flex flex-col gap-4 justify-center p-4 border rounded shadow">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className={
            "p-2 bg-gray-300 rounded-sm" +
            (selectedAnswer === option ? " bg-gray-400" : "")
          }
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}
      <div id="nav-buttons" className="flex gap-2">
        <button
          className="p-2 bg-gray-300 rounded-sm disabled:opacity-50 disabled:cursor-default cursor-pointer"
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
        >
          {"<"}
        </button>

        <button
          className="p-2 bg-gray-300 rounded-sm disabled:opacity-50 disabled:cursor-default cursor-pointer"
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          {currentQuestion === questionBank.length - 1 ? (
            <button className="cursor-pointer" onClick={result}>
              Finish Quiz
            </button>
          ) : (
            ">"
          )}
        </button>
      </div>
    </div>
    // <div>
    //   {questionBank.map((q, index) => (
    //     <div key={index} className="mb-6 p-4  rounded shadow">
    //       <h2 className="font-semibold mb-2">{q.question}</h2>
    //       <ul>
    //         {q.options.map((option, idx) => (
    //           <li key={idx} className="flex flex-col mb-2 ">
    //             <button
    //               onClick={() => handleSelecOption(option)}
    //               className="cursor-pointer px-4 py-2 bg-gray-300  text-black rounded hover:bg-gray-400"
    //             >
    //               {option}
    //             </button>
    //           </li>
    //         ))}
    //         <p>{selectedOption}</p>
    //       </ul>
    //     </div>
    //   ))}
    // </div>
  );
}
