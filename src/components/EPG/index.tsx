import { TimeLine } from "./TimeLine";
import { ChannelList } from "./ChannelList";
import { EventsList } from "./EventsList";
import "./style.scss";
import { useCarousel } from "../../hooks/useCarousel";
import { EpgControls } from "./EpgControls";

const EPG = () => {
  const { leftPosition, handleNextClick, handlePrevClick } = useCarousel(150);

  console.log(leftPosition);

  return (
    <>
      <div className="epg">
        <EpgControls
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
        <TimeLine leftPosition={leftPosition} />
        <div className="epg-content">
          <ChannelList />
          <EventsList leftPosition={leftPosition} />
        </div>
      </div>
    </>
  );
};

export default EPG;
