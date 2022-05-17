import React from "react";
import './InfoCard.css';

const InfoCard = ({img, cardTitle, cardDiscription, bgClass}) => {

  return (
      <div className={`card lg:card-side pt-4 lg:pt-0 shadow-xl text-white ${bgClass}`}>
        <figure>
          <img
            src={img}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardDiscription}</p>
        </div>
      </div>
  );
};

export default InfoCard;
