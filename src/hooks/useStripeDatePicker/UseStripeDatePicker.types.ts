import { Moment } from "moment";
import { Day } from "../../components/StripeDatePicker/StripeDatePicker.types";

export interface UseStripeDatePicker {
  selectedDay: Moment | null;
  daysRange: Day[];
  gotBack: () => void;
  gotForward: () => void;
  selectDay: (day: Moment) => void;
}
export interface UseStripeDatePickerState {
  startDay: Moment;
  endDay: Moment;
  selectedDay: Moment;
}
