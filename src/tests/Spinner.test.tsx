import { render, screen } from "@testing-library/react";
import Spinner from "../components/Spinner/Spinner";

describe("<Spinner />", () => {
  test("should render component", () => {
    render(<Spinner />);
    const comp = screen.getByTestId("loader");
    expect(comp).toBeInTheDocument();
  });
});
