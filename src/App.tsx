import Quiz from "./components/quiz";

function App() {
  return (
    <>
      <div className="text-2xl font-bold flex flex-col items-center justify-center p-10 bg-gray-200 border shadow-2xl">
        {" "}
        <h1>Quiz App</h1>
        <div>
          <Quiz />
        </div>
      </div>
    </>
  );
}

export default App;
