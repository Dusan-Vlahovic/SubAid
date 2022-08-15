import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ROUTES } from "../../constants/routes";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import FullLayout from "../../layout/FullLayout";

export const PrivateRoutes = () => {
  return (
    <Switch>
      <FullLayout>
        <Route exact path={ROUTES.HOME} component={Dashboard} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      </FullLayout>
      <Redirect to={ROUTES.HOME} />
    </Switch>
  )
};
