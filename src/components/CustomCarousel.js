import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LeftIcon from '../assets/images/svg/arrow-left.svg';
import RightIcon from '../assets/images/svg/arrow-right.svg';

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
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Fourth slide"
                    />
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
