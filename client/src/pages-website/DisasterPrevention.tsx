import React, { useState } from "react";
import classes from "../styles/Disaster.module.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";

const DisasterPrevention: React.FC = () => {
  return (
    <div>
      <CustomNavbar />
      <div className={classes.disasterContainer}>
        <h1>Proiectul „Echipa de Căutare – Salvare”</h1>
        <p>
          Proiectul „Echipa de Căutare – Salvare” a fost inițiat de Crucea Roșie
          Sector 3 și urmărește instruirea unui grup-țintă de voluntari, membri
          ai Detașamentului de Intervenție, cu scopul formării unei echipe care
          să sprijine instituțiile statului în acțiuni de căutare și salvare a
          persoanelor dispărute, precum și a victimelor accidentelor și
          dezastrelor în zone rurale și urbane.
        </p>

        <h2>Programul de instruire</h2>
        <p>
          Programul de instruire abordează aspecte teoretice și practice, sub
          forma unor cursuri (trei module de curs), antrenamente (exersarea
          practică a tehnicilor de lucru prezentate la cursuri) și simulări de
          intervenție (în mediul natural sau în structuri artificiale din zone
          urbane).
        </p>
        <p>
          Tematica prezentată include:
          <ul>
            <li>
              Elemente de management specifice acțiunilor de căutare-salvare
            </li>
            <li>Metode și tehnici de căutare</li>
            <li>Metode și tehnici de salvare</li>
            <li>
              Primul ajutor în condiții de mediu dificile (lanțul de asigurare,
              sisteme cu scripeți și linii tensionate pentru transportul
              salvatorilor, victimelor și echipamentelor)
            </li>
          </ul>
        </p>

        <h2>Voluntari</h2>
        <p>
          Grupul țintă al proiectului este format din voluntari cu vârsta minimă
          de 18 ani, membri ai Detașamentului de Intervenție, apți din punct de
          vedere fizic și psihic pentru activitățile vizate.
        </p>

        <h2>Cursuri</h2>
        <ul>
          <li>Metode și tehnici de căutare</li>
          <li>Orientare și navigație</li>
          <li>Comunicare</li>
          <li>Elemente de salvare tehnică</li>
        </ul>

        <h2>Antrenamente și simulări</h2>
        <ul>
          <li>Deplasarea în teren</li>
          <li>Găsirea urmelor</li>
          <li>Orientare și navigație</li>
          <li>Primul ajutor în condiții dificile</li>
          <li>Transportul asigurat al victimei</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default DisasterPrevention;
