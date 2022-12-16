import React from "react";
import "./Card.css";

 function Card({name,imageUrl,temperament, id}){
 return(
    <div className="dog-card" >

    <h3>{name}</h3>
    <h3>Temperament: <br/> {temperament}</h3>

    <img className="card-img" src={imageUrl} alt={name} />
    </div>
 );
}
 
export default Card;

 