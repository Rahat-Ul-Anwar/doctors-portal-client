import React from "react";

const InfoCard = ({ card }) => {
    const { icon, name, description,bgClass } = card;
  return (
    <div className={`card p-4 text-white md:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
              <h2 className="card-title">{name}</h2>
        <p>{description}</p>
       
      </div>
    </div>
  );
};

export default InfoCard;
