import React from "react";
import { useDispatch } from "react-redux";
import { getEPG, egpError } from '../../redux/actions/epgActions';
import { getDateForFetch } from "../../utils/epgUtils";
import PrimaryButton from "../commons/PrimaryButton";
import './style.scss';

const date = new Date();

const EPGError = () => {
  const dispatch = useDispatch();

  const handleErrorClick = () => {
    dispatch(egpError());
    dispatch(
      getEPG(
        getDateForFetch(`${date.getDate()}00`),
        getDateForFetch(`${date.getDate()}06`)
      )
    );
  };

  return (
    <div className="epg-error">
      <h1>Ops algo salio mal!</h1>
      <PrimaryButton textContent="Reintentar" onClick={handleErrorClick} />
    </div>
  );
};

export default EPGError;
