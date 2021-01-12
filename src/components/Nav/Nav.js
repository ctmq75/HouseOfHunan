import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
    render() {
       return (
          <div id='nav'>
             <span>
               <h1>House of Hunan</h1>
            </span>
            <span>
               <ul>
                  <li>Home</li>
                  <li>Menu</li>
                  <li>Location</li>
                  <li>Gallery</li>
                  <li>Reviews</li>
                  <li>About Us</li>
                  <li>Order Online</li>
               </ul>
            </span>
          </div>
       );
    }
 }

 export default Nav