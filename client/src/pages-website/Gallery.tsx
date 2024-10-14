import React, { useState } from "react";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import classes from "../styles/Gallery.module.css";

const Galery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <CustomNavbar />
      <div className="container">
        <h1 className={classes.galleryTitle}>Galerie</h1>
        <div className={classes.photoGrid}>
          {[
            "../images/background.jpg",
            "https://via.placeholder.com/300x300",
            "https://via.placeholder.com/300x300",
            "https://via.placeholder.com/300x300",
            "https://via.placeholder.com/300x300",
            "https://via.placeholder.com/300x300",
          ].map((image, index) => (
            <div
              className={classes.gridItem}
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <img src={image} alt={`image ${index + 1}`} />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className={classes.modal} onClick={closeModal}>
            <span className={classes.close}>&times;</span>
            <img
              className={classes.modalContent}
              src={selectedImage}
              alt="Enlarged"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Galery;
