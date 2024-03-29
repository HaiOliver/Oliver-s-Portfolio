import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Chart from "./horizontal-chart";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        {/* skill */}
        <Skills theme={this.props.theme} />
        {/* show summary skill */}
        <Chart />
        {/* project */}
        <Projects theme={this.props.theme} />
        {/* experience */}
        <Experience theme={this.props.theme} />
        {/* education */}
        <Education theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
