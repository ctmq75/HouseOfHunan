
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>House of Hunan</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/menu' activeStyle>
            Menu
          </NavLink>
          <NavLink to='/location' activeStyle>
            Location
          </NavLink>
          <NavLink to='/reviews' activeStyle>
            Reviews
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='https://www.beyondmenu.com/20070/chicago/house-of-hunan-chicago-60614.aspx?utm_source=satellite&utm_medium=top_banner&pk_vid=446aae97154b03021610997448cec4cb'>Order Now!</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;