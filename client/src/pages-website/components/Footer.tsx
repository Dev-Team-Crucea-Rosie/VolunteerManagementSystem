import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import classes from "../../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`py-4 ${classes.footer}`}>
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <h5 className={`text-light ${classes.footerHeading}`}>
              Cine suntem
            </h5>
            <ul className={`list-unstyled ${classes.footerLinkGroup}`}>
              <li>
                <a href="/despre-noi" className={classes.footerLink}>
                  Despre noi
                </a>
              </li>
              <li>
                <a href="/echipa" className={classes.footerLink}>
                  Echipa
                </a>
              </li>
              <li>
                <a href="/povestile-noastre" className={classes.footerLink}>
                  Poveștile noastre
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5 className={`text-light ${classes.footerHeading}`}>
              Implică-te
            </h5>
            <ul className={`list-unstyled ${classes.footerLinkGroup}`}>
              <li>
                <a href="/ajuta" className={classes.footerLink}>
                  Ajută
                </a>
              </li>
              <li>
                <a href="/voluntariat" className={classes.footerLink}>
                  Devino voluntar
                </a>
              </li>
              <li>
                <a href="/donatii" className={classes.footerLink}>
                  Donează online
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5 className={`text-light ${classes.footerHeading}`}>Contact</h5>
            <ul className={`list-unstyled ${classes.footerLinkGroup}`}>
              <li className={classes.footerLink}>
                Bulevardul Nicolae Grigorescu, nr.12,
                <br />
                Sector 3, București
              </li>
              <li>
                <a
                  href="mailto:sector3@crucearosie.ro"
                  className={classes.footerLink}
                >
                  sector3@crucearosie.ro
                </a>
              </li>
              <li className={classes.footerLink}>
                Cont DONATII: RO36RNCB0082044177940006
              </li>
              <li className={classes.footerLink}>Telefon: 0734.449.938</li>
            </ul>
            <div>
              <a href="https://facebook.com" className="text-light me-3">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="text-light me-3">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" className="text-light">
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <a href="/" className="text-light">
              Politica de confidentialitate si cookie-uri
            </a>
            <p className="text-light">2024 © Toate drepturile rezervate</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
