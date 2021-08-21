const getEventHour = (date: string) => {
  return date.split(" ")[1].split(":").slice(0, 2).join(":");
};

const convertHourToInt = (date: string):number => {
    const hour: number = Number(getEventHour(date).replace(":", "."));
    const intPart: number = Math.floor(hour);
    const floatPart:number = Number((hour-intPart)/0.6); 

    return Number(intPart + floatPart);
}

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

export const isVisible = function(ele:any, container: any):boolean {
  const eleTop = ele.offsetTop;
  const eleBottom = eleTop + ele.clientHeight;

  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;

  // The element is fully visible in the container
  return (eleTop >= containerTop && eleBottom <= containerBottom) ||
      // Some part of the element is visible in the container
      (eleTop < containerTop && containerTop < eleBottom) ||
      (eleTop < containerBottom && containerBottom < eleBottom);
};


