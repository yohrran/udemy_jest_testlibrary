import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

import ScoopOptions from "../ScoopOption";
test("indicate if scoop count is non-int or out of range", async () => {
  render(<ScoopOptions />);
  const user = userEvent.setup();

  const scoopsInput = screen.getByRole("spinbutton");

  await user.clear(scoopsInput);
  await user.type(scoopsInput, "-1");

  expect(scoopsInput).toHaveClass("is-valid");

  await user.clear(scoopsInput);
  await user.type(scoopsInput, "2.5");
  expect(scoopsInput).toHaveClass("is-valid");

  await user.clear(scoopsInput);
  await user.type(scoopsInput, "11");
  expect(scoopsInput).toHaveClass("is-valid");

  await user.clear(scoopsInput);
  await user.type(scoopsInput, "3");
  expect(scoopsInput).not.toHaveClass("is-valid");
});
