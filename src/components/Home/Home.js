import React, { useState } from "react";
import "./Home.scss";
import hunan1 from "../images/hunan1.jpg";
import { Document, Page } from "react-pdf";
import BlocCertification from "./BlocCertificate.pdf";

import menu1 from '../images/menu1.jpg';
import menu2 from '../images/menu2.jpg';
import menu3 from '../images/menu3.jpg';


function Home() {
  return (
    <div id="home">
      <button><a href = {BlocCertification} target = "_blank">View/Download Menu</a></button>
      <img className='menuPages' src={menu1} alt='menu page' />
      <img className='menuPages' src={menu2} alt='menu page' />
      <img className='menuPages' src={menu3} alt='menu page' />

    </div>
  );
}

export default Home;

/*
<img src={hunan1} alt='Menu Items Up Close' />
<img src={hunan1} alt='Menu Items Up Close' />

import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class FoodCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
});

export default FoodCarousel
*/
