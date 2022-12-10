import { render, screen } from "@testing-library/react";
import Greet from "./greet";

//test.only test.skip describe.skip describe.only

describe("greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("with name", () => {
    render(<Greet name="mayowa" />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
