import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"

dayjs().format()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDay = dayjs().year(year).month(month).startOf("month");
  const lastDay = dayjs().year(year).month(month).endOf("month");
  const dates = [];

  // create prefix dates
  for(let i=0; i<firstDay.day(); i++) {
      dates.push({currentMonth: false, date:firstDay.day(i)});
  }
  
  // generate current date
  for(let i=firstDay.date(); i<=lastDay.date(); i++) {
      dates.push({currentMonth: true, date:firstDay.date(i), today: firstDay.date(i).toDate().toDateString() === dayjs().toDate().toDateString()});
  }
  
  // create suffix dates
  const remainingDates = 42-dates.length;
  for(let i=lastDay.date()+1; i<=lastDay.date()+remainingDates; i++) {
      dates.push({currentMonth: false, date:lastDay.date(i)});
  }

  return dates;
};