


const initialState = {
    dogs : [],
    allDogs: []
}
function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
          return{
            ...state,
            dogs: action.payload,
            allDogs: action.payload

          }
        case 'FILTER_CREATED':
          
          const createdFilter = action.payload === 'created'? state.allDogs.filter(el => el.createdInDb) : state.allDogs.filter(el => !el.createdInDb)
          return{
            ...state,
            dogs: action.payload === 'All'? state.allDogs : createdFilter
          }
          default:
            return state;
    }


}

export default rootReducer;