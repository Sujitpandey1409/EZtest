import React from "react";
import "./Card.css";
const Card = ({logoClass, title}) => {

  return (
    <div className="CardContainer">
      <div className="header">
        <div className={`logo ${logoClass}`}></div>
        <div className="title">{title}</div>
      </div>
      <div className="info">
        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
        dolor sit amet
      </div>
    </div>
  );
};

export default Card;
