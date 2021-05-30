import axios from "axios";
import React from "react";
import styles from "./CharacterFilms.module.css";
import {v4 as uuid} from "uuid";

const CharacterFilms = ({films}) => {

    const [charFilms,setcharFilms] = React.useState([]);
    React.useEffect(() => {
        films.map(async function(link){
            let str = "https:";
            for(let i = 5; i < link.length; i++){
                str += link[i];
            }
            await axios.get(str)
            .then(function(res){
                setcharFilms(state => [...state,res.data])
            })
            .catch(err => console.log(err))
        })
    },[films])

    if(!charFilms){
        return null;
    }
    return (
        <div className = {styles.filmsCover}>
            <h1>Films</h1>
            {charFilms? charFilms.map(data => {
                return (
                    <div key={uuid()} className = {styles.dataCover}>
                        <div>Title :- {data.title}</div>
                        <div>Director :- {data.director}</div>
                        <div>Producer :- {data.producer}</div>
                        <div>Release Date :- {data.release_date}</div>
                    </div>
                )
            }):null}
        </div>
    )
}

export default CharacterFilms;