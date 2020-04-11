import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import "./index.scss";
import MainLayout from "../../../app/mainLayout";
import useStore from "../../../app/storeContext/storesContext";
import RegionsTable from "../../components/RegionsTable";

const RegionsPage: FC = () => {
  const { rootStore } = useStore();
  const { regions } = rootStore.regionsStore;

  return (
    <MainLayout>
      <RegionsTable regions={regions} />
    </MainLayout>
  );
};

export default observer(RegionsPage);
