import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "./index.scss";
import Navigation from "../navigation";

const MainLayout: FC = ({ children }) => {
  return (
    <div className="main-layout">
      <AppBar position="static" color="transparent">
        <Toolbar></Toolbar>
      </AppBar>
      <div className="main-layout__page">
        <div>
          <Navigation />
        </div>
        <div className="main-layout__content">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
