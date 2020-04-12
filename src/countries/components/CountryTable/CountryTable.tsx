import React, { FC } from "react";
import { Link } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Country from "../../types/Country";

interface RegionsTableProps {
  country: Country;
  countries: Array<Country>;
}

const RegionDetailedTable: FC<RegionsTableProps> = ({ country }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="regions">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Alpha3Code</TableCell>
            <TableCell>Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Link to={`/countries/${country.alpha3Code.toLowerCase()}`}>
                {country.name}
              </Link>
            </TableCell>
            <TableCell>{country.alpha3Code}</TableCell>
            <TableCell>{country.population}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegionDetailedTable;
