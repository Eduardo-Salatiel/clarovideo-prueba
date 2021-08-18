import { CSSProperties } from "react";
import "./style.scss";

interface Props {
  spinnerStyles?: CSSProperties;
}

const Loader = ({ spinnerStyles }: Props) => {
  return (
    <div className="loader">
      <div className="loader-spinner" style={spinnerStyles} />
    </div>
  );
};

export default Loader;

