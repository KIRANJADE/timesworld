import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LeftIcon from '../assets/images/svg/arrow-left.svg';
import RightIcon from '../assets/images/svg/arrow-right.svg';
import CarouselImage from '../assets/images/carousel.png';

const CustomCarousel = () => {
    const carouselRef = useRef(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    return (
        <div className="custom-carousel-container">
            <Carousel id="customCarousel" ref={carouselRef}>
                <Carousel.Item>
                    <img className="sliderImg d-block w-100" src={CarouselImage} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="sliderImg d-block w-100" src={CarouselImage} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="sliderImg d-block w-100" src={CarouselImage} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="sliderImg d-block w-100" src={CarouselImage} alt="Fourth slide" />
                </Carousel.Item>
            </Carousel>

            <div className="custom-carousel-indicators">
                <button
                    className="custom-arrow"
                    onClick={handlePrev}
                    aria-label="Previous"
                >
                    <img
                        src={LeftIcon}
                        style={{ width: '30px', height: '30px' }}
                        alt="<--"
                        className="leftIcon"
                    />
                </button>

                <button
                    className="custom-arrow"
                    onClick={handleNext}
                    aria-label="Next"
                >
                    <img
                        src={RightIcon}
                        style={{ width: '30px', height: '30px' }}
                        alt="-->"
                        className="rightIcon"
                    />
                </button>
            </div>
        </div>
    );
};

export default CustomCarousel;
