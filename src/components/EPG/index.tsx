import { TimeLine } from "./TimeLine";
import { ChannelList } from "./ChannelList";
import { EventsList } from "./EventsList";
import "./style.scss";
import { useCarousel } from "../../hooks/useCarousel";

const EPG = () => {
  const { leftPosition, handleNextClick, handlePrevClick } = useCarousel(150);

console.log(leftPosition);

  return (
    <>
    <button onClick={handlePrevClick} >prev</button>
    <button onClick={handleNextClick} >next</button>
    <div className="epg">
      <TimeLine leftPosition={leftPosition}/>
      <div className="epg-content">
        <ChannelList />
        <EventsList leftPosition={leftPosition} />
      
      </div>
    </div>
    </>
  );
};

export default EPG;
