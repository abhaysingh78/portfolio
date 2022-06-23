import React from "react";
import "./FloatingDiv.css";

const FloatingDiv = ({ text1, text2, img }) => {
  return (
    <div className='floatingDiv'>
      <img src={img} />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
