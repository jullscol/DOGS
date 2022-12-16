const initialState = {
  dogs: [],
  allDogs: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case "FILTER_CREATED":
      const createdFilter =
        action.payload === "created"
          ? state.allDogs.filter((el) => el.createdInDb)
          : state.allDogs.filter((el) => !el.createdInDb);
      return {
        ...state,
        dogs: action.payload === "All" ? state.allDogs : createdFilter,
      };
    default:
      return state;

    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"? 
        state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            }): 
             state.dogs.sort(function (a, b) {
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
  }
}

export default rootReducer;
