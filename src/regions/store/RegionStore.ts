import { observable } from "mobx";

import Region from "../types/Region";

class RegionStore {
  @observable regions: Region[];

  constructor(regions: Region[]) {
    this.regions = regions;
  }
}

export default RegionStore;
