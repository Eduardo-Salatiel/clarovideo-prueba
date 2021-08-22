import { Channel } from "../../../../interfaces/ProgramGuide";
import FadeInImage from "../../../commons/FadeInImage";
import "./style.scss";

interface Props {
  channelInfo: Channel;
}

export const ChannelCard = ({ channelInfo }: Props) => {

  return (
    <div className="channel-card">
      <span className="channel-card-number">{channelInfo.number}</span>
      <FadeInImage
        imageSrc={channelInfo.image}
        imageAlt="canal logo"
      />
    </div>
  );
};
