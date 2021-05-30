import axios from "axios";
import React from "react";
import styles from "./CharacterStarships.module.css";
import {v4 as uuid} from "uuid";

const CharacterStarships = ({starships}) => {

    const [charStarships,setCharStarships] = React.useState([]);

    React.useEffect(() => {
        starships.map(async function(link){
            let str = "https:";
            for(let i = 5; i < link.length; i++){
                str += link[i];
            }
            await axios.get(link)
            .then(function(res){
                setCharStarships(state => [...state,res.data])
            })
            .catch(err => console.log(err))
        })
    },[starships])

    if(!charStarships.length){
        return null;
    }
    return (
        <div className = {styles.starshipCover}>
            <h1>Starships</h1>
            {charStarships? charStarships.map(data => {
                return (
                    <div key = {uuid()} className = {styles.dataCover}>
                        <div>Name :- {data.name}</div>
                        <div>Model :- {data.model}</div>
                        <div>Manufacturer :- {data.manufacturer}</div>
                        <div>Cost :- {data.cost_in_credits}</div>
                        <div>Length :- {data.length}</div>
                        <div>Speed :- {data.max_atmosphering_speed}</div>
                        <div>Crew :- {data.crew}</div>
                        <div>Passengers :- {data.passengers}</div>
                        <div>Cargo Capacity :- {data.cargo_capacity}</div>
                        <div>Consumables :- {data.consumables}</div>
                        <div>Hyperdrive Rating :- {data.hyperdrive_rating}</div>
                        <div>MGLT :- {data.MGLT}</div>
                        <div>Starship Class :- {data.starship_class}</div>
                    </div>
                )
            }):null}
        </div>
    )
}

export default CharacterStarships;