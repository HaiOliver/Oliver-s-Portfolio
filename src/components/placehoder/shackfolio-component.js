import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tilt from 'react-parallax-tilt';
import './shackfolio.scss'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Shackfolio = (props) => {

      return (
        <Tilt className="parallax-effect" perspective={500} >

            <div className="inner-element" >
                <div className="div-shackfolio">
                  <i class="fab fa-laravel" fa-lg style={{color: "orange", marginRight:"10px"}}></i>
                  <i className="fab fa-php fa-lg" style={{color: "blue", marginRight:"10px"}}></i>
                  <i className="fab fa-react fa-lg" style={{color: "blue", marginRight:"10px"}}></i>
                  <i className="fab fa-js-square fa-lg" style={{color: "orange", marginRight:"10px"}}></i>
                  <i class="fas fa-database" fa-lg style={{color: "gray", marginRight:"10px"}}></i>

                </div>

                <div style={{marginBottom:"10px"}}>
                        <a href="http://shackfolio.com/" style={{textDecoration:'none'}}>http://shackfolio.com</a>

                </div>
                <div style={{fontSize:"20px", textAlign:"left"}}>



                                <ul>
                                    <li>
                                      Building nice-looking fullstack web app using React, Laravel, CSS, JS.
                                    </li>
                                    <li>
                                        Working directly with client stakeholders to develop technical solutions for business cases.
                                    </li>
                                    <li>Creating modular, responsive, customized userDashboard using modern React libraries.</li>
                              </ul>


                </div>

            </div>

        </Tilt>


      );
    };

export default Shackfolio;