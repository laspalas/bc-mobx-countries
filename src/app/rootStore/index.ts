import RegionStore from "../../regions/store";
import regions from "../../mocks/regions";
import CountriesStore from "../../countries/store/CountriesStore";

class RootStore {
  regionsStore: RegionStore = new RegionStore(regions);
  countriesStore: CountriesStore = new CountriesStore();
}

export default RootStore;
