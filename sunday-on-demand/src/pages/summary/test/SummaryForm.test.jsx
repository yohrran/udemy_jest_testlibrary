import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("체크박스가 클릭되어 있지 않으면, 버튼은 활성화 되지 않는다", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", { name: "checkbox" });
  expect(checkbox).not.toBeChecked();

  const submitButton = screen.getByRole("button", { name: "submitButton" });
  expect(submitButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();
});
