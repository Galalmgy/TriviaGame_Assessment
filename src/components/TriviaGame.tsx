import { FC, useState, useEffect } from "react";
import question, { TriviaQuestion } from "./TriviaQuestion";

const Game: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<TriviaQuestion | null>(
    null
  );
  const [ansMessage, setAnsMessage] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>("");

  useEffect(() => {
    question().then((question: TriviaQuestion) => {
      setCurrentQuestion(question);
    });
  }, []);

  const handleAnswer = async (answer: string | null) => {
    const isCorrect = answer === currentQuestion?.correct_answer;
    if (isCorrect) {
      setAnsMessage("Correct");
    } else {
      setAnsMessage("Incorrect");
    }
    const newQuestion = await question();
    setCurrentQuestion(newQuestion);
    setAnswer("");
  };

  return (
    <div>
      <h3>Trivia Game</h3>

      <p className="question">{currentQuestion?.question} </p>
      <p className="question">
        Enter your answer{" "}
        <input
          id="answer"
          onChange={(event) => setAnswer(event.target.value)}
        ></input>
      </p>
      <button onClick={() => handleAnswer(answer)}>Submit</button>

      {ansMessage && <p>{ansMessage}</p>}
    </div>
  );
};

export default Game;
