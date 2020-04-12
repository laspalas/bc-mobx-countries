import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { withRouter, RouteComponentProps } from "react-router-dom";
import useStore from "../../../app/storeContext/storesContext";

import MainLayout from "../../../app/mainLayout";
import "./index.scss";
import CountriesTable from "../../../countries/components/CountriesTable";

interface RegionDetailedProps {
  id: string;
}

const RegionDetailedPage: FC<RouteComponentProps<RegionDetailedProps>> = ({
  match
}) => {
  const { params } = match;
  const { rootStore } = useStore();

  useEffect(() => {
    rootStore.regionsStore.getCountryByRegion(params.id);
  }, [params.id, rootStore.regionsStore]);

  return (
    <MainLayout>
      <CountriesTable countries={rootStore.regionsStore.countriesByRegion} />
    </MainLayout>
  );
};

export default withRouter(observer(RegionDetailedPage));
