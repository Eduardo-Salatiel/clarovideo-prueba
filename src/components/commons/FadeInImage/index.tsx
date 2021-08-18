import { CSSProperties, Fragment, useState } from "react";
//-----------------------------------------------------------------------------
import "./style.scss";

interface Props {
  imageAlt: string;
  imageSrc: string;
  styles?: CSSProperties;
}

const FadeInImage = ({ imageAlt, imageSrc, styles }: Props) => {
  const [opacity, setOpacity] = useState(0);

  const handleImageLoad = () => {
    setOpacity(1);
  };

  return (
    <Fragment>
      {opacity === 0 && (
        null
      )}
      <img
        className="fade-in-image"
        src={imageSrc}
        alt={imageAlt}
        onLoad={handleImageLoad}
        style={{ ...styles, opacity }}
      />
    </Fragment>
  );
};

export default FadeInImage;
