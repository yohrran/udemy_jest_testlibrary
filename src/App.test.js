import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and update button", () => {
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

test("initial conditions", () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox has clicked, button has stop", () => {
  render(<App />);
  const colorButtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButtn).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButtn).toBeEnabled();
});
