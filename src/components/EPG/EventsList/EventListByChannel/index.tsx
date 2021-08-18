import { Event } from "../../../../interfaces/ProgramGuide";
import EventItem from "../EventItem";

interface Props {
  channelEvents: Event[];
}

const EventListByChannel = ({ channelEvents }: Props) => {
  return (
    <div className="event-list-by-channel">
      {channelEvents.map((event) => (
        <EventItem key={event.id} eventInfo={event} />
      ))}
    </div>
  );
};

export default EventListByChannel;
