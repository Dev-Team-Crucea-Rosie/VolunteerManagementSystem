import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MaterialUICarousel from "./components/Carousel";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MaterialUICarousel />
    </div>
  );
};

export default Home;
