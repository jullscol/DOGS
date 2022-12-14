import React from "react";
import "./Card.css";

 function Card({name,imageUrl,temperament, weight, id}){
 return(
    <div className="dog-card" >

    <h3>{name}</h3>
    <h3>{temperament}</h3>
    <h3>{weight}</h3>
    <img className="card-img" src={imageUrl} alt={name} />
    </div>
 );
}
 
export default Card;

 