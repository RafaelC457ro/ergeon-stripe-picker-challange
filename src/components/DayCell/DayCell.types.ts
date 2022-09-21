import { Day } from "../StripeDatePicker/StripeDatePicker.types";

export interface DayCellProps extends Partial<Day> {
  onClick?: () => void;
}
