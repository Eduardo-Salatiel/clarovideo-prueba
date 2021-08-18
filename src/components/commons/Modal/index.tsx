import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/actions/modalActions";
import { useAppSelector } from "../../../redux/hooks";
//------------------------------------------------------------------------------
import closeIcon from "./../../../assets/img/close.svg";
import "./style.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useAppSelector((state) => state.modalReducer);

  const handleCloseClick = () => {
    dispatch(closeModal());
  };

  return ReactDOM.createPortal(
    <div id="modal" className="modal animation">
      <button className="modal-close" type="button" onClick={handleCloseClick}>
        <img src={closeIcon} alt="cerrar" />
      </button>
    </div>,
    document.getElementById("portal") as any
  );
};

export default Modal;
