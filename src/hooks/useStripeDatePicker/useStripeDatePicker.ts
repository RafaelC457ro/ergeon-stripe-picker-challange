import React from "react";
import moment from "moment";
import type { Moment } from "moment";
import { createRangeDates } from "../../utils";
import type {
  UseStripeDatePickerState,
  UseStripeDatePicker,
} from "./UseStripeDatePicker.types";

function reducer(
  state: UseStripeDatePickerState,
  action: {
    type: "GO_BACK" | "GO_FORWARD" | "SELECT_DAY";
    payload?: Moment;
  }
): UseStripeDatePickerState {
  switch (action.type) {
    case "GO_BACK":
      return {
        ...state,
        startDay: state.startDay.clone().subtract(1, "week"),
        endDay: state.endDay.clone().subtract(1, "week"),
      };
    case "GO_FORWARD":
      return {
        ...state,
        startDay: state.startDay.clone().add(1, "week"),
        endDay: state.endDay.clone().add(1, "week"),
      };

    case "SELECT_DAY":
      return {
        ...state,
        selectedDay: action.payload ?? state.selectedDay,
      };

    default:
      // istanbul ignore next
      return state;
  }
}

export function useStripeDatePicker({
  onSelectedDayChange,
}: {
  onSelectedDayChange: ((day: Moment) => void) | undefined;
}): UseStripeDatePicker {
  const today = moment();

  const [{ startDay, endDay, selectedDay }, dispatch] = React.useReducer(
    reducer,
    {
      startDay: moment().startOf("week"),
      endDay: moment().endOf("week"),
      selectedDay: today,
    }
  );

  React.useEffect(() => {
    if (typeof onSelectedDayChange === "function") {
      onSelectedDayChange(selectedDay);
    }
  }, [selectedDay]);

  const rangeDays = createRangeDates(startDay, endDay).map((day) => {
    const dayText = day.format("ddd");
    const dayNumber = day.format("DD");
    const active = day.isSame(today, "day");
    const selected = day.isSame(selectedDay, "day");

    return {
      text: dayText,
      day: dayNumber,
      data: day,
      active,
      selected,
    };
  });

  const goBackOneDay = (): void => {
    dispatch({ type: "GO_BACK" });
  };

  const goForwardOneDay = (): void => {
    dispatch({ type: "GO_FORWARD" });
  };

  const selectDay = (day: Moment): void => {
    dispatch({ type: "SELECT_DAY", payload: day });
  };

  return {
    selectedDay,
    daysRange: rangeDays,
    gotBack: goBackOneDay,
    gotForward: goForwardOneDay,
    selectDay,
  };
}
