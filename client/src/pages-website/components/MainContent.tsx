// MainContent.tsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";
import classes from "../../styles/MainContent.module.css";

const MainContent: React.FC = () => {
  return (
    <div>
      <div className={classes.mainContainer} id="cursuri">
        <div className={classes.form}>
          <h2>Înscriere cursuri prim ajutor</h2>

          <form className={classes.formContainer}>
            <p>Campurile cu * sunt obligatorii</p>
            <div className={classes.formGroup}>
              <input
                type="text"
                id="nume"
                name="nume"
                required
                placeholder="Nume*"
              />
            </div>

            <div className={classes.formGroup}>
              <input
                type="text"
                id="prenume"
                name="prenume"
                required
                placeholder="Prenume*"
              />
            </div>

            <div className={classes.formGroup}>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                required
                placeholder="Telefon*"
              />
            </div>

            <div className={classes.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email*"
              />
            </div>

            <div className={classes.formGroup}>
              <textarea name="mesaj" id="mesaj" placeholder="Mesaj"></textarea>
            </div>

            <button type="submit" className={classes.submitButton}>
              Submit
            </button>
          </form>
        </div>
        <div className={classes.formPicture}>
          <img
            src="https://via.placeholder.com/600x400"
            alt="background"
            className={classes.backgroundImage}
          />

          <div className={classes.formPictureText}>
            <h2>Cursuri de prim ajutor</h2>
            <p>
              Înscrie-te la cursurile de prim ajutor organizate de Crucea Roșie
              Sector 3! Cursurile sunt recunoscute la nivel european, au loc
              lunar în weekend și oferă certificare pentru acordarea primului
              ajutor premedical și acțiunea în caz de dezastru.
            </p>
            <p>
              Pret normal: <span className={classes.courseDetails}>200</span>{" "}
              lei
            </p>
            <p>
              Pret studenti: <span className={classes.courseDetails}>100</span>{" "}
              lei
            </p>
            <p>
              Durata: <span className={classes.courseDetails}>12</span> ore
            </p>
          </div>
        </div>
      </div>
      <div className={classes.newsHeader}>
        <h1>Știri Crucea Roșie Română</h1>
      </div>
      <Container className={classes.newsContainer}>
        <Row>
          <Col md={4}>
            <NewsCard />
          </Col>
          <Col md={4}>
            <NewsCard />
          </Col>
          <Col md={4}>
            <NewsCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
