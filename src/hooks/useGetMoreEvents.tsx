import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDateForFetch } from "../utils/epgUtils";
import { getMoreEpgEvents } from "../redux/actions/epgActions";

const date = new Date();

//ESTE HOOK OBTIENE LA PROGRAMACION DE LOS CANALES DENTRO DE RANGOS DE 6hs
//NOTA: OPTIMIZAR ESTE HOOK ----ALGUNAS FUNCIONES TIENEN PARAMETROS RAW----

export const useGetMoreEvents = (leftPosition: number, breakPoint: number) => {
  const dispatch = useDispatch();
  const [hourToFetch, setHourToFetch] = useState<number>(6);
  const [fetchBreakPoint, setFetchBreakPoint] = useState(window.innerWidth < 768 ? 480 : 600);
  let buildedDates = {
    dateFrom: "",
    dateTo: "",
  };

  const getMoreEvents = () => {
    if (hourToFetch < 24) {
      buildedDates = {
        dateFrom: getDateForFetch(
          `${date.getDate()}${
            hourToFetch < 10 ? "0" + hourToFetch : hourToFetch
          }`
        ),
        dateTo: getDateForFetch(`${date.getDate()}${hourToFetch + 6}`),
      };
      setHourToFetch((prevState) => prevState + 6);
      dispatch(getMoreEpgEvents(buildedDates.dateFrom, buildedDates.dateTo));
    } else if (hourToFetch === 24) {
      buildedDates = {
        dateFrom: getDateForFetch(`${date.getDate() + 1}00`),
        dateTo: getDateForFetch(`${date.getDate() + 1}01`),
      };
      setHourToFetch((prevState) => prevState + 6);
      dispatch(getMoreEpgEvents(buildedDates.dateFrom, buildedDates.dateTo));
    }
  };

  useEffect(() => {
    if (leftPosition === fetchBreakPoint) {
      getMoreEvents();
      setFetchBreakPoint((prevState) => prevState + breakPoint);
    }
  }, [leftPosition]);
};
