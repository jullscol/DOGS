import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBreedsByName } from "../../actions/index";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getBreedsByName(name));
    console.log(name)
  }

  return (
    <div className="searchbar-main-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
        className="inputSearch"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
      />
      <button
        className="search-btn"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}
