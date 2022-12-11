import React from "react";

 function Card({name,imageUrl,temperament, weight, id}){
 return(
    <div>
    <h3>{name}</h3>
    <h3>{temperament}</h3>
    <h3>{weight}</h3>
    <img src={imageUrl} alt="img not found" width="200px" height="250" />
    </div>

 );
}
 
export default Card;

 