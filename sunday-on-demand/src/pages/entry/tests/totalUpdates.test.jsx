import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("update scoop subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  // make sure total starts out $0.00
  const scoopSubtotal = screen.getByText("Scoops total: $", { exact: false });
  // 요소를 찾을 때, 초기에 정의된 단어를 찾기에 편하기 위에서 0을 뺐다.
  expect(scoopSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  // 기존요소 삭제
  await user.clear(vanillaInput);
  //요소를 설정
  await user.type(vanillaInput, "1");

  expect(scoopSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");

  expect(scoopSubtotal).toHaveTextContent("4.00");
});

test("update toppings subtotal when toppings change", async () => {
  render(<Options optionType="toppings" />);
  const user = userEvent.setup();

  const toppingSubTotal = screen.getByText("Toppings total: $", {
    exact: false,
  });

  expect(toppingSubTotal).toHaveTextContent("0.00");
  const cherriesButton = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  await user.click(cherriesButton);
  expect(toppingSubTotal).toHaveTextContent("1.50");

  await user.click(cherriesButton);
  expect(toppingSubTotal).toHaveTextContent("0.00");

  const hotFudgeButton = await screen.findByRole("checkbox", {
    name: "Hot fudge",
  });

  await user.click(hotFudgeButton);
  expect(toppingSubTotal).toHaveTextContent("1.50");

  await user.click(cherriesButton);
  expect(toppingSubTotal).toHaveTextContent("3.00");
});
