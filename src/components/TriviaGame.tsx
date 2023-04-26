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
  };

  const nextQuestion = async () => {
    const newQuestion = await question();
    setCurrentQuestion(newQuestion);
    setAnswer("");
    setAnsMessage("");
    console.log(newQuestion.correct_answer);
  };

  return (
    <div>
      <h3>Trivia Game</h3>

      <p className="question">{currentQuestion?.question} </p>
      <p className="input">
        Enter your answer{" "}
        <input
          id="input"
          onChange={(event) => setAnswer(event.target.value)}
        ></input>
      </p>

      <p>{ansMessage && <p className="ansMessage">{ansMessage}</p>}</p>
      <button className="button" onClick={() => handleAnswer(answer)}>
        Submit
      </button>
      <button className="button" onClick={() => nextQuestion()}>
        Next
      </button>
    </div>
  );
};

export default Game;
