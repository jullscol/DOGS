import React, { useState } from "react";
import "./Card.css";


export default function Card({
   name,
   temperament,
   height,
   weight,
   life_span,
   imageUrl,
   id,
   
 }){
   return (
      <div >
        <div >
          <div>
            <h3>{name}</h3>
            <img
              className="img-card-styles"
              src={imageUrl}
              height="200px"
              width="270px"
              alt=""
            />
          </div>
  
          <div>
            <p className="card-titles">Temperament: {temperament}</p>
            <p className="card-titles">Weight: {weight} kg</p>
            <p className="card-titles">Height: {height}</p>
            <p className="card-titles">Life Span: {life_span}</p>
         
          </div>
        </div>
      </div>
    );
}


 