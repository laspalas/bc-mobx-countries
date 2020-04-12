import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { observer } from "mobx-react-lite";

import "./index.scss";

import useStore from "../../../app/storeContext/storesContext";
import MainLayout from "../../../app/mainLayout";
import CountryTable from "../../components/CountryTable";
import CountriesTable from "../../components/CountriesTable";

interface CountryProps {
  id: string;
}

const CountryDetailedPage: FC<RouteComponentProps<CountryProps>> = ({
  match
}) => {
  const { rootStore } = useStore();
  const { selectedCountry } = rootStore.countriesStore;
  const country = selectedCountry(match.params.id);
  const borders = rootStore.countriesStore.countries.filter(c => {
    return country ? country.borders.includes(c.alpha3Code) : false;
  });

  return (
    <MainLayout>
      {country && (
        <CountryTable
          country={country}
          countries={rootStore.countriesStore.countries}
        />
      )}
      <h5>Borders</h5>
      <CountriesTable countries={borders} />
    </MainLayout>
  );
};

export default withRouter(observer(CountryDetailedPage));
