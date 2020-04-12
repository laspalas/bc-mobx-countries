import { observable, action, runInAction } from "mobx";
import { computedFn } from "mobx-utils";

import Country from "../types/Country";
import { fetchCountries } from "../services/api";

class CountriesStore {
  constructor() {
    this.getAllCountries();
  }

  @observable countries = [] as Country[];

  @observable filteredCountries = computedFn((name: string, border: string) => {
    return this.countries
      .filter(
        country => country.name.toLowerCase().indexOf(name.toLowerCase()) > -1
      )
      .filter(country => (border ? country.borders.includes(border) : true));
  });

  @observable selectedCountry = computedFn((code: string) => {
    return this.countries.find(
      (country: Country) => country.alpha3Code.toLowerCase() === code
    );
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
