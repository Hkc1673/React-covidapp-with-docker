import { API_REQUEST, API_SUCCESS, API_FAILURE } from "./actions";

const initialState = {
  countries_case: [],
  countries_name:[],
  global_case:{},
  fetching: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  console.log("action:",action)
  console.log("state:", state)
  switch (action.type) {
    case API_REQUEST:
      return { ...state, fetching: true, error: null};
    case API_SUCCESS:
      const { countries_case, countries_name, global_case} = action.payload;
      return {
        ...state,
        fetching: false,
        error: null,
        countries_case,
        countries_name,
        global_case
      };
    case API_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
  
};
