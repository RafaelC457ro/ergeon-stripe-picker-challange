import "./DayCell.css";
import cx from "classnames";
import type { DayCellProps } from "./DayCell.types";

export function DayCell({
  text,
  day,
  selected = false,
  active = false,
  onClick,
}: DayCellProps): JSX.Element {
  return (
    <button
      aria-label="day-cell"
      className={cx("Stripe-day-cell", {
        selected,
        active: !selected && active,
      })}
      onClick={onClick}
    >
      <div className="Stripe-day-cell-text">{text}</div>
      <div className="Stripe-day-cell-day">{day}</div>
    </button>
  );
}
