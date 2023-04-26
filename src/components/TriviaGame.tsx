import { FC, useState, useEffect } from "react";
import question, { TriviaQuestion } from "./TriviaQuestion";
import he from "he";
const Game: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<TriviaQuestion>();
  const [ansMessage, setAnsMessage] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>("");
  const [ansMessageClass, setAnsMessageClass] = useState("");

  useEffect(() => {
    question().then((question: TriviaQuestion) => {
      setCurrentQuestion(question);
    });
  }, []);
  console.log(currentQuestion?.correct_answer);
  const handleAnswer = async (answer: string | null) => {
    const isCorrect = answer === currentQuestion?.correct_answer;

    if (isCorrect) {
      setAnsMessage("Correct");
      setAnsMessageClass("correctMessage");
    } else {
      setAnsMessage("Incorrect");
      setAnsMessageClass("incorrectMessage");
    }
    setTimeout(() => {
      nextQuestion();
      const InputField = document.getElementById("input") as HTMLInputElement;
      InputField.value = "";
    }, 2000);
  };

  const nextQuestion = async () => {
    const newQuestion = await question();
    setCurrentQuestion(newQuestion);
    setAnswer("");
    setAnsMessage("");
    console.log(newQuestion.correct_answer);
  };
  const q = he.decode(String(currentQuestion?.question));
  return (
    <div>
      <h3>SMALL TRIVIA GAME</h3>

      <p className="question">{q} </p>
      <p className="inputAnswer">
        Enter your answer{" "}
        <input
          id="input"
          onChange={(event) => setAnswer(event.target.value)}
        ></input>
      </p>

      {ansMessage && <p className={ansMessageClass}>{ansMessage}</p>}
      <button className="button" onClick={() => handleAnswer(answer)}>
        Submit
      </button>
    </div>
  );
};

export default Game;
