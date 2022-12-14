import React from "react";
import "./Paginated.css";

export default function Paginated ({ dogsPerPage, allDogs,paginated }) {
  const pageNumbers = []

  for (let i = 0; i <= Math.ceil(allDogs/dogsPerPage); i++) {
    pageNumbers.push(i+1)
  }
  return (
    <nav>
         <div className= "div-paginador">
        {pageNumbers.map(number => (
          <div>
            <button className= "boton-paginador" onClick={() => paginated(number)}>
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  )
}
