import { getDateForFetch } from "./epgUtils";
import {
  getEventHour,
  convertHourToInt,
  getEventDuration,
  getEventItemWidth,
} from "./epgUtils";

describe("Pruebas en los helpers del epg", () => {
  const eventHour = getEventHour("2021/08/20 06:00:00");
  const hourFromStringToInt = convertHourToInt("2021/08/20 06:30:00");
  const eventDuration = getEventDuration(
    "2021/08/20 08:00:00",
    "2021/08/20 09:30:00",
    "-"
  );
  const eventItemWidth = getEventItemWidth(
    "2021/08/20 08:00:00",
    "2021/08/20 10:00:00",
    300,
    false
  );
  const dateToFetch = getDateForFetch("2106");

  test("Obtener la hora de un evento, formato HH:MM", () => {
    expect(eventHour).toBe("06:00");
  });

  test("Convertir hora de string a number", () => {
    expect(hourFromStringToInt).toBe(6.5);
  });

  test("Obtener hora inicio y termino de un evento", () => {
    expect(eventDuration).toBe("08:00 - 09:30");
  });

  test("Obtener el width de un EventItem", () => {
    expect(eventItemWidth).toBe(600);
  });

  test("Obtener formato de fecha para fetch", () => {
    expect(dateToFetch).toBe("20210821060000");
  });
});
