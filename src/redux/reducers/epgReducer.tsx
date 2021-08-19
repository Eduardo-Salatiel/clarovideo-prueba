import { Channel, Event } from "../../interfaces/ProgramGuide";
import { CLEAN_EVENT_INFO, GET_EPG, GET_EVENT_INFO, LOADING_EPG } from "../types";

export interface EPGState {
  channels: Channel[];
  eventInfo: Event | null;
  isLoading: boolean;
}

export type epgActions =
  | { type: typeof GET_EPG, payload: Channel[] }
  | { type: typeof LOADING_EPG }
  | { type: typeof GET_EVENT_INFO, payload: Event }
  | { type: typeof CLEAN_EVENT_INFO }

const initState = {
  channels: [],
  isLoading: false,
  eventInfo: null,
};

export const epgReducer = (
  state: EPGState = initState,
  action: epgActions
): EPGState => {
  switch (action.type) {
    case GET_EPG:
      return {
        ...state,
        channels: [...action.payload],
      };
    case GET_EVENT_INFO:
      return {
        ...state,
        eventInfo: action.payload,
      };
    case CLEAN_EVENT_INFO:
      return {
        ...state,
        eventInfo: null
      }
    case LOADING_EPG:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};
