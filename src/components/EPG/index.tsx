import { useRef } from "react";
import { useCarousel } from "../../hooks/useCarousel";
import { useGetEpgChannels } from "../../hooks/useGetEpgChannels";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
//----------------------------------------------------------------------------------
import { ChannelList } from "./ChannelList";
import { EventsList } from "./EventsList";
import { EpgControls } from "./EpgControls";
import "./style.scss";

const EPG = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { leftPosition, handleNextClick, handlePrevClick } = useCarousel(300);
  const { channels, isLoading, getMoreChannels } = useGetEpgChannels();
  useInfiniteScroll(containerRef, getMoreChannels);


  return (
    <>
      <div className="epg">
        <EpgControls
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
        <div className="epg-content" ref={containerRef}>
          <ChannelList channels={channels} isLoading={isLoading} />
          <EventsList channels={channels} leftPosition={leftPosition} />
        </div>
      </div>
    </>
  );
};

export default EPG;
