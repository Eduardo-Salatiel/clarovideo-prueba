import { useAppSelector } from "../../redux/hooks";
import "./style.scss";

const EpgProgramDetail = () => {
  const { eventInfo } = useAppSelector((state) => state.epgReducer);

  return (
    <div className="epg-program-detail">
      {eventInfo && (
        <>
          <h2 className="epg-program-detail-title">{eventInfo?.name}</h2>
          <span className="epg-program-detail-duration">
            {eventInfo?.date_begin.split(" ")[1]} a{" "}
            {eventInfo?.date_end.split(" ")[1]}
          </span>
          <p className="epg-program-detail-description">
            {eventInfo?.description}
          </p>
        </>
      )}
    </div>
  );
};

export default EpgProgramDetail;
