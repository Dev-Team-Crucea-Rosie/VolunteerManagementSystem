// Carousel.tsx

import React, { useState } from "react";
import classes from "../../styles/MainContent.module.css";
import { ChevronRight } from "react-feather";

const NewsCard: React.FC = () => {
  return (
    <div className={classes.newsCard}>
      <img
        src="https://via.placeholder.com/300x200"
        alt="news"
        className={classes.newsImage}
      />
      <div className={classes.newsInfo}>
        <h3>Titlu știre</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          suscipit, sapien nec
        </p>
        <button className={classes.readMoreBtn}>
          Citeste <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
