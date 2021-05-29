import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchResult.module.css";

const SearchResult = ({name,year,gender,id}) => {
    return (
        <Link to = {`person/${id}`} className = {styles.link}>
            
            <div className = {styles.infoCover}>
                <div className = {styles.charName}>{name}</div>
                <div className = {styles.charGender}>{gender}</div>
                <div className = {styles.charYear}>{year}</div>
            </div>   
            
        </Link>
    )
}
export default SearchResult;