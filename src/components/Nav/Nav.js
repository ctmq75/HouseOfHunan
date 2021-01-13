import React from "react";
import "./Nav.scss";
import Hunan_Characters from './Hunan_Characters.svg.png'

class Nav extends React.Component {
   
  render() {
    return (
      <div id="nav">
        <span>
          <h1>House of Hunan</h1>
        </span>
        <span>
           <img id='characters' src={Hunan_Characters} alt='Hunan in Chinese Characters' ></img>
        </span>
        <span>
          <ul id='navLinks'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="/location">Location</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="https://www.beyondmenu.com/20070/chicago/house-of-hunan-chicago-60614.aspx?utm_source=satellite&utm_medium=home_order&pk_vid=446aae97154b03021610492576aa0265">Order Online</a>
            </li>
          </ul>
        </span>
      </div>
    );
  }
}

export default Nav;
