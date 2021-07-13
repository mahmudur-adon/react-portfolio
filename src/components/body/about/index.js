import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Md. Mahmudur Rahman</span>.<br /> I love
          experimenting with the web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/circle-cropped.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
