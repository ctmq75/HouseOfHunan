import React from 'react';
import './Home.scss';
import hunan1 from '../images/hunan1.jpg'


function Home(){
    return <div id='home'>
        <img src={hunan1} alt='Menu Items Up Close' />
    </div>
}

export default Home


/*
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