export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answer: string[];
}

const question = async (): Promise<TriviaQuestion> => {
  const response = await fetch("https://opentdb.com/api.php?amount=1");
  const data = await response.json();
  return data.results[0];
};

export default question;
