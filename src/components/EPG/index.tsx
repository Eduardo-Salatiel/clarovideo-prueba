import { TimeLine } from "./TimeLine";
import { ChannelList } from "./ChannelList";
import { EventsList } from "./EventsList";
import "./style.scss";

const EPG = () => {
  return (
    <div className="epg">
      <TimeLine />
      <div className="epg-content">
        <ChannelList />
        <EventsList />
      </div>
    </div>
  );
};

export default EPG;
