import { TimeLine } from "./TimeLine";
import { ChannelList } from "./ChannelList";
import "./style.scss";

const EPG = () => {
  return (
    <div className="epg">
      <TimeLine />
      <div className="epg-content">
        <ChannelList />
      </div>
    </div>
  );
};

export default EPG;
