import { Channel } from "../../interfaces/ProgramGuide";
import { GET_EPG, LOADING_EPG } from "../types";

export interface EPGState {
  channels: Channel[];
  isLoading: boolean;
}

export type epgActions =
  | { type: typeof GET_EPG, payload: Channel[] }
  | { type: typeof LOADING_EPG };

const initState = {
  channels: [],
  isLoading: false,
};

export const epgReducer = (state: EPGState = initState,action: epgActions): EPGState => {
  switch (action.type) {
    case GET_EPG:
      return {
        ...state,
        channels: [...action.payload],
      };
    case LOADING_EPG:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};
