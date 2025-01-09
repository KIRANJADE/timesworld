import axios from 'axios';

export const fetchCountries = () => async (dispatch) => {
  try {
    const response = await axios.get("https://restcountries.com/v2/all?fields=name,region,flag");
    dispatch(getData(response.data));
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

export const getData = (data) => ({
  type: 'FETCH_COUNTRIES_SUCCESS',
  payload: data,
});
