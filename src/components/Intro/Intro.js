import React, { useContext } from "react";
import { Link } from "react-scroll";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Intro' id='Intro'>
      <div className='i-left'>
        <div className='i-name'>
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Abhay</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Frontend Developer in web designing and development, producting the
            Quality work
          </span>
        </div>
        <Link to='contact' smooth={true} spy={true}>
          <button className='button i-button'>Hire me</button>
        </Link>
        {/* social icons */}
        <div className='i-icons'>
          <img src={Github} alt='' />
          <img src={LinkedIn} alt='' />
          <img src={Instagram} alt='' />
        </div>
      </div>

      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={boy} alt='' />
        <img src={glassesimoji} alt='' />
        <div style={{ top: "-4%", left: "74%" }}>
          <FloatingDiv img={crown} text1='Web' text2='Developer' />
        </div>
        {/* <div style={{ left: "9rem", top: "18rem" }}>
          <FloatingDiv img={thumbup} text1='Best Design' text2='Award' />
        </div> */}
        <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className='blur'
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
