import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { getDogs, filterCreated, orderByName, orderByWeight, filterBreedsByTemperament } from "../actions/index.js";
import Paginated from "./Paginated";
import SearchBar from "./SearchBar";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const temperaments = useSelector((state) => state.temperaments);
  const [orden, setOrden] = useState(" ");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const [input, setInput] = useState("");
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }
  function handleSelect(e) {
    setInput({
      ...input,
      temperament: e.target.value,
    });

    dispatch(filterBreedsByTemperament(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleOrderByWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }


  function handleFilterCreated(e) {
    setCurrentPage(1);
    dispatch(filterCreated(e.target.value));
  }

  return (
        
    <div className="cards">
       
      <div>
      <h1>Henry Dogs</h1>
        <Link to="/dogs">
        <button>Create your own breed</button>
        </Link>
        <SearchBar setCurrentPage={setCurrentPage}/>
       
        <div>
          <div>
          <select onChange={(e) => handleFilterCreated(e)}>
            <option value="All">All in alphabetical order</option>
            <option value="created">created</option>
          </select>
          <select onChange={(e) => handleSelect(e)}>
                {temperaments?.map((temp) => {
                  return (
                    <option key={temp.name} value={temp.name}>
                      {temp.name}
                    </option>
                  );
                })}
          </select>
          </div>
          <div>
          <select onChange={(e) => handleSort(e)}>
            <option value="desc">descendiente</option>
            <option value="asc">ascendiente</option>
          </select>
          <select onChange={(e) => handleOrderByWeight(e)}>
                <option value="minToMax">Min to Max</option>
                <option value="maxToMin">Max to Min</option>
              </select>
          </div>
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
                imageUrl={el.imageUrl? el.imageUrl :el.image}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
