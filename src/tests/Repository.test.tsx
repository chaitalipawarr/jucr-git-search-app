import { render, screen } from "@testing-library/react";
import Repository from "../components/Repository/Repository";
import { RepositoryType } from "../types/RepositoryType";

describe("<Repository />", () => {
  test("should render component", () => {
    const mockData: RepositoryType = {
      id: 1235740,
      full_name: "nilearn/nilearn",
      html_url: "https://github.com/nilearn/nilearn",
      description: "Machine learning for NeuroImaging in Python",
    };
    render(<Repository data={mockData} />);

    const comp = screen.getByTestId("repository");

    expect(comp).toBeInTheDocument();
  });
});
