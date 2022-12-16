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

export function filterCreated(payload) {
  return {
      type: "FILTER_CREATED",

  };
}