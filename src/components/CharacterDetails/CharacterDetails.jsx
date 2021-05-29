import React from "react";
import styles from "./CharacterDetails.module.css";

const CharacterDetails = ({height,mass,hair_color,skin_color,eye_color,birth_year,gender}) => {
    return (
        <>
            <div className = {styles.detailsCover}>
                <div className = {styles.dataCover}>
                    <div>Height :- {height}</div>
                    <div>Mass :- {mass}</div>
                    <div>Hair Color :- {hair_color}</div>
                    <div>Skin Color :- {skin_color}</div>
                    <div>Eye Color :- {eye_color}</div>
                    <div>Birth Year :- {birth_year}</div>
                    <div>Gender :- {gender}</div>
                </div>
            </div>
        </>
    )
}

export default CharacterDetails;