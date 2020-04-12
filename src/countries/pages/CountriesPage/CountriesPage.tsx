import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import "./index.scss";

import useStore from "../../../app/storeContext/storesContext";
import MainLayout from "../../../app/mainLayout";
import CountriesTable from "../../../countries/components/CountriesTable";
import Country from "../../types/Country";

const RegionsPage: FC = () => {
  const { rootStore } = useStore();
  const [nameValue, setSearchValue] = useState("");
  const [borderValue, setBorderCountry] = useState("");

  useEffect(() => {
    rootStore.countriesStore.getAllCountries();
  }, [rootStore.countriesStore]);

  console.log(borderValue, nameValue);

  return (
    <MainLayout>
      <div style={{ display: "flex" }}>
        <TextField
          value={nameValue}
          type="search"
          style={{ margin: "0 20px 20px 0" }}
          placeholder="Serach by name"
          onChange={e => setSearchValue(e.target.value)}
        ></TextField>
        <Select
          value={borderValue}
          type="search"
          style={{ margin: "0 20px 20px 0" }}
          placeholder="Serach by border"
          onChange={e => setBorderCountry(e.target.value as string)}
        >
          {rootStore.countriesStore.countries.map(
            ({ name, alpha3Code }: Country) => {
              return (
                <MenuItem key={alpha3Code} value={alpha3Code}>
                  {name}
                </MenuItem>
              );
            }
          )}
        </Select>
      </div>
      <CountriesTable
        countries={rootStore.countriesStore.filteredCountries(
          nameValue,
          borderValue
        )}
      />
    </MainLayout>
  );
};

export default observer(RegionsPage);
