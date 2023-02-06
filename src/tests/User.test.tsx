import { render, screen } from "@testing-library/react";
import User from "../components/User/User";
import { UserType } from "../types/UserType";

describe("<User />", () => {
  test("should render component", () => {
    const mockData: UserType = {
      id: 38818,
      login: "test",
      avatar_url: "https://avatars.githubusercontent.com/u/383316?v=4",
      url: "https://api.github.com/users/test",
      html_url: "https://github.com/test",
    };

    render(<User data={mockData} />);
    const comp = screen.getByTestId("user");
    expect(comp).toBeInTheDocument();
  });
});
