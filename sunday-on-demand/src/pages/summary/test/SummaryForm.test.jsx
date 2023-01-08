import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("체크박스가 클릭되어 있지 않으면, 버튼은 활성화 되지 않는다", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", { name: /Terms/i });
  expect(checkbox).not.toBeChecked();

  const submitButton = screen.getByRole("button", { name: "submitButton" });
  expect(submitButton).toBeDisabled();
});

test("체크박스가 활성화 시, submit버튼을 클릭할 수 있다", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const checkbox = screen.getByRole("checkbox", { name: /Terms/i });
  const submitButton = screen.getByRole("button", { name: "submitButton" });

  await user.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();
});
