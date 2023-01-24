import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import OrderConfirmation from "../OrderConfirmation";

import { rest } from "msw";
import { server } from "../../../mocks/server";

test("post시 에러가 발생했을 때, 에러메시지가 뜨는지 확인 테스트", async () => {
  server.resetHandlers(
    rest.post("http://localhost:3030/order", (req, res, ctx) => {
      res(ctx.status(500));
    })
  );

  render(<OrderConfirmation setOrderPhase={jest.fn} />);

  const alerts = await screen.findByRole("alert");

  expect(alerts).toHaveTextContent(
    "An unexpected error occurred. Please try again later."
  );
});
