import React from "react";
import "./Home.scss";
import BackgroundSlider from 'react-background-slider'
import hunan1 from "../images/hunan1.jpg";
import image1 from '../images/rice.jpg'
import image2 from '../images/wok.jpg'
import image3 from '../images/soup.jpg'



function Home() {
  return (
    <div id="home">
        <BackgroundSlider
  images={[image1, image2, image3]}
  duration={6} transition={3} />
    </div>
  );
}

export default Home;

/*


Zomato api key- 6d2d10b2e940e93030ae4a03b38516e1


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
