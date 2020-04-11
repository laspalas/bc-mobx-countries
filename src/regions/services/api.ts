import axios from "axios";
import Country from "../../countries/types/Country";

const fetchCountriesByRegion = (code: string): Promise<Country[]> => {
  return axios
    .get(`https://restcountries.eu/rest/v2/regionalbloc/${code}`)
    .then(res => res.data);
};

export { fetchCountriesByRegion };
