import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import CharacterFilms from "../CharacterFilms/CharacterFilms";
import CharacterStarships from "../CharacterStarships/CharacterStarships";
import CharacterVehicles from "../CharacterVehicles/CharacterVehicles";
import styles from "./Character.module.css";
import loadingImg from "./loading.png";

const Character = () => {

    const {id} = useParams();
    const [charData,setCharData] = React.useState(null);
    React.useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => {setCharData(res.data)})
        .catch(err => console.log(err));
    }, [id])

    return (
        <>
   
            {charData ?
                (<div className = {styles.charCover}>
                    <h1>{charData.name}</h1>
                    <div className = {styles.charData}>
                        <CharacterDetails {...charData} />
                        <CharacterFilms films = {charData.films}/>
                        <CharacterVehicles vehicles = {charData.vehicles}/>
                        <CharacterStarships starships = {charData.starships}/>
                    </div>
                </div>):<div className = {styles.loading}>
                            <img src={loadingImg} alt="loading"  />
                            <div>Loading...</div>
                        </div>
            }
            
        </>
    )
}

export default Character;