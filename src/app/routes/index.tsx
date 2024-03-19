import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Admin from "../pages/admin";

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Admin} />
  </Switch>
);

export default withRouter(Routes);
