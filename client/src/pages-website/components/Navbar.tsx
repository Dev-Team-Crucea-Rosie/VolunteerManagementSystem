import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import classes from "../../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={`${classes.navbar}`}>
      <div className={`${classes.navbarLogo}`}>
        <img
          className={`${classes.navbarLogoImg}`}
          src="../../images/LogoCRR.png"
          alt="Logo"
        />
        <h5 className={`${classes.navbarLogoText}`}>FILIALA SECTOR 3</h5>
      </div>
      <ul className={`${classes.navbarLinks}`}>
        <li>
          <Link to="/about">Despre noi</Link>
        </li>
        <li>
          <Link to="/contact">Activitati & Cursuri</Link>
        </li>
        <li>
          <Link to="/app">Voluntariat</Link>
        </li>
        <li>
          <Link to="/donate" className={`${classes.donateButton}`}>
            Doneaza
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
