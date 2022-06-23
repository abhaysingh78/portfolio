import React, { useContext } from "react";
import "./Services.css";
import Resume from "./Resume.pdf";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='services'>
      <div className='awesome'>
        {/* dark mode */}
        <span></span>
        <span>Services</span>
        <spane style={{ color: darkMode ? "white" : "" }}>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className='cards'>
        <div style={{ left: " 14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>
        <div style={{ left: "-11rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        <div style={{ top: "19rem", left: "25rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color='rgba(252, 166, 31, 0.45)'
          />
        </div>
        <div
          className='blur s-blur2'
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
