import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/Navbar";
import CustomCarousel from "./components/Carousel";

const Home: React.FC = () => {
  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
    </div>
  );
};

export default Home;
