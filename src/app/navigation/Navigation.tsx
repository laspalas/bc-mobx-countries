import React, { FC } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./index.scss";
import Routes from "../../enums/routes";

interface ListItemProps {
  to: string;
  primary: string;
}

const ListItemLink: FC<ListItemProps> = ({ to, primary }) => {
  const CustomLink: FC = (props: any) => <Link to={to} {...props} />;

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemText primary={primary}></ListItemText>
      </ListItem>
    </li>
  );
};

const Navigation: FC = () => {
  return (
    <div className="navigation">
      <List>
        <ListItemLink to={Routes.REGION} primary="Regions"></ListItemLink>
        <ListItemLink
          to={Routes.ALL_COUNTRIES}
          primary="All countries"
        ></ListItemLink>
      </List>
    </div>
  );
};

export default Navigation;
