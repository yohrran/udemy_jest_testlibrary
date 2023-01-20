import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import App from "../App";

test("order phases for happy path", async () => {
  // render app
  render(<App />);
  const user = UserEvent.setup();
  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  // find and click order button
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");

  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  await user.click(cherriesCheckbox);
  // check summary information based on order
  const orderSummaryButton = screen.getByRole("button", {
    name: /order sundae/i,
  });
  await user.click(orderSummaryButton);

  const summaryHeading = screen.getByRole("heading", { name: "Order Summary" });
  expect(summaryHeading).toBeInTheDocument();

  const scoopsHeading = screen.getByRole("heading", { name: "Scoops: $6.00" });
  expect(scoopsHeading).toBeInTheDocument();

  const toppingHeading = screen.getByRole("heading", {
    name: "Toppings: $1.50",
  });
  expect(toppingHeading).toBeInTheDocument();

  expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
  expect(screen.getByText("2 Chocolate")).toBeInTheDocument();
  expect(screen.getByText("Cherries")).toBeInTheDocument();

  // accept terms and conditions and click button to confirm order
  const toCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  await user.click(toCheckbox);

  const confirmOrderButton = screen.getByRole("button", {
    name: /confirmOrderButton/i,
  });
  await user.click(confirmOrderButton);

  const thanksHeader = await screen.findByRole("heading", {
    name: /thank you/i,
  });
  expect(thanksHeader).toBeInTheDocument();

  // click new order button on confirmation page
  const newOrderButton = screen.getByRole("button", { name: /new order/i });
  await user.click(newOrderButton);

  const scoopsTotal = await screen.findByText("Scoops total: $0.00");
  expect(scoopsTotal).toBeInTheDocument();

  const toppingsTotal = await screen.findByText("Toppings total: $0.00");
  expect(toppingsTotal).toBeInTheDocument();
  // check that scoops and toppings subtotals have been reset
});
