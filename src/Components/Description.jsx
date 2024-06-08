import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="DescriptionContainer">
      <div className="LogoContainer"></div>
      <div className="titleContainer">Suite Of Business Support Services</div>
      <div className="details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed
      </div>
      <form className="formContainer">
        <input
          className="inputStyle"
          type="email"
          placeholder="Email Address"
        />
        <button className="btnStyle">Contact Me</button>
      </form>
    </div>
  );
};

export default Description;
