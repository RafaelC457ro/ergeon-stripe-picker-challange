import moment, { Moment } from "moment";

export function createRangeDates(start: Moment, end: Moment): Moment[] {
  const range = [];
  let currentDate = moment(start);
  const stopDate = moment(end);
  while (currentDate <= stopDate) {
    range.push(moment(currentDate));
    currentDate = currentDate.add(1, "days");
  }
  return range;
}
