import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2022-09-21T15:52:14.309Z"));
  });

  it("should render App Component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Ergeon Challange!/i);
    expect(linkElement).toBeInTheDocument();
  });

  // it should select a date
  it("should select a date", () => {
    render(<App />);

    const daysCells = screen.getAllByRole("button", { name: /day-cell/i });

    // filter by text 21
    const dayCell = daysCells.filter((dayCell) => {
      return dayCell.children[1].textContent?.trim() === "21";
    })[0];

    // expect to have class "selected"
    expect(dayCell).toHaveClass("selected");
  });
});
