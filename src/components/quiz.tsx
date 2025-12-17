import { useRef, useState, type SetStateAction } from "react";

export default function Quiz() {
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
  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleSelectOption(option) {
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
  return (
    <div className="flex flex-col gap-4 mx-auto justify-center p-4 border rounded shadow m-2">
      <h2>Question {currentQuestion}</h2>
      <p>{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option) => (
        <button
          className="p-2 bg-gray-300 rounded-sm"
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}
      <div id="nav-buttons" className="flex  gap-2">
        <button
          className="p-2 bg-gray-300 rounded-sm"
          onClick={handlePrevQuestion}
        >
          {"<"}
        </button>
        <button
          className="p-2 bg-gray-300 rounded-sm"
          onClick={handleNextQuestion}
        >
          {">"}
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
