import "./detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
;
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  let [character, setCharacter] = useState({});
const {id}= useParams()
const navigate = useNavigate();

const retrocederPagina = () => {
  navigate(-1);
};


  useEffect(() => {
    axios(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return( <div className="detailContainer">
    <div className="card detailCard">
    <h3>Name : {character.name}</h3>
    <h3>Id : {character.id}</h3>
    <h3>Status : {character.status}</h3>
    <h3>Species : {character.species}</h3>
    <h3>Gender : {character.gender}</h3>
    <h3>Origin : {character?.origin?.name}</h3>

   
    <img    onClick={retrocederPagina} src={character.image}  />
    
  
  </div>
  </div>
 );
};

export default Detail;
