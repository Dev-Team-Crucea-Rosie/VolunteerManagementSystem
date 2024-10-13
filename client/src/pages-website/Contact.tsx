// Contact.tsx

import React from "react";
import styles from "../styles/Contact.module.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div>
      <CustomNavbar />
      <div className={`container ${styles.contactContainer}`}>
        <div className="row">
          <div className="col-md-6">
            <h1 className={styles.contactTitle}>Contact</h1>
            <p className={styles.contactSubtitle}>
              CRUCEA ROȘIE ROMÂNĂ – FILIALA SECTOR 3 BUCUREȘTI
            </p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Adresă:</strong> Bulevardul Nicolae Grigorescu, nr.12,
                Sector 3, București
              </p>
              <p>
                <strong>Email:</strong> sector3@crucearosie.ro
              </p>
              <p>
                <strong>Cont DONAȚII:</strong> RO36RNCB0082044177940006
              </p>
              <p>
                <strong>Telefon:</strong> 0734.449.938
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Contact"
              className={styles.contactImage}
            />
          </div>
        </div>
        <div className={`row ${styles.mapContainer}`}>
          <div className="col-12">
            <iframe
              title="map"
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.4481653128167!2d26.15788151584745!3d44.41234317910237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fd00266a0027%3A0x77e78f11f83f1b2!2sBulevardul%20Nicolae%20Grigorescu%2012%2C%20Bucure%C8%99ti%2C%20Romania!5e0!3m2!1sen!2sro!4v1696759404873!5m2!1sen!2sro"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
