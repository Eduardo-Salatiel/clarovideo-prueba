import { timeLinesHours } from "./../../../constants/timeLineHours";
import './style.scss';

export const TimeLine = () => {
  return (
    <div className="time-line">
      <div className="time-line-today"><span>HOY</span></div>
      <div className="timeline-container">
      {timeLinesHours.map((hour) => (
        <span className="timeline-hour" key={hour.hour} >{hour.hour}</span>
      ))}
    </div>
    </div>
  );
};

