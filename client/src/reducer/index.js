const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case "GET_NAME_BREEDS":
      return {
        ...state,
        dogs: action.payload,
      };

    case "POST_DOGS":
      return {
        ...state,
      };

    case "FILTER_CREATED":
      const createdFilter =
        action.payload === "created"
          ? state.allDogs.filter((el) => el.createdInDb)
          : state.allDogs.filter((el) => !el.createdInDb);
      return {
        ...state,
        dogs: createdFilter,
      };
    default:
      return state;

    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
      case "FILTER_BY_TEMPERAMENT":
        const breedsFiltered = state.allDogs;
        const tempFiltered = breedsFiltered.filter((el) => {
          return el.temperament?.includes(action.payload);
        });
        return {
          ...state,
          dogs: tempFiltered,
        };

    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
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
        dogs: sortedArr,
      };
    case "ORDER_BY_WEIGHT":
      let arr = state.dogs.filter((el) => el.weight !== false);

      let sortWeight =
        action.payload === "maxToMin"
          ? arr.sort(function (a, b) {
              return (
                b.weight.split(/ - /)[0] -
                a.weight.split(/ - /)[0]
              );
            })
          : arr.sort(function (a, b) {
              return (
                a.weight.split(/ - /)[1] -
                b.weight.split(/ - /)[1]
              );
            });
      return {
        ...state,
        dogs: sortWeight,
      };
  }
}

export default rootReducer;
