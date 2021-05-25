import React from "react";
import "./Greeting.css";
import background from "./patternpad2.svg";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="greet-main"
        id="greeting"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {/* <h1 className="greeting-text" style={{ color: theme.secondaryText }}>
                {greeting.title}
              </h1> */}
              <h1 className="greeting-text" style={{ color: "#8B38AA" }}>
                {greeting.title}
              </h1>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                {greeting.nickname}
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: "#D023BE" }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>

          <div className="greeting-image-div" id="three-container"></div>
        </div>
      </div>
    </Fade>
  );
}
