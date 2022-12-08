import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("great renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

test("greet with name", () => {
  render(<Greet name="mayowa" />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});
