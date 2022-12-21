import axios from "axios";


export function getDogs() {
    return async function (dispatch) {
      let json = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: json.data,
      });
    };
  }

  export function getNameBreed(name){
    return async function (dispatch){
      try{
        var json =await axios.get (" http://localhost:3001/dogs?name=" + name);
        return dispatch({
          type:"GET_NAME_BREEDS",
          payload: json.data
        })
      }catch(error){
        console.log(error)
      }
    }
  }

  export function getTemperaments(){
    return async function(dispatch){
      var json = await axios("http://localhost:3001/temperaments",{

      })
      return dispatch({ 
        type: "GET_TEMPERAMENTS", 
        payload: json.data
      })
    }
  }
  
 /*  export function filterBreedsByTemperament(payload) {
    return {
      type: FILTER_BY_TEMPERAMENT,
      payload,
    };
  } */
  

  export function postDogs(payload) {
    return async function (dispatch) {
      const json = await axios.post("http://localhost:3001/dogs", payload)
        console.log(json)
      return json;
    };
  }

  

export function filterCreated(payload) {
  return {
      type: "FILTER_CREATED",
      payload,

  };
}

export function orderByName(payload) {
  return {
      type: "ORDER_BY_NAME",
      payload,

  };
}

export function orderByWeight(payload) {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
}

/* export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${BREEDS_LOCAL_URL}` + id);
      console.log(json.data);
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearDetail() {
  return { type: CLEAR_DETAIL };
}

 */