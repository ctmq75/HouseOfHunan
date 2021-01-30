import React from "react";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import "./Nav.scss";

class Navigation extends React.Component {
   
  render() {
    return (
      <div id="nav">
        <div id='nav-title'>
          <h1>House of Hunan</h1>
          <ul id='navLinks'>
            <li>
              <a href="/"><button>Home</button></a>
            </li>
            <li>
              <a href="/menu"><button>Menu</button></a>
            </li>
            <li>
              <a href="/location"><button>Location</button></a>
            </li>
            <li>
              <a href="#"><button>Gallery</button></a>
            </li>
            <li>
              <a href="#"><button>Reviews</button></a>
            </li>
            <li>
              <a href="/about"><button>About Us</button></a>
            </li>
            <li>
              <a href="https://www.beyondmenu.com/20070/chicago/house-of-hunan-chicago-60614.aspx?utm_source=satellite&utm_medium=home_order&pk_vid=446aae97154b03021610492576aa0265" target="_blank" rel='noreferrer'><button>Order Online</button></a>
            </li>
          </ul>

        </div>
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">House of Hunan</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

</>

      </div>
    );
  }
}

export default Navigation;
