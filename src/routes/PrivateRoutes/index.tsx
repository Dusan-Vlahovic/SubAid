import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ROUTES } from "../../constants/routes";
import Dashboard from "../../pages/Dashboard";
import FullLayout from "../../layout/FullLayout";

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Redirect path={ROUTES.LOGIN} to={ROUTES.DASHBOARD} />
      <FullLayout>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      </FullLayout>
      <Redirect to={ROUTES.DASHBOARD} />
    </Switch>
  )
};
