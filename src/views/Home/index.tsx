import { useDispatch } from "react-redux";
//-----------------------------------------------------------------------------
import PrimaryButton from "../../components/commons/PrimaryButton";
import { openModal } from "../../redux/actions/modalActions";
import { getEPG } from "../../redux/actions/epgActions";
import "./style.scss";

const Home = () => {
  const dispatch = useDispatch();

  const handleEPGClick = () => {
    dispatch(getEPG());
    dispatch(openModal({ showModal: true, modal: "EPG" }));
  };

  return (
    <div className="home">
      <PrimaryButton textContent="Mostrar EPG" onClick={handleEPGClick} />
    </div>
  );
};

export default Home;
