import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import classes from "../styles/Istoric.module.css";

const Istoric: React.FC = () => {
    return (
        <div className={classes.ist}>
            <Navbar />
            <div className={classes.content}>
                <h1>Crucea Rosie Romana</h1>
                <p>
                    Crucea Rosie Romana are o traditie neintrerupta de peste 134 ani in acordarea primului ajutor de baza si in pregatirea surorilor voluntare de Cruce Rosie.
                </p>
                <p>
                    Primul curs “de bandaje” a fost organizat in 1877, medicine in incinta Spitalului Coltea din Bucuresti.
                </p>
                <p>
                    De atunci, mii de persoane au absolvit cursuri de prim ajutor sau de surori voluntare de Cruce Rosie.
                </p>
                <p>
                    Crucea Rosie Filiala Sector 3 este o organizatie umanitara, auxiliara autoritailor publice, persoana juridica de drept public, autonoma, apolitica si fara scop patrimonial, functionand in conformitate cu Legea 139 / 1995 cu modificarile si completarile ulterioare.
                </p>
                <p>
                    Filiala este organizata ca o structura teritoriala si reprezinta Societatea Nationala de Cruce Rosie Romana pe raza Sectorului 3 Bucuresti.
                </p>
                <p>
                    Activitatea desfasurata are caracter umanitar si este coordonata de Sediul Central al Crucii Rosii Romane. In conformitate cu Legea nr. 524/2004, Art. 8. – „Societatea Nationala de Cruce Rosie din Romania se bucura de protectia si de sprijinul statului si are, in calitate de organizatie de utilitate publica, dreptul de a cere sprijinul tuturor autoritatilor publice, iar acestea au obligatia de a-l acorda”.
                </p>
                <h2>Principalele atributii ale Societatii Nationale de Cruce Rosie din Romania sunt:</h2>
                <ul>
                    <li>sa actioneze in caz de conflict armat, iar in timp de pace sa se pregateasca si sa actioneze, ca auxiliara a autoritatilor publice, in toate domeniile prevazute de Conventiile de la Geneva din 1949 si in favoarea tuturor celor aflati in suferinta, atat persoane civile, cat si militare;</li>
                    <li>sa contribuie la ameliorarea starii de sanatate, la prevenirea imbolnavirilor si la alinarea suferintelor prin programe de intrajutorare in beneficiul colectivitatii;</li>
                    <li>sa organizeze, la nivel national sau local, dupa caz, servicii de ajutoare de urgenta in favoarea victimelor dezastrelor, indiferent de cauzele si natura acestora;</li>
                    <li>sa recruteze, sa instruiasca si sa puna la dispozitie personalul pentru realizarea misiunii sale;</li>
                    <li>sa promoveze participarea copiilor si a tinerilor la activitatile specifice;</li>
                    <li>sa autorizeze folosirea emblemei, pe timp de pace, conform legii;</li>
                    <li>sa organizeze si sa participe la actiuni internationale de ajutorare a victimelor, indiferent de cauzele si de natura dezastrelor;</li>
                    <li>sa faca cunoscut opiniei publice, in special copiilor si tineretului, actiunile sale, cat si pe cele ale Miscarii Internationale de Cruce Rosie si Semiluna Rosie, precum si Principiile fundamentale ale Crucii Rosii, idealurile pacii, respectului si intelegerii intre toti oamenii si toate popoarele;</li>
                    <li>sa incheie conventii de colaborare si sa alcatuiasca programe de actiune comune cu alte societati sau asociatii care desfasoara activitati umanitare, cu ministere si alte institutii de specialitate ale administratiei publice centrale si locale, in vederea realizarii misiunii sale umanitare;</li>
                    <li>sa participe, pe baza programelor initiate de Ministerul Sanatatii, la recrutarea donatorilor de sange, la combaterea unor epidemii si la alte actiuni.</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Istoric;
