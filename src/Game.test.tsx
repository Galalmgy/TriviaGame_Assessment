import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Game from "./components/TriviaGame";

jest.setTimeout(30000);

describe("Game component", () => {
  test("renders the Trivia Game header", () => {
    render(<Game />);
    const headerElement = screen.getByText(/Trivia Game/i);
    expect(headerElement).toBeInTheDocument();
  });
});
