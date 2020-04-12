import RegionStore from "../../regions/store/RegionStore";
import CountriesStore from "../../countries/store/CountriesStore";
import regions from "../../mocks/regions";

class RootStore {
  regionsStore: RegionStore = new RegionStore(regions);
  countriesStore: CountriesStore = new CountriesStore();
}

export default RootStore;
