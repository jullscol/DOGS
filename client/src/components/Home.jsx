import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../actions";
import {Link} from 'react-router-dom';
import Card from "./Card"

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e){
    e.preventDefault();
    dispatch(getDogs());
  }

  return (
    <div>
      <Link to="/dogs">Create dog</Link>
      <h1>Dog breeds</h1>
      <button onClick={e=> {handleClick(e)}}>Go back</button>
      <div>
        <select>
            <option value= 'desc'>descendiente</option>
            <option value= 'assc'>ascendiente</option>
        </select>
        <select>
            <option value='All'>alphabetical order</option>
            <option value='weight'>weight</option>
            <option value='created'>created</option>
            <option value='api'>existent i API</option>

        </select>
        {
           allDogs?.map( (c) =>{
            return(
              <fragment>
                <Link to={"/Home/" + c.id}>
            <Card name={c.name} image={c.image} weight={c.weight} temperamnet={c.temperament} key={c.id}/>
            </Link>
            </fragment>
           );
           })}

      </div>
    </div>
  );
}
