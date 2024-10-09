// MainContent.tsx

import React from "react";
import classes from "../../styles/MainContent.module.css";

const MainContent: React.FC = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.form}>
        <h2>Înscriere cursuri prim ajutor</h2>
        <form className={classes.formContainer}>
          <div className={classes.formGroup}>
            <input
              type="text"
              id="nume"
              name="nume"
              required
              placeholder="Nume"
            />
          </div>

          <div className={classes.formGroup}>
            <input
              type="text"
              id="prenume"
              name="prenume"
              required
              placeholder="Prenume"
            />
          </div>

          <div className={classes.formGroup}>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              required
              placeholder="Telefon"
            />
          </div>

          <div className={classes.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
            />
          </div>

          <button type="submit" className={classes.submitButton}>
            Submit
          </button>
        </form>
      </div>
      <div className={classes.formPicture}>
        <img
          src="../../images/background.jpg"
          alt="background"
          className={classes.backgroundImage}
        />

        <div className={classes.formPictureText}>
          <h2>Cursuri de prim ajutor</h2>
          <p>
            Înscrie-te la cursurile de prim ajutor organizate de Crucea Roșie
            Sector 3! Cursurile sunt recunoscute la nivel european, au loc lunar
            în weekend și oferă certificare pentru acordarea primului ajutor
            premedical și acțiunea în caz de dezastru.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
