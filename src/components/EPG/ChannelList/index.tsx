import { useAppSelector } from "../../../redux/hooks";
import { ChannelCard } from "./ChannelCard";
import { LoadingCards } from "./LoadingCards";
import "./style.scss";

export const ChannelList = () => {
  const { channels, isLoading } = useAppSelector((state) => state.egpReducer);

  return (
    <div className="channel-list">
      <div className="channel-list-container">
        {isLoading ? (
          <LoadingCards />
        ) : (
          channels.map((channel) => (
            <ChannelCard channelInfo={channel} key={channel.id} />
          ))
        )}
      </div>
    </div>
  );
};
