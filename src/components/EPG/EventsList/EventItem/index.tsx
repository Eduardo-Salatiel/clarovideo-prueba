import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Event } from "../../../../interfaces/ProgramGuide";
import {
  getEventInfo,
  cleanEventInfo,
} from "../../../../redux/actions/epgActions";
import {
  getEventDuration,
  getEventItemWidth,
} from "../../../../utils/epgUtils";
import { useVerifyIsMobile } from "../../../../hooks/useVerifyIsMobile";
import "./style.scss";

interface Props {
  eventInfo: Event;
  firstElement: boolean;
}

const EventItem = ({ eventInfo, firstElement }: Props) => {
  const dispatch = useDispatch();
  const { isMobile } = useVerifyIsMobile();
  const [width, setWidth] = useState(0)

  const handleMouseEnter = () => dispatch(getEventInfo(eventInfo));
  const handleMouseLeave = () => dispatch(cleanEventInfo(eventInfo));

  useLayoutEffect(() => {
    setWidth(getEventItemWidth(
      eventInfo.date_begin,
      eventInfo.date_end,
      isMobile ? 240 : 300,
      firstElement
    ))
  }, [isMobile])

  return (
    <div
      className="event-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: `${width}px`,
        minWidth: `${width}px`
      }}
    >
      <span className="event-item-name">{eventInfo.name}</span>
      <span className="event-item-duration">
        {getEventDuration(eventInfo.date_begin, eventInfo.date_end)}
      </span>
    </div>
  );
};

export default EventItem;
