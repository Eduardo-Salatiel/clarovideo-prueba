import axios from "axios";
import { Dispatch } from "redux";
import { egpActions } from "../reducers/egpReducer";
import { GET_EGP, LOADING_EGP } from "../types";
import { ProgramGuideResponse } from "../../interfaces/ProgramGuide";

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
  date_from: "20210812200256",
  date_to: "20210813200256",
  quantity: "20",
};

export const getEGP = () => async (dispatch: Dispatch) => {
  try {
    dispatch<egpActions>({ type: LOADING_EGP });
    const resp = await axios.get<ProgramGuideResponse>(BASE_URL, {
      params: PARAMS,
    });
    dispatch<egpActions>({
      type: GET_EGP,
      payload: resp.data.response.channels,
    });
    dispatch<egpActions>({ type: LOADING_EGP });
  } catch (error) {
    console.log(error.message);
  }
};
