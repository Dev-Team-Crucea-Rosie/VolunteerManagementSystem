import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import classes from "../../styles/Carousel.module.css";

const items = [
  {
    name: "First Slide",
    imgPath: "https://picsum.photos/800/400?random=1",
  },
  {
    name: "Second Slide",
    imgPath: "https://picsum.photos/800/400?random=2",
  },
  {
    name: "Third Slide",
    imgPath: "https://picsum.photos/800/400?random=3",
  },
];

const MaterialUICarousel: React.FC = () => {
  return (
    <Carousel className={`${classes.carousel}`}>
      {items.map((item, i) => (
        <Paper key={i} className={`${classes.carousel}`}>
          <img src={item.imgPath} alt={item.name} />
          <div className={classes.overlay}></div>
          <div className={classes.carouselContent}>
            <h2>{item.name}</h2>
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </div>
        </Paper>
      ))}
    </Carousel>
  );
};

export default MaterialUICarousel;
