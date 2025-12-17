import Quiz from "./components/quiz";

function App() {
  return (
    <>
      <div className="mx-auto w-1/2 items-center">
        <h1 className="font-bold text-3xl p-10 bg-gray-200 border  text-center">
          Quiz App
        </h1>
        <div>
          <Quiz />
        </div>
      </div>
    </>
  );
}

export default App;
