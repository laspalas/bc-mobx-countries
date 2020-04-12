import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import "./index.scss";

import useStore from "../../../app/storeContext/storesContext";
import MainLayout from "../../../app/mainLayout";
import CountriesList from "../../../countries/components/CountriesList";
import Country from "../../types/Country";
import { FormControl } from "@material-ui/core";

const RegionsPage: FC = () => {
  const { rootStore } = useStore();
  const [nameValue, setSearchValue] = useState<string>("");
  const [borderValue, setBorderCountry] = useState<string>("");

  return (
    <MainLayout>
      <div className="main-layout__inputs">
        <FormControl>
          <TextField
            label="Search by name"
            value={nameValue}
            onChange={e => setSearchValue(e.target.value)}
          ></TextField>
        </FormControl>
        <FormControl style={{ width: "200px" }}>
          <InputLabel id="select-border">Search by border</InputLabel>
          <Select
            value={borderValue}
            type="search"
            labelId="select-border"
            placeholder="Search by border"
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
        </FormControl>
      </div>
      <CountriesList
        countries={rootStore.countriesStore.filteredCountries(
          nameValue,
          borderValue
        )}
      />
    </MainLayout>
  );
};

export default observer(RegionsPage);
