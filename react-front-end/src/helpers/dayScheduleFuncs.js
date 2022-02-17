import moment from "moment";

export function buildTimeBlocks(day) {

  const dayFormatted = day.format("YYYY-MM-DD")
  const start = moment(`${dayFormatted} 04:30`);
  const remainder = 30 - (start.minute() % 30);
  const end = moment(`${dayFormatted} 22:30`);
  let dateTime = start.clone()
  let timeBlock = []

  while(dateTime._d < end._d) {
    dateTime = dateTime.clone().add(remainder, "minutes")
    timeBlock.push({date: dateTime._d, bookings: [], moment: dateTime})
  }

  return timeBlock
}