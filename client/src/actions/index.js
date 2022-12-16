import axios from "axios";


export function getDogs() {
    return async function (dispatch) {
      let response = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: response.data,
      });
    };
  }

  export function postDogs(payload) {
    return async function (dispatch) {
      let res = await axios.post("http://localhost:3001/dogs", payload);
      console.log(res);
      return res;
    }
  }



export function filterCreated(payload) {
  return {
      type: "FILTER_CREATED",

  };
}

export function orderByName(payload) {
  return {
      type: "ORDER_BY_NAME",
      payload

  };
}