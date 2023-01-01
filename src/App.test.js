import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /learn react/i }); //scren 메소드를 통해 찾는다.
  expect(linkElement).toBeInTheDocument(); //인자를 안받고, 요가 있는지 없는지 확인한다.
});
