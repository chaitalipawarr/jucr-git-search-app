import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const jucrApp = screen.getByTestId("jucr-app");
  expect(jucrApp).toBeInTheDocument();
});
