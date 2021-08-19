import { useDispatch } from "react-redux";
import { Event } from "../../../../interfaces/ProgramGuide"
import './style.scss';
import { getEventInfo, cleanEventInfo } from '../../../../redux/actions/epgActions';

interface Props {
    eventInfo: Event
}

const EventItem = ({ eventInfo }: Props) => {
    const dispatch = useDispatch()

    const handleMouseEnter = () => dispatch(getEventInfo(eventInfo));
    const handleMouseLeave = () => dispatch(cleanEventInfo(eventInfo));

    return (
        <div className="event-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <span className="event-item-name">{ eventInfo.name }</span>
            <span className="event-item-duration">{ eventInfo.date_begin.split(" ")[1] } - {eventInfo.date_end.split(" ")[1]} </span>
        </div>
    )
}

export default EventItem
