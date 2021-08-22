import { Channel, Event } from "../../interfaces/ProgramGuide";
import { FETCH_EPG_ERROR } from '../types';
import {
  CLEAN_EVENT_INFO,
  GET_EPG,
  GET_EVENT_INFO,
  GET_MORE_EVENTS,
  LOADING_EPG,
} from "../types";

export interface EPGState {
  channels: Channel[];
  eventInfo: Event | null;
  isLoading: boolean;
  error: boolean;
}

export type epgActions =
  | { type: typeof GET_EPG; payload: Channel[] }
  | { type: typeof LOADING_EPG }
  | { type: typeof GET_EVENT_INFO; payload: Event }
  | { type: typeof CLEAN_EVENT_INFO }
  | { type: typeof GET_MORE_EVENTS; payload: Channel[] }
  | { type: typeof FETCH_EPG_ERROR }

const initState = {
  channels: [],
  isLoading: false,
  eventInfo: null,
  error: false
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
        eventInfo: null,
      };
    case LOADING_EPG:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case GET_MORE_EVENTS:
      return {
        ...state,
        channels: state.channels.map((channel, index) => ({
          ...channel,
          events: [
            ...channel.events,
            ...action.payload[index].events.filter(
              (event) => (channel.events.findIndex(ev => ev.id === event.id) === -1)
            ),
          ],
        })),
      };
    case FETCH_EPG_ERROR:
      return {
        ...state,
        error: !state.error
      }

    default:
      return state;
  }
};
