import { Channel } from "../../interfaces/ProgramGuide";
import { GET_EGP, LOADING_EGP } from "../types";

export interface EGPState {
  channels: Channel[];
  isLoading: boolean;
}

export type egpActions =
  | { type: typeof GET_EGP; payload: Channel[] }
  | { type: typeof LOADING_EGP };

const initState = {
  channels: [],
  isLoading: false,
};

export const egpReducer = (state: EGPState = initState,action: egpActions): EGPState => {
  switch (action.type) {
    case GET_EGP:
      return {
        ...state,
        channels: [...action.payload],
      };
    case LOADING_EGP:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};
