import React, { FC } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import "./index.scss";
import Country from "../../../countries/types/Country";

interface RegionsTableProps {
  countries: Array<Country>;
}

const RegionDetailedTable: FC<RegionsTableProps> = ({ countries }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="regions">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Alpha3Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country: Country) => (
            <TableRow key={country.alpha3Code}>
              <TableCell component="th" scope="row">
                <Link to={`/countries/${country.alpha3Code.toLowerCase()}`}>
                  {country.name}
                </Link>
              </TableCell>
              <TableCell align="left">{country.alpha3Code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegionDetailedTable;
