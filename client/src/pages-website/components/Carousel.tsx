import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import classes from "../../styles/Carousel.module.css";

const CustomCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fadeInClass, setFadeInClass] = useState(classes.fadeInText);

    const handleSelect = (selectedIndex: number) => {
        setFadeInClass("");
        setTimeout(() => {
            setCurrentSlide(selectedIndex);
            setFadeInClass(classes.fadeInText);
        }, 50);
    };

    return (
        <div className={classes.carousel}>
            <Carousel activeIndex={currentSlide} onSelect={handleSelect} interval={5000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/background.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={fadeInClass + " " + classes.caption}>
                        <h3>First slide label</h3>
                        <p>blablablablavlllalbal</p>
                        <button className={classes.myButtonCaption}>Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/background.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className={fadeInClass + " " + classes.caption}>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className={classes.myButtonCaption}>Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
