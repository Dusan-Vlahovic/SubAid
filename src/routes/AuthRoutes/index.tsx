import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ROUTES } from "../../constants/routes";
import AuthLayout from "../../layout/AuthLayout";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";

export const AuthRoutes = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={ROUTES.LOGIN} />
      <AuthLayout>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.REGISTER} component={Register} />
        <Route exact path={ROUTES.FORGOTPASSWORD} component={ForgotPassword} />
      </AuthLayout>
      <Redirect exact path="/*" to={ROUTES.LOGIN} />
    </Switch>
  )
}