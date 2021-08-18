import { useAppSelector } from "../../../redux/hooks";
import EventListByChannel from "./EventListByChannel";
import "./style.scss";

export const EventsList = () => {
  const { channels, isLoading } = useAppSelector((state) => state.epgReducer);

  return (
    <div className="event-list">
      {channels.map((channel) => (
        <EventListByChannel key={channel.id} channelEvents={channel.events} />
      ))}
    </div>
  );
};
