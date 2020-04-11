import { observable, action, runInAction } from "mobx";

import Region from "../types/Region";
import { fetchCountriesByRegion } from "../services/api";
import Country from "../../countries/types/Country";

class RegionStore {
  @observable regions = [] as Region[];

  @observable countriesByRegion = [] as Country[];

  constructor(regions: Region[]) {
    this.regions = regions;
  }

  @action getCountryByRegion = async (code: string) => {
    this.countriesByRegion = [];
    try {
      const countries = await fetchCountriesByRegion(code);
      runInAction(() => {
        this.countriesByRegion = countries;
      });
    } catch {
      this.countriesByRegion = [];
    }
  };
}

export default RegionStore;
