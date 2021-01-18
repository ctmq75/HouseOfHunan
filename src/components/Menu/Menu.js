import React, { Component } from "react";
import { Document } from "react-pdf";
import HunanMenu from "./Hunan-menu.pdf";
import './Menu.scss'

import menu1 from '../images/menu1.jpg';
import menu2 from '../images/menu2.jpg';
import menu3 from '../images/menu3.jpg';

export class Menu extends Component {
  render() {
    return (
      <div id='menu-screen'>
        <button>
          <a href={HunanMenu} target="_blank">
            View/Download Menu
          </a>
        </button>
        <img className="menuPages" src={menu1} alt="menu page" />
        <img className="menuPages" src={menu2} alt="menu page" />
        <img className="menuPages" src={menu3} alt="menu page" />
      </div>
    );
  }
}

export default Menu;
