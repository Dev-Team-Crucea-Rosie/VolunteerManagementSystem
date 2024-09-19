import React from "react";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
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
        ></img>
        <h5 className={`${classes.navbarLogoText}`}>FILIALA SECTOR 3</h5>
      </div>
      <ul className={`${classes.navbarLinks}`}>
        <li className={`${classes.navbarLink} ${classes.hasDropdown}`}>
          <div className={classes.navbarLinkButton}>
            <p>Despre noi</p>
            <SlArrowDown className={`${classes.navbarLinkArrDown}`} />
          </div>
          <ul className={classes.dropdownMenu}>
            <li>
              <Link to="/about">Cine suntem</Link>
            </li>
            <li>
              <Link to="/history">Istorie</Link>
            </li>
            <li>
              <Link to="/galery">Galerie media</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/comitet">Comitet CR Sector 3</Link>
            </li>
          </ul>
        </li>
        <li className={`${classes.navbarLink} ${classes.hasDropdown}`}>
          <div className={classes.navbarLinkButton}>
            <p>Activitati & Cursuri</p>
            <SlArrowDown className={`${classes.navbarLinkArrDown}`} />
          </div>
          <ul className={classes.dropdownMenu}>
            <li>
              <Link to="/activities">Prevenire si interventie dezastre</Link>
            </li>
            <li>
              <Link to="/courses">Cursuri de prim ajutor</Link>
            </li>
            <li>
              <Link to="/social">Servicii sociale</Link>
            </li>
            <li>
              <Link to="/foodbank">Banca de alimente</Link>
            </li>
          </ul>
        </li>
        <li className={`${classes.navbarLinkButton}`}>
          <Link to="/app">Voluntariat</Link>
        </li>
        <li className={`${classes.navbarLinkButton}`}>
          <Link to="/donate" className={`${classes.donateButton}`}>
            Doneaza
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
