import React, { FC } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Region from "../../types/Region";
import "./index.scss";
import { Link } from "react-router-dom";

interface RegionsTableProps {
  regions: Array<Region>;
}

const RegionsTable: FC<RegionsTableProps> = ({ regions }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="regions">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {regions.map(({ code, label }: Region) => (
            <TableRow key={code}>
              <TableCell component="th" scope="row">
                <Link to={`/region/${code}`}>{label}</Link>
              </TableCell>
              <TableCell align="left">{code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegionsTable;
