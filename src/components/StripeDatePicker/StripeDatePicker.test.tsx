import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { StripeDatePicker } from "./StripeDatePicker";

describe("StripeDatePicker", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2022-09-21T15:52:14.309Z"));
  });

  it("should render StripeDatePicker", () => {
    render(<StripeDatePicker name={"test"} />);
    expect(screen.getByText("2022/09/21 Wed")).toBeInTheDocument();
  });

  it("should render StripeDatePicker with format", () => {
    render(<StripeDatePicker name={"test"} format={"YYYY/MM/DD"} />);
    expect(screen.getByText("2022/09/21")).toBeInTheDocument();
  });

  // check default day cell content
  it("should render StripeDatePicker with default day cell content", async () => {
    render(<StripeDatePicker name={"test"} />);

    const daysCells = screen.getAllByRole("button", { name: /day-cell/i });
    await waitFor(() => {
      [
        {
          index: 0,
          test: "18",
        },
        {
          index: 1,
          test: "19",
        },
        {
          index: 2,
          test: "20",
        },
        {
          index: 3,
          test: "21",
        },
        {
          index: 4,
          test: "22",
        },

        {
          index: 5,
          test: "23",
        },
        {
          index: 6,
          test: "24",
        },
      ].forEach(({ index, test }) => {
        const dayCell = daysCells[index];
        // 2 children: div
        expect(dayCell.children.length).toBe(2);
        expect(dayCell.children[1].textContent?.trim()).toBe(test);
      });
    });
  });

  it("should render StripeDatePicker with go back one week", async () => {
    render(<StripeDatePicker name={"test"} />);

    const daysCells = screen.getAllByRole("button", { name: /day-cell/i });
    const goBackButton = screen.getByRole("button", { name: /go-back/i });
    fireEvent.click(goBackButton);

    await waitFor(() => {
      [
        {
          index: 0,
          test: "11",
        },
        {
          index: 1,
          test: "12",
        },
        {
          index: 2,
          test: "13",
        },
        {
          index: 3,
          test: "14",
        },
        {
          index: 4,
          test: "15",
        },

        {
          index: 5,
          test: "16",
        },
        {
          index: 6,
          test: "17",
        },
      ].forEach(({ index, test }) => {
        const dayCell = daysCells[index];
        // 2 children: div
        expect(dayCell.children.length).toBe(2);
        expect(dayCell.children[1].textContent?.trim()).toBe(test);
      });
    });
  });

  it("should render StripeDatePicker with go forward one week", async () => {
    render(<StripeDatePicker name={"test"} />);

    const daysCells = screen.getAllByRole("button", { name: /day-cell/i });
    const goForwardButton = screen.getByRole("button", {
      name: /go-forward/i,
    });
    fireEvent.click(goForwardButton);

    await waitFor(() => {
      [
        {
          index: 0,
          test: "25",
        },
        {
          index: 1,
          test: "26",
        },
        {
          index: 2,
          test: "27",
        },
        {
          index: 3,
          test: "28",
        },
        {
          index: 4,
          test: "29",
        },

        {
          index: 5,
          test: "30",
        },
        {
          index: 6,
          test: "01",
        },
      ].forEach(({ index, test }) => {
        const dayCell = daysCells[index];
        // 2 children: div
        expect(dayCell.children.length).toBe(2);
        expect(dayCell.children[1].textContent?.trim()).toBe(test);
      });
    });
  });

  it("should render StripeDatePicker with default selected day", async () => {
    render(<StripeDatePicker name={"test"} />);

    const daysCells = screen.getAllByRole("button", { name: /day-cell/i });

    // filter by text 21
    const dayCell = daysCells.filter((dayCell) => {
      return dayCell.children[1].textContent?.trim() === "21";
    })[0];

    // expect to have class "selected"
    expect(dayCell).toHaveClass("selected");
  });

  it("should render StripeDatePicker with select other day", async () => {
    render(<StripeDatePicker name={"test"} />);

    const daysCells = screen.getAllByRole("button", { name: /day-cell/i });

    const dayCell = daysCells.filter((dayCell) => {
      return dayCell.children[1].textContent?.trim() === "22";
    })[0];

    fireEvent.click(dayCell);

    expect(dayCell).toHaveClass("selected");

    // filter by text 21
    const dayCell21 = daysCells.filter((dayCell) => {
      return dayCell.children[1].textContent?.trim() === "21";
    })[0];

    expect(dayCell21).toHaveClass("active");
  });
});
