import React from "react";
import classes from "../styles/Courses.module.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";

const Courses = () => {
    return (
        <div>
            <CustomNavbar />
            <div className={classes.gridContainer}>
                {/* Top-left: Text */}
                <div className={classes.gridItem + " " + classes.text}>
                    <h2>Cursuri de Prim Ajutor și Dezastre</h2>
                    <p>
                        Se organizează lunar la filiala sectorului 3, în condițiile corespunzătoare,
                        sâmbăta și duminica, între orele 9-16, în Bd N Grigorescu nr 12, Sector 3
                        (Liceul Anghel Saligny).
                    </p>
                    <p>
                        Absolvenții primesc certificare că știu să acorde primul ajutor premedical
                        și sunt informați cum să acționeze în caz de dezastru.
                    </p>
                    <p>
                        Costul cursului: <strong>250 lei</strong> (reducere de 30% pentru elevi și studenți: <strong>175 lei</strong>).
                    </p>
                    <p>
                        Plata: <strong>RO74RNCB0082044177940001</strong>, BCR – Unirii, pentru Societatea Națională de Cruce Roșie din România, Filiala Sectorului 3.
                    </p>
                </div>

                {/* Top-right: Image */}
                <div className={classes.gridItemImage + " " + classes.image}>
                    <img src="https://via.placeholder.com/300x300" alt="First aid training" />
                </div>

                {/* Bottom-left: Image */}
                <div className={classes.gridItemImage + " " + classes.image}>
                    <img src="https://via.placeholder.com/300x300" alt="Disaster preparedness" onError={(e) => e.currentTarget.src = "https://via.placeholder.com/300x300"} />
                </div>

                {/* Bottom-right: Text */}
                <div className={classes.gridItem + " " + classes.text}>
                    <h3>Contact și Înscrieri</h3>
                    <p>
                        Telefon: <a href="tel:0734449938">0734449938</a><br />
                        Email: <a href="mailto:sector3@crucearosie.ro">sector3@crucearosie.ro</a>
                    </p>
                    <p>
                        Vă așteptăm la curs cu dovada plății! Locuri limitate la <strong>10 participanți</strong>.
                    </p>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Courses;
