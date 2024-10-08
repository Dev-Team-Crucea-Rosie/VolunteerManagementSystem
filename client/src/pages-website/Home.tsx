import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/Navbar";
import CustomCarousel from "./components/Carousel";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
      <Footer />
    </div>
  );
};

export default Home;
