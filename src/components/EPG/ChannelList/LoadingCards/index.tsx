import { Fragment } from "react";
import Loader from "../../../commons/Loader";
import "./style.scss";

export const LoadingCards = () => {
  return (
    <Fragment>
      <div className="loading-card">
        <Loader spinnerStyles={{ width: "50px", height: "50px" }} />
      </div>
      <div className="loading-card">
        <Loader spinnerStyles={{ width: "50px", height: "50px" }} />
      </div>
      <div className="loading-card">
        <Loader spinnerStyles={{ width: "50px", height: "50px" }} />
      </div>
      <div className="loading-card">
        <Loader spinnerStyles={{ width: "50px", height: "50px" }} />
      </div>
      <div className="loading-card">
        <Loader spinnerStyles={{ width: "50px", height: "50px" }} />
      </div>
      <div className="loading-card">
        <Loader spinnerStyles={{ width: "50px", height: "50px" }} />
      </div>
    </Fragment>
  );
};
