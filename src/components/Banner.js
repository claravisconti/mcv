import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import slide from '../images/banner_01.jpg';
import slide2 from '../images/banner_01.jpg';
import slide3 from '../images/banner_01.jpg';

function Banner() {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default Banner;
