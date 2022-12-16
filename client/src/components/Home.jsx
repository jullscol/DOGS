import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { getDogs, filterCreated } from "../actions/index.js";
import Paginated from "./Paginated";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrenPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginated = (pageNumber) => {
    setCurrenPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  console.log(allDogs);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }
  
  function handleFilterCreated(e){
    dispatch(filterCreated(e.target.value));
  }

  return (
    <div className="cards">
      <div>
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
        </div>
        <div>
          <select>
            <option value="desc">descendiente</option>
            <option value="assc">ascendiente</option>
          </select>
          <select onChange={e => handleFilterCreated(e)}>
            <option value="All">All in alphabetical order</option>
            <option value='created'>created</option>
            <option value="api">existent in API</option>
          </select>

          <Paginated
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginated={paginated}
          />

          {allDogs.length === 0 ? (
            <div>Loading</div>
          ) : (
            currentDogs.map((el) => (
              <Card
                id={el.id}
                name={el.name}
                height={el.height}
                weight={el.weight}
                life_span={el.life_span}
                temperament={el.temperament}
                imageUrl={el.imageUrl}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
