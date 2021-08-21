import { ChannelCard } from "./ChannelCard";
import { LoadingCards } from "./LoadingCards";
import { Channel } from "../../../interfaces/ProgramGuide";
import "./style.scss";
import React from "react";

interface Props {
  isLoading: boolean;
  channels: Channel[];
}

export const ChannelList = React.forwardRef(
  ({ channels, isLoading }: Props, ref: any) => {

    return (
      <div className="channel-list" ref={ref}>
        <div className="channel-list-today">
          <span>HOY</span>
        </div>
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
  }
);
