import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ROUTES } from "../../constants/routes";
import AuthLayout from "../../layout/AuthLayout";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

export const AuthRoutes = () => {
  return (
    <Switch>
      <AuthLayout>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.REGISTER} component={Register} />
      </AuthLayout>
      <Redirect to={ROUTES.LOGIN} />
    </Switch>
  )
}