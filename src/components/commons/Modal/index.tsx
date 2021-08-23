import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/actions/modalActions";
import { useAppSelector } from "../../../redux/hooks";
//------------------------------------------------------------------------------
import EPGModal from "../../CustomModals/EPGModal";
import closeIcon from "./../../../assets/img/close.svg";
import "./style.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useAppSelector((state) => state.modalReducer);

  const handleModalType = () => {
    if (modal === 'EPG') {
      return <EPGModal />
    }
  }

  const handleCloseClick = () => {
    dispatch(closeModal());
  };

  return ReactDOM.createPortal(
    <div id="modal" className="modal">
      <button className="modal-close" type="button" onClick={handleCloseClick}>
        <img src={closeIcon} alt="cerrar" />
      </button>
        {handleModalType()}
    </div>,
    document.getElementById("portal") as any
  );
};

export default Modal;
