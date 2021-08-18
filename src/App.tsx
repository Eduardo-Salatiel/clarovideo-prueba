import { Fragment } from "react";
import { useAppSelector } from "./redux/hooks";
//-----------------------------------------------------------------------------
import Modal from "./components/commons/Modal";
import Home from "./views/Home";

function App() {
  const { showModal } = useAppSelector((state) => state.modalReducer);

  return (
    <Fragment>
      {!showModal && <Home />}
      {showModal && <Modal />}
    </Fragment>
  );
}

export default App;
