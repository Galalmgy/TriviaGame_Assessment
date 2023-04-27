import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "./components/TriviaGame";

import AnswerForm from "./components/TriviaGame";

jest.setTimeout(30000);

describe("Game component", () => {
  test("renders the Trivia Game header", () => {
    render(<Game />);
    const headerElement = screen.getByText(/Trivia Game/i);
    expect(headerElement).toBeInTheDocument();
  });
  test("renders the submit button", () => {
    render(<Game />);
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("renders the answer input", () => {
    render(<AnswerForm />);
    const answerInput = screen.getByLabelText(/Enter your answer/i);
    expect(answerInput).toBeInTheDocument();
  });
});
