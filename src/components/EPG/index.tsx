import { useRef } from "react";
import { useCarousel } from "../../hooks/useCarousel";
import { useGetEpgChannels } from "../../hooks/useGetEpgChannels";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { useGetMoreEvents } from "../../hooks/useGetMoreEvents";
//----------------------------------------------------------------------------------
import { ChannelList } from "./ChannelList";
import { EventsList } from "./EventsList";
import { EpgControls } from "./EpgControls";
import "./style.scss";
import { useVerifyIsMobile } from "../../hooks/useVerifyIsMobile";

const EPG = () => {
  const { isMobile } = useVerifyIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { leftPosition, handleNextClick, handlePrevClick } = useCarousel(
    isMobile ? 240 : 300
  );
  const { channels, isLoading, getMoreChannels } = useGetEpgChannels();
  useGetMoreEvents(leftPosition, isMobile ? 480 : 600);
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
