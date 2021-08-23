import { Fragment } from "react";
import { useAppSelector } from "../../../redux/hooks";
import EPG from "../../EPG";
import EPGError from "../../EPGError";
import EpgProgramDetail from "../../EpgProgramDetail";
import "./style.scss";

const EPGModal = () => {
  const { error } = useAppSelector((state) => state.epgReducer);

  return (
    <div className="epg-modal">
      {!error ? (
        <Fragment>
          <EpgProgramDetail />
          <EPG />
        </Fragment>
      ) : (
        <EPGError />
      )}
    </div>
  );
};

export default EPGModal;
