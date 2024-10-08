import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/Navbar";
import CustomCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const Home: React.FC = () => {
  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
