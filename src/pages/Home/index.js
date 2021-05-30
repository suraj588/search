import React from 'react';
import logo from './star-wars-logo.png';
import './index.css';
import SearchResult from '../../components/Search-Results/SearchResult';
import { debounce } from '../../utils/debounce';
import axios from "axios";

const debounced = debounce();

function HomePage() {

  const [data,setData] = React.useState([]);

  const handleChange = (e) => {
    let value = e.target.value;
    debounced(() => {
      if(value){
        axios.get(`https://swapi.dev/api/people/?search=${value}`)
        .then(res => setData(res.data.results))
        .catch(err => console.log(err))
      }
    },600);
    if(value === ""){
      setData([]);
    }
  }
  
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <div className = "searchCover">
        <input className="search-input" placeholder="Search by name"  onChange = {handleChange}/>
        <div className = "results">
          {data?data.map(char => {
            let url = char.url;
            let arr = url.split("/");
            let id = +arr[arr.length-2];
            return (
                      <SearchResult name = {char.name} year = {char.birth_year} gender = {char.gender} id = {id} key = {char.name} />
                    )
          }):null}
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
