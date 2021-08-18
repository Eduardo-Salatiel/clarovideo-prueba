import { CLOSE_MODAL, OPEN_MODAL } from "../types";

export interface ModalState {
  showModal: boolean;
  modal: string;
}

export type modalActions =
  | { type: typeof OPEN_MODAL; payload: ModalState }
  | { type: typeof CLOSE_MODAL };

const initialState = {
  showModal: false,
  modal: "",
};

export const modalReducer = (
  state: ModalState = initialState,
  action: modalActions
): ModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal,
        modal: action.payload.modal,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        ...initialState
      }
    default:
      return state;
  }
};
