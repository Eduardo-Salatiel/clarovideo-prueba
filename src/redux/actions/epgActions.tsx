import axios from "axios";
import { Dispatch } from "redux";
import { epgActions } from "../reducers/epgReducer";
import {
  CLEAN_EVENT_INFO,
  GET_EPG,
  GET_EVENT_INFO,
  LOADING_EPG,
  GET_MORE_EVENTS,
  FETCH_EPG_ERROR,
} from "../types";
import { Event, ProgramGuideResponse } from "../../interfaces/ProgramGuide";

const BASE_URL = "https://mfwkweb-api.clarovideo.net/services/epg/channel";
const PARAMS = {
  device_id: "web",
  device_category: "web",
  device_model: "web",
  device_type: "web",
  device_so: "Chrome",
  format: "json",
  device_manufacturer: "generic",
  authpn: "webclient",
  authpt: "tfg1h3j4k6fd7",
  api_version: "v5.93",
  region: "guatemala",
  HKS: "web61144bb49d549",
  user_id: "54343080",
  quantity: "200",
};

export const getEPG =
  (dateFrom: string, dateTo: string) => async (dispatch: Dispatch) => {
    try {
      dispatch<epgActions>({ type: LOADING_EPG });
      const resp = await axios.get<ProgramGuideResponse>(BASE_URL, {
        params: { ...PARAMS, date_from: dateFrom, date_to: dateTo },
      });

      dispatch<epgActions>({
        type: GET_EPG,
        payload: resp.data.response.channels,
      });

      dispatch<epgActions>({ type: LOADING_EPG });
    } catch (error) {
      dispatch<epgActions>({ type: LOADING_EPG });
      dispatch<epgActions>({ type: FETCH_EPG_ERROR });
    }
  };

export const getMoreEpgEvents =
  (dateFrom: string, dateTo: string) => async (dispatch: Dispatch) => {
    try {
      const resp = await axios.get<ProgramGuideResponse>(BASE_URL, {
        params: { ...PARAMS, date_from: dateFrom, date_to: dateTo },
      });

      dispatch<epgActions>({
        type: GET_MORE_EVENTS,
        payload: resp.data.response.channels,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getEventInfo = (payload: Event) => (dispatch: Dispatch) => {
  dispatch<epgActions>({ type: GET_EVENT_INFO, payload });
};

export const cleanEventInfo = (payload: Event) => (dispatch: Dispatch) => {
  dispatch<epgActions>({ type: CLEAN_EVENT_INFO });
};

export const egpError = () => (dispatch: Dispatch) => {
  dispatch<epgActions>({ type: FETCH_EPG_ERROR });
};
