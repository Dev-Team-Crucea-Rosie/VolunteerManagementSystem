// Carousel.tsx
import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "../../styles/Carousel.module.css";

const CustomCarousel: React.FC = () => {
    return (
        <div className={classes.carousel}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src="../../images/background.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/background.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
