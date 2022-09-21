import "./StripeDatePicker.css";
import { ArrowRight, ArrowLeft } from "../Icons";
import { DayCell } from "../DayCell";
import { useStripeDatePicker } from "../../hooks/useStripeDatePicker";
import type { Day, StripeDatePickerProps } from "./StripeDatePicker.types";

export function StripeDatePicker({
  format,
  onSelectedDay,
  ...rest
}: StripeDatePickerProps): JSX.Element {
  const { daysRange, gotBack, gotForward, selectDay, selectedDay } =
    useStripeDatePicker({
      onSelectedDayChange: onSelectedDay,
    });

  return (
    <div className="Stripe-container" {...rest}>
      <div className="Stripe-header-container">
        <div className="Stripe-header-display" aria-label="string">
          {selectedDay?.format(format ?? "YYYY/MM/DD ddd")}
        </div>
      </div>
      <div className="Stripe-body-container">
        <div className="Stripe-days-container">
          <button
            aria-label="go-back"
            className="Stripe-arrow"
            onClick={() => gotBack()}
          >
            <ArrowLeft />
          </button>
          {daysRange.map((day: Day) => (
            <DayCell
              key={day.text}
              text={day.text}
              day={day.day}
              selected={day.selected}
              active={day.active}
              onClick={() => selectDay(day.data)}
            />
          ))}
          <button
            aria-label="go-forward"
            className="Stripe-arrow"
            onClick={() => gotForward()}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
