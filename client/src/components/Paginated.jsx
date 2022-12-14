import React from "react";

export default function Paginated ({ dogsPerPage, allDogs,paginated }) {
  const pageNumbers = []

  for (let i = 0; i <= Math.ceil(allDogs/dogsPerPage); i++) {
    pageNumbers.push(i+1)
  }
  return (
    <nav>
      <ul className='paginated'>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className='number' key={number}>
              <a onClick={() => paginated(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
