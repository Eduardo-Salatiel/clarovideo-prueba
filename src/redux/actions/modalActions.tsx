import { Dispatch } from "redux";
import { modalActions, ModalState } from "../reducers/modalReducer";
import { CLOSE_MODAL, OPEN_MODAL } from "../types";

export const openModal = (payload: ModalState) => (dispatch: Dispatch) => {
  dispatch<modalActions>({ type: OPEN_MODAL, payload });
};

export const closeModal = () => (dispatch: Dispatch) => {
    dispatch<modalActions>({type: CLOSE_MODAL })
}
