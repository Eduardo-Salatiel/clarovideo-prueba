import { MONTHS } from "../constants/months";

const date = new Date();

export const getEventHour = (date: string) => {
  return date.split(" ")[1].split(":").slice(0, 2).join(":");
};

export const convertHourToInt = (date: string): number => {
  const hour: number = Number(getEventHour(date).replace(":", "."));
  const intPart: number = Math.floor(hour);
  const floatPart: number = Number((hour - intPart) / 0.6);

  return Number(intPart + floatPart);
};

export const getEventDuration = (
  dateBegin: string,
  dateEnd: string,
  separator: string = "-"
) => {
  return `${getEventHour(dateBegin)} ${separator} ${getEventHour(dateEnd)}`;
};

export const getEventItemWidth = (
  dateBegin: string,
  dateEnd: string,
  slotWidth: number,
  firstElement: boolean
) => {
  const dateBeginInt: number = convertHourToInt(dateBegin);
  const dateEndInt: number = convertHourToInt(dateEnd);

  if (!firstElement) {
    return (dateEndInt - dateBeginInt) * slotWidth;
  } else {
    return dateEndInt * slotWidth;
  }
};

// 202108200000 00
//El parametro from hace referencia a el dia y la hora
export const getDateForFetch = (from: string) => {
  return `${date.getFullYear()}${MONTHS[date.getMonth()]}${from}0000`;
};
