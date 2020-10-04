import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Cella from '../../components/placehoder/Cella-component'
import Shackfolio from '../../components/placehoder/shackfolio-component'
import JOS from '../../components/placehoder/jos-component'

// list of projects I did



class Projects extends Component {

  render() {
// ====================================================================

// ====================================================================


    const theme = this.props.theme;

    return (
      <div className="projects-main">
        {/* <Header theme={theme} /> */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">

                {/* <ProjectsImg theme={theme} /> */}
              </div>
              <div className="projects-heading-text-div" style={{margin: "auto"
 }}>
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}

                </p>
              </div>
            </div>
          </Fade>
        </div>

      {/* start my personal project */}

      <div style={{margin: "auto",
  width: "50%"}}>

        <Container>
{/* ======================================================================================= */}

        {/* Shackfolio */}
        <Row >
          <Col sm={6} md={6}  lg={12}>
                      {/* project go here */}
                        <Shackfolio/>

                      </Col>


          </Row>
        {/* JOS */}
        <Row style={{marginTop:"150px"}}>
          <Col sm={6} md={12}  lg={12} >
                      {/* project go here */}
                        <JOS/>

                      </Col>

          </Row>




        {/* Cella */}
                <Row style={{marginTop:"150px" ,marginBottom:"300px"}}>
                    <Col sm={6} md={12}  lg={12} >
                    {/* project go here */}
                      <Cella/>

                    </Col>

                  </Row>



{/* ======================================================================================= */}


      </Container>


      </div>
        {/* <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div> */}
        {/* <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/ashutosh1919"
          newTab={true}
          theme={theme}
        /> */}
        {/* <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} /> */}
      </div>
    );
  }
}

export default Projects;
