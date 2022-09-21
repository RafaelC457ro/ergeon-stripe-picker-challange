import type { Moment } from "moment";

export interface Day {
  text: string;
  day: string;
  selected?: boolean;
  active?: boolean;
  data: Moment;
}

export interface StripeDatePickerProps {
  name: string;
  format?: string;
  onSelectedDay?: (day: Moment) => void;
}
