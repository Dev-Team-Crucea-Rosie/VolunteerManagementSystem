// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import classes from "../../styles/Navbar.module.css";

const CustomNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" className={classes.navbar}>
      <Container className={classes.navbarContainer}>
        <Navbar.Brand as={Link} to="/" className={classes.logo}>
          <img
            src="../../images/LogoCRR.png"
            alt="logo"
            className={classes.logoImg}
          />
          <h5 className={classes.logoText}> Filiala Sector 3</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={"ms-auto " + classes.navbarLinks}>
            <NavDropdown
              title="Despre Noi"
              id="basic-nav-dropdown"
              className={
                "me-4 " + classes.navbarLink + " " + classes.navbarDropdown
              }
            >
              <NavDropdown.Item as={Link} to="/service1">
                Istoric
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service2">
                Galerie media
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service3">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service3">
                Comitet CR Sector 3
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className={
                "me-4 " + classes.navbarLink + " " + classes.navbarDropdown
              }
              title="Activitati & Cursuri"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/contact">
                Cursuri prim ajutor
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">
                Prevenire si inteventie dezastre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">
                Banca de alimente
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">
                Servicii sociale
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/app"
              className={"me-4 " + classes.navbarLink}
            >
              Voluntariat
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/doneaza"
              className={
                "me-4 " + classes.navbarLink + " " + classes.donateButton
              }
            >
              Doneaza
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
