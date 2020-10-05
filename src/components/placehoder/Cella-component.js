import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tilt from 'react-parallax-tilt';
import './cella.scss'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Cella = (props) => {

      return (
        <Tilt className="parallax-effect-cella" perspective={500} >
            <div className="inner-element" >
                <div className="div-cella">

                  <i className="fab fa-js-square fa-lg" style={{color: "orange", marginRight:"10px"}}></i>
                  <i class="fab fa-laravel" fa-lg style={{color: "orange", marginRight:"10px"}}></i>
                  <i className="fab fa-php fa-lg" fa-lg style={{color: "blue", marginRight:"10px"}}></i>
                  <i class="fas fa-database" fa-lg style={{color: "gray", marginRight:"10px"}}></i>
                  <i class="fab fa-css3-alt" fa-lg style={{color: "orange", marginRight:"10px"}}></i>
                </div>

                <div style={{marginBottom:"10px"}}>
                        <a href="https://www.thecela.com/" style={{textDecoration:'none'}}>https://www.thecela.com/</a>

                </div>
                <div style={{fontSize:"20px", textAlign:"left"}}>



                  <ul>
                      <li>
                        Apply modern JavaScript && Laravel to build full stack Web app.
                      </li>
                      <li>
                      Assisting with the transition from a waterfall method to the more efficient Agile
methodology.
                      </li>
                      <li>Leveraging responsive web frameworks to complete deliverables ahead of schedule.</li>
                  </ul>


</div>

            </div>

        </Tilt>


      );
    };

export default Cella;