import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBreeds,
  filterBreedsByTemperament,
  filterCreatedDb,
  getTemperaments,
  orderByBreed,
  sortWeight
 ,

} from "../../actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import "./Home.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const allBreeds = useSelector((state) => state.breeds);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [breedsPerPage, setBreedsPerPage] = useState(8);
  const temperaments = useSelector((state) => state.temperaments);
  const [input, setInput] = useState("");
  const indexOfLastBreed = currentPage * breedsPerPage;
  const indexOfFirstBreed = indexOfLastBreed - breedsPerPage;
  const currentBreeds = allBreeds.slice(indexOfFirstBreed, indexOfLastBreed);
   console.log(allBreeds)
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getBreeds());
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getBreeds());
  }

  function handleSelect(e) {
   /*  setInput({
      ...input,
      temperament: e.target.value,
    }); */
    dispatch(filterBreedsByTemperament(e.target.value));
  }
  console.log(input)
  function handleOrderByBreed(e) {
    e.preventDefault();
    dispatch(orderByBreed(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterCreatedDb(e) {
    setCurrentPage(1);
    dispatch(filterCreatedDb(e.target.value));
  }

  function handleOrdenarWeitgh(e) {
    e.preventDefault();
    dispatch(sortWeight(e.target.value));
  }

  
  return (
    <div className="home-main-container">
      <Header />
      <div className="nav">
        <Link to="/breed">
          <button className="create-breed-btn">Create your own breed</button>
        </Link>
        <SearchBar />
      </div>

      <div className="home-sub-container">
        <div className="upper-side"></div>

        <div className="paging-container">
          <Paginado
            breedsPerPage={breedsPerPage}
            allBreeds={allBreeds.length}
            paginado={paginado}
            currentPage={currentPage}
          />
        </div>

        <div className="filter-dogs-container">
          <div className="left-side">
            <>
              <label className="labels">Breeds per page: </label>
              <select
                className="select-style"
                onChange={(e) => setBreedsPerPage(e.target.value)}
              >
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="32">32</option>
                <option value="40">40</option>
              </select>
            </>
            <>
              <label className="labels">Filter by Breeds: </label>
              <select
                className="select-style"
                onChange={(e) => handleFilterCreatedDb(e)}
              >
                <option value="all">Existent</option>
                <option value="createdInDb">Created</option>
              </select>
              <label className="labels">Filter by Temperaments: </label>
              <select
                className="select-style"
                onChange={(e) => handleSelect(e)}
              >
                {temperaments?.map((temp) => {
                  return (
                    <option key={temp.id} value={temp.name}>
                      {temp.name}
                    </option>
                  );
                })}
              </select>

              <label className="labels">Order By: </label>
              <select
                className="select-style"
                onChange={(e) => {
                  handleOrderByBreed(e);
                }}
              >
                <option value="asc"> A - Z </option>
                <option value="des"> Z - A </option>
              </select>

              <select
                className="select-style"onChange={e=> handleOrdenarWeitgh(e)}>
                
                <option value='All'>By Weight</option>
            <option value='small'> Light  </option>
            <option value='big'> Heavy  </option>

                </select>




              <button
                className="reset-btn"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Reset
              </button>
            </>
          </div>
          <div className="right-side">
            <div className="content-cards">
              {currentBreeds && allBreeds ? (
                currentBreeds?.map((el) => {
                  return (
                    <div key={el.id}>
                      <Card
                        name={el.name}
                        temperament={
                          el.temperament
                            ? el.temperament
                            : el.temperaments?.map((el) => el.name).join(", ")
                        }
                        height={el.height.imperial ? el.height.imperial : el.height}
                        weight={el.weight.imperial ? el.weight.imperial : el.weight}
                        life_span={el.life_span}
                        image={
                          el.image
                            ? el.image.url || el.image
                            : "https://cdn2.thedogapi.com/images/" +
                              el.reference_image_id +
                              ".jpg"
                        }
                        id={el.id}
                      />
                    </div>
                  );
                })
              ) : (
                <div>
                  <h1>LOADING</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="paging-container">
      {   <Footer /> }
      </div>
    </div>
  );
}
