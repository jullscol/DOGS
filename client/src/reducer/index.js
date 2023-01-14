import {
  GET_BREEDS,
  FILTER_BY_TEMPERAMENT,
  GET_TEMPERAMENTS,
  GET_BREEDS_BY_NAME,
  FILTER_CREATED_DB,
  ORDER_BY_BREED,
  POST_BREED,
  GET_DETAILS,
  SORT_WEIGHT,
  CLEAR_DETAIL,

} from "../entorno.js";

const initialState = {
  breeds: [],
  allBreeds: [],
  temperaments: [],
  allTemperaments: [],
  detail: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
        allBreeds: action.payload,
      };

    case GET_BREEDS_BY_NAME:
      return {
        ...state,
        breeds: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
        allTemperaments: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case FILTER_BY_TEMPERAMENT:
      const breedsFiltered = state.allBreeds;
      const tempFiltered = breedsFiltered.filter((el) => {
        return el.temperaments || el.temperament?.includes(action.payload);
      });
      return {
        ...state,
        breeds: tempFiltered,
      };

    case FILTER_CREATED_DB:
      const totalBreeds =
        action.payload === "createdInDb"
          ? state.allBreeds.filter((el) => el.createdInDb)
          : state.allBreeds.filter((el) => !el.createdInDb);

      return {
        ...state,
        breeds: totalBreeds,
      };

    case POST_BREED:
      return {
        ...state,
      };

    case ORDER_BY_BREED:
      console.log(action.payload);

      let sortBreed =
        action.payload === "asc"
          ? state.breeds.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.breeds.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        breeds: sortBreed,
      };

    case SORT_WEIGHT:
      if( action.payload === 'All'){
                return {
                    ...state,
                    allBreeds: [...state.allBreeds],
                    breeds: [...state.breeds],
                }
            }
            if( action.payload === 'small'){
                
                return{
                    ...state,
                    
                    allBreeds: [...state.allBreeds].sort((a, b) =>{


                        let pesoA= parseInt(a.weight.imperial) || parseInt(a.weight);
                        let pesoB= parseInt(b.weight.imperial) || parseInt(b.weight);
                        
                       
                        if(pesoA > pesoB) return 1;
                        if(pesoA < pesoB) return -1;
                        else return 0;   
                    }),
                    breeds: [...state.breeds].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.imperial) || parseInt(a.weight);
                        let pesoB= parseInt(b.weight.imperial) || parseInt(b.weight);
                        
                        
                        if(pesoA > pesoB) return 1;
                        if(pesoA < pesoB) return -1;
                        else return 0;
                    }),
                }
            }
            
                if( action.payload === 'big'){
                    
                return {
                    allBreeds: [...state.allBreeds].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.imperial)|| parseInt(a.weight);
                        let pesoB= parseInt(b.weight.imperial)|| parseInt(b.weight);

                                                 
                        if(pesoA < pesoB) return 1;
                        if(pesoA > pesoB) return -1;
                        else return 0;   
                    }),
                    breeds: [...state.breeds].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.imperial) || parseInt(a.weight);
                        let pesoB= parseInt(b.weight.imperial) || parseInt(b.weight);

                        
                        if(pesoA < pesoB) return 1;
                        if(pesoA > pesoB) return -1;
                        else return 0;   
                    })
                }
                };
                break;

                case "GET_CLOUDINARY_IMG":
                  //console.log(action.payload)
                  return {
                    ...state,
                    productImg: action.payload,
                  };
            
                default:
                  return state;
              }
            }
            