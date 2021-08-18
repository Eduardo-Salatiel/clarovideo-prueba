import { Event } from "../../../../interfaces/ProgramGuide"

interface Props {
    eventInfo: Event
}

const EventItem = ({ eventInfo }: Props) => {
    return (
        <div className="event-item" >
            <span className="event-item-detail">{ eventInfo.name }</span>
        </div>
    )
}

export default EventItem
