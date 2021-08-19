import { timeLinesHours } from "./../../../constants/timeLineHours";
import "./style.scss";

interface Props {
  leftPosition: number
}

export const TimeLine = ({ leftPosition }:Props) => {
  return (
    <div className="time-line">
      <div className="time-line-today">
        <span>HOY</span>
      </div>
      <div className="timeline-container" style={{left: `${-leftPosition}px`}}>
        {timeLinesHours.map((hour) => (
          <span className="timeline-hour" key={hour.hour}>
            {hour.hour}
          </span>
        ))}
      </div>
    </div>
  );
};
