import { fireEvent, render, screen } from "@testing-library/react";
import TabMenu from "../components/TabMenu/TabMenu";

function renderTabMenu(props: Partial<{ onTabChange: Function }> = {}) {
  const defaultProps = {
    onTabChange() {
      return;
    },
  };
  return render(<TabMenu {...defaultProps} {...props} />);
}

describe("<TabMenu />", () => {
  test("should render component", () => {
    renderTabMenu();
    const comp = screen.getByTestId("tab-menu");
    expect(comp).toBeInTheDocument();
  });

  test("Users tab click", () => {
    const onTabChange = jest.fn();
    renderTabMenu({
      onTabChange,
    });
    const userTab = screen.getByTestId("users-tab");

    fireEvent.click(userTab);

    expect(onTabChange).toHaveBeenCalledWith("users");
  });

  test("Repository tab click", async () => {
    const onTabChange = jest.fn();
    renderTabMenu({
      onTabChange,
    });
    const userTab = screen.getByTestId("repository-tab");

    fireEvent.click(userTab);

    expect(onTabChange).toHaveBeenCalledWith("repositories");
  });
});
