import { useRef} from "react";
import { Channel } from "../../../../interfaces/ProgramGuide";
import FadeInImage from "../../../commons/FadeInImage";
import "./style.scss";

interface Props {
  channelInfo: Channel;
}

export const ChannelCard = ({ channelInfo }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null)

  return (
    <div className="channel-card" ref={elementRef}>
      <span className="channel-card-number">{channelInfo.number}</span>
      <FadeInImage
        imageSrc={channelInfo.image}
        imageAlt="canal logo"
      />
    </div>
  );
};
