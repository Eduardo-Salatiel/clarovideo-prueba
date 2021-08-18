import { Event } from "../../../../interfaces/ProgramGuide"
import './style.scss';

interface Props {
    eventInfo: Event
}

const EventItem = ({ eventInfo }: Props) => {
    return (
        <div className="event-item" >
            <span className="event-item-name">{ eventInfo.name }</span>
            <span className="event-item-duration">{ eventInfo.date_begin.split(" ")[1] } - {eventInfo.date_end.split(" ")[1]} </span>
        </div>
    )
}

export default EventItem
