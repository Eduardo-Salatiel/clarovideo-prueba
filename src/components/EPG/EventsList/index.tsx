import { useAppSelector } from "../../../redux/hooks";
import EventListByChannel from "./EventListByChannel";
import "./style.scss";

interface Props {
  leftPosition: number;
}

export const EventsList = ({ leftPosition }: Props) => {
  const { channels, isLoading } = useAppSelector((state) => state.epgReducer);

  return (
    <div className="event-list" style={{ left: `${-leftPosition}px` }}>
      {channels.map((channel) => (
        <EventListByChannel key={channel.id} channelEvents={channel.events} />
      ))}
    </div>
  );
};
