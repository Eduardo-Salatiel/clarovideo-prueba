import { Event } from "../../../../interfaces/ProgramGuide";
import EventItem from "../EventItem";
import './style.scss';

interface Props {
  channelEvents: Event[];
}

const EventListByChannel = ({ channelEvents }: Props) => {
  return (
    <div className="event-list-by-channel">
      {channelEvents.map((event,index) => (
        <EventItem key={event.id} eventInfo={event} firstElement={index === 0 ? true: false }/>
      ))}
    </div>
  );
};

export default EventListByChannel;
