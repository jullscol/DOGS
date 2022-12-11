import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link}  from "react-router-dom";
import Card from "./Card";
import { getDogs } from "../actions/index.js";

function Home() {
  const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  },[dispatch]);

  console.log(allDogs);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  return (
    <div>
      <Link to="/dogs">Create dog</Link>
      <h1>Dog breeds</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Load all the dogs
      </button>
      <div>
        <select>
          <option value="desc">descendiente</option>
          <option value="assc">ascendiente</option>
        </select>
        <select>
          <option value="All">alphabetical order</option>
          <option value="weight">weight</option>
          <option value="created">created</option>
          <option value="api">existent i API</option>
        </select>
        {allDogs.length === 0 ?(
        <div>Loading</div>
        ): (
          allDogs.map((el) =>(
          <Card
          id= {el.id}
          Name= {el.name}
          height= {el.height}
          weight= {el.weight}
          life_span= {el.life_span}
          temperament= {el.temperament}
          imageUrl= {el.imageUrl}
          
          />
          ))
        )

        }

        
      </div>
    </div>
  );
}
export default Home;