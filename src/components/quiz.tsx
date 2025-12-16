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
  return (
    <div>
      {questionBank.map((q, index) => (
        <div key={index} className="mb-6 p-4  rounded shadow">
          <h2 className="font-semibold mb-2">{q.question}</h2>
          <ul>
            {q.options.map((option, idx) => (
              <li key={idx} className="flex flex-col mb-2 ">
                <button className="cursor-pointer px-4 py-2 bg-gray-300  text-black rounded hover:bg-gray-400">
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
