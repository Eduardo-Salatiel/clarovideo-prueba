import { useEffect, useRef, useState } from "react";
import { Channel } from "../interfaces/ProgramGuide";
import { useAppSelector } from "../redux/hooks/index";

export const useGetEpgChannels = () => {
  const { channels, isLoading } = useAppSelector((state) => state.epgReducer);
  const channelIndex = useRef(20);
  const [moreChannels, setMoreChannels] = useState<Channel[]>([]);

  const getMoreChannels = () => {
    if (channelIndex.current < channels.length) {
      setMoreChannels((prevState) => [
        ...prevState,
        ...channels.slice(channelIndex.current, channelIndex.current + 20),
      ]);
      channelIndex.current += 20;
    }
  };

  useEffect(() => {
    if (channelIndex.current === 20) {
      setMoreChannels(channels.slice(0, channelIndex.current));
    }
  }, [channels]);

  return {
    channels: moreChannels,
    getMoreChannels,
    isLoading,
  };
};
