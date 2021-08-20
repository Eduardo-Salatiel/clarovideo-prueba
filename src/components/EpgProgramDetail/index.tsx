import { useAppSelector } from "../../redux/hooks";
import { getEventDuration } from "../../utils/epgUtils";
import "./style.scss";

const EpgProgramDetail = () => {
  const { eventInfo } = useAppSelector((state) => state.epgReducer);

  return (
    <div className="epg-program-detail">
      {eventInfo && (
        <>
          <h2 className="epg-program-detail-title">{eventInfo?.name}</h2>
          <span className="epg-program-detail-duration">
            {getEventDuration(eventInfo.date_begin, eventInfo.date_end, "a")}
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
