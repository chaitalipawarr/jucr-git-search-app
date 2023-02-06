import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard/Dashboard";

describe("<Dashboard />", () => {
  test("should render component", () => {
    render(<Dashboard />);
    const comp = screen.getByTestId("dashboard");
    expect(comp).toBeInTheDocument();
  });
});
