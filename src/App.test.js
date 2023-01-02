import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  //find an element with a role of button and text of 'Change to blue'

  const button = screen.getByRole("button", { name: "Change to blue" });

  //expeect the background color to be red
  expect(button).toHaveStyle(`background-color: red`);

  // click button
  fireEvent.click(button);

  expect(button).toHaveStyle("background-color: blue");
  expect(button).toHaveTextContent("Change to red");
});

test("button turns blue when clciked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
});
