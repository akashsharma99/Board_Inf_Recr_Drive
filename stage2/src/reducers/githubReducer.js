/* Reducer file to manage state */

import { API_START, API_SUCCESS, API_FAIL, DEL_DATA } from "../constants";

const initialState = {
  isLoading: false,
  gitHubData: [],
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case API_START:
      return {
        ...state,
        isLoading: true,
        error:null
      };
    case API_SUCCESS:
      
      return {
        ...state,
        isLoading: false,
        gitHubData: [...state.gitHubData.filter((dat)=>{return dat.id!==payload.id}), payload],
        error: null,
      };
    case API_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case DEL_DATA:
      const newData=state.gitHubData.filter((dat)=>{return(dat.id!==payload)})
      return {
        ...state,
        gitHubData:newData
      }
    default:
      return state;
  }
}
