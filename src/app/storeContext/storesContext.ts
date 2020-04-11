import { createContext, useContext } from "react";
import RootStore from "../rootStore";

const storeContext = createContext({
  rootStore: new RootStore()
});

export default () => useContext(storeContext);
