import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
test("display image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImage = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImage).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImage.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  const toppingImage = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  expect(toppingImage).toHaveLength(3);

  const altText = toppingImage.map((element) => element.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

test("scoops spinbutton에 음수, 10이상, 소수점이 들어가는 무효한 숫자일 경우 업데이트 불가", async () => {
  render(<Options optionType="scoops" />);
  const user = userEvent.setup();

  const title = screen.getByText("Scoops total: $0.00");
  expect(title).toHaveTextContent("$0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "-1");

  expect(title).toHaveTextContent("$0.00");

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "3.5");

  expect(title).toHaveTextContent("$0.00");

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "11");

  expect(title).toHaveTextContent("$0.00");

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "2");

  expect(title).toHaveTextContent("$4.00");
});
