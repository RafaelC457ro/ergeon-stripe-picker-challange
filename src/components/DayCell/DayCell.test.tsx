import { render, screen } from "@testing-library/react";
import { DayCell } from "./DayCell";

describe("DayCell", () => {
  // it should render DayCell with no not required props
  it("should render DayCell with no not required props", () => {
    render(<DayCell text={"Wed"} day={"23"} />);
    expect(screen.getByText("23")).toBeInTheDocument();
  });
});
