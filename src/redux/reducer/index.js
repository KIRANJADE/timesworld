const initialState = {
  countries: [],
  loading: true,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES_SUCCESS':
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
      
    default:
      return state;
  }
};

export default countryReducer;