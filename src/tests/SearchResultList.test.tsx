import { render, screen } from "@testing-library/react";
import { Tabs } from "../components/Dashboard/Dashboard";
import SearchResultList from "../components/SearchResultList/SearchResultList";
import { UserType } from "../types/UserType";

describe("<SearchResultList />", () => {
  test("should render component", () => {
    const mockData: UserType[] = [
      {
        id: 38818,
        login: "test",
        avatar_url: "https://avatars.githubusercontent.com/u/383316?v=4",
        url: "https://api.github.com/users/test",
        html_url: "https://github.com/test",
      },
    ];

    render(<SearchResultList searchData={mockData} currentTab={Tabs.Users} />);
    const comp = screen.getByTestId("searchResult");
    expect(comp).toBeInTheDocument();
  });
});
