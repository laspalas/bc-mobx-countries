import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Routes from "../../enums/routes";
import RegionsPage from "../../regions/pages/RegionsPage";
import RegionDetailedPage from "../../regions/pages/RegionDetailedPage";
import CountriesPage from "../../countries/pages/CountriesPage";
import CountryDetailedPage from "../../countries/pages/CountryDetailedPage";

const AppRouter: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={RegionsPage} path={Routes.REGION} />
        <Route
          exact
          component={RegionDetailedPage}
          path={Routes.DETAILED_REGION}
        />
        <Route exact component={CountriesPage} path={Routes.ALL_COUNTRIES} />
        <Route
          exact
          component={CountryDetailedPage}
          path={Routes.DETAILED_COUNTRY}
        />
        <Redirect to={Routes.REGION}></Redirect>
      </Switch>
    </Router>
  );
};

export default AppRouter;
