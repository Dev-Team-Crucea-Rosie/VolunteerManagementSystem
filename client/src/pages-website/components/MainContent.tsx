// MainContent.tsx

import React from "react";
import classes from "../../styles/MainContent.module.css";

const MainContent: React.FC = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.form}>
                <h2>Înscriere cursuri</h2>
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
            </div>
        </div>
    );
};

export default MainContent;
