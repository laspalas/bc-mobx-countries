import axios from "axios";

const fetchCountries = () =>
  axios.get("https://restcountries.eu/rest/v2/all").then(res => res.data);

export { fetchCountries };
