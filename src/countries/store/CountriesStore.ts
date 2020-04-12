import { observable, action, runInAction } from "mobx";
import { computedFn } from "mobx-utils";

import Country from "../types/Country";
import { fetchCountries } from "../services/api";

class CountriesStore {
  @observable countries = [] as Country[];

  @observable filteredCountries = computedFn((name, border) => {
    return this.countries
      .filter(
        country => country.name.toLowerCase().indexOf(name.toLowerCase()) > -1
      )
      .filter(country => (border ? country.borders.includes(border) : true));
  });

  @action getAllCountries = async () => {
    try {
      const countries = await fetchCountries();
      runInAction(() => {
        this.countries = countries;
      });
    } catch {
      this.countries = [];
    }
  };
}

export default CountriesStore;
