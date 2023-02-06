import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Searchbox from "../components/Searchbox/Searchbox";

function renderSearchbox(props: Partial<{ onSearchSubmit: Function }> = {}) {
  const defaultProps = {
    onSearchSubmit() {
      return;
    },
  };
  return render(<Searchbox {...defaultProps} {...props} />);
}

describe("<Searchbox />", () => {
  test("should render component", () => {
    renderSearchbox();
    const comp = screen.getByTestId("searchbox");
    expect(comp).toBeInTheDocument();
  });

  test("Search button click", () => {
    const onSearchSubmit = jest.fn();
    const mockSearchVal = "test";
    React.useState = jest.fn().mockReturnValue([mockSearchVal, {}]);

    renderSearchbox({
      onSearchSubmit,
    });
    const searchBtn = screen.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    expect(onSearchSubmit).toHaveBeenCalledWith(mockSearchVal);
  });

  test("Trigger search function on input enter", () => {
    const onSearchSubmit = jest.fn();
    const mockSearchVal = "test";
    React.useState = jest.fn().mockReturnValue([mockSearchVal, {}]);

    renderSearchbox({
      onSearchSubmit,
    });
    const searchInput = screen.getByTestId("search-input");

    fireEvent.keyDown(searchInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(onSearchSubmit).toHaveBeenCalledWith(mockSearchVal);
  });

  test("Input change", async () => {
    const onSearchSubmit = jest.fn();
    const setSearchVal = jest.fn();
    React.useState = jest.fn().mockReturnValue(["", setSearchVal]);

    renderSearchbox({
      onSearchSubmit,
    });
    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "User" } });

    expect(setSearchVal.mock.calls[0][0]).toBe("User");
  });
});
