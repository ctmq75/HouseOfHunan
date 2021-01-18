import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Navigation from './components/Nav/Nav.js'
import Footer from './components/Footer/Footer'
import About from './components/About/About.js'
import Home from './components/Home/Home'
import Location from './components/Location/Location'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path='/location' component={Location} />
      <Route exact path="/menu" component={Menu} />

      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;


// <Route exact path='/location' component={Location} />

