import type { Question } from "./quiz";

type ResultsProps = {
  questionBank: Question[];
  userAnswers: string[];
  toMainMenu: () => void;
};

export default function Results({
  questionBank,
  userAnswers,
  toMainMenu,
}: ResultsProps) {
  function getScore() {
    let score = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        score++;
      }
    });
    return score;
  }

  const score = getScore();

  return (
    <div className="bg-[#C5AFA0] items-center mx-auto w-11/12 sm:w-3/4 md:w-1/2 max-w-2xl flex flex-col gap-4 justify-center p-4  rounded shadow-lg">
      <h2>Quiz completed!</h2>
      <p>
        Your Score: {score}/{questionBank.length}
      </p>
      <button
        className="cursor-pointer p-2 bg-[#06070E]/70 text-gray-300 rounded hover:bg-[#06070E]/99 "
        onClick={toMainMenu}
      >
        to Main Menu
      </button>
    </div>
  );
}
