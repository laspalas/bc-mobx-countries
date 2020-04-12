import React, { FC } from "react";
import { AutoSizer, List } from "react-virtualized";
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";

import Country from "../../types/Country";

interface CountriesListProps {
  countries: Country[];
}

interface RowProps {
  index: number;
  key: string;
  style: any;
}

const CountriesList: FC<CountriesListProps> = ({ countries }) => {
  const Row = ({ index, key, style }: RowProps) => {
    return (
      <ListItem
        key={key}
        style={{ ...style, boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)" }}
      >
        <ListItemText>
          <Link to={`/countries/${countries[index].alpha3Code.toLowerCase()}`}>
            {countries[index].name}
          </Link>
        </ListItemText>
      </ListItem>
    );
  };

  return (
    <div>
      <AutoSizer disableHeight>
        {({ width }) => {
          return (
            <List
              rowHeight={50}
              height={600}
              overscanRowCount={10}
              rowCount={countries.length}
              rowRenderer={Row}
              width={width}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default CountriesList;
