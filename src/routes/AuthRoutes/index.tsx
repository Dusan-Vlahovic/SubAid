import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ROUTES } from "../../constants/routes";
import AuthLayout from "../../layout/AuthLayout";
import Login from "../../pages/Login";

export const AuthRoutes = () => {
  return (
    <Switch>
      <AuthLayout>
        <Route exact path={ROUTES.LOGIN} component={Login} />
      </AuthLayout>
      <Redirect to={ROUTES.LOGIN} />
    </Switch>
  )
}