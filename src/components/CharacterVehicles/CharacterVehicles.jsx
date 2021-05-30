import axios from "axios";
import React from "react";
import styles from "./CharacterVehicles.module.css";
import {v4 as uuid} from "uuid";

const CharacterVehicles = ({vehicles}) => {

    const [charVehicles,setCharVehicles] = React.useState([]);

    React.useEffect(() => {
        vehicles.map(async function(link){
            let str = "https:";
            for(let i = 5; i < link.length; i++){
                str += link[i];
            }
            await axios.get(link)
            .then(function(res){
                setCharVehicles(state => [...state,res.data])
            })
            .catch(err => console.log(err))
        })
    },[vehicles])

    if(!charVehicles.length){
        return null;
    }
    return (
        
        <div className = {styles.vehiclesCover}>
            {charVehicles && <h1>Vehicles</h1>}
            {charVehicles? charVehicles.map(data => {
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
                        <div>Vehicle Class :- {data.vehicle_class}</div>
                    </div>
                )
            }):null}
        </div>
    )
}

export default CharacterVehicles;