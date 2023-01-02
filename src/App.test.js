import { render, screen } from "@testing-library/react";
import App from "./App";
import { logRoles } from "@testing-library/dom";

test("button has correct initial color", () => {
  const { container } = render(<App />);
  logRoles(container);

  //find an element with a role of button and text of 'Change to blue'

  const button = screen.getByRole("button", { name: "Change to blue" });

  //expeect the background color to be red
  expect(button).toHaveStyle(`background-color: red`);
});

test("button turns blue when clciked", () => {});
