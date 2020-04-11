import RegionStore from "../../regions/store";
import regions from "../../mocks/regions";

class RootStore {
  regionsStore: RegionStore = new RegionStore(regions);
}

export default RootStore;
