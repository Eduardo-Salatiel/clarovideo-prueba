import { Channel } from '../../../interfaces/ProgramGuide';
import { TimeLine } from '../TimeLine';
import EventListByChannel from "./EventListByChannel";
import "./style.scss";

interface Props {
  leftPosition: number;
  channels: Channel[]
}

export const EventsList = ({ leftPosition, channels }: Props) => {

  return (
    <div className="event-list">
      <TimeLine leftPosition={leftPosition}/>
      <div className="event-list-container" style={{ left: `${-leftPosition}px` }}>
      {channels.map((channel) => (
        <EventListByChannel key={channel.id} channelEvents={channel.events} />
      ))}
    </div>
    </div>
  );
};
