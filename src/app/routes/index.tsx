import React from "react";
import { withRouter, BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "./Route";
import Bikers from "../pages/Bikers";
import Clients from "../pages/Clients";
import MultipleDeliveries from "../pages/MultipleDeliveries";
import SingleDeliveries from "../pages/SigleDeliveries";
import Login from "../pages/Login";

const Routes = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route
        path="/entregas-avulsas"
        exact
        isPrivate
        component={SingleDeliveries}
      />
      <Route
        path="/entregas-multiplas"
        exact
        isPrivate
        component={MultipleDeliveries}
      />
      <Route path="/bikers" exact isPrivate component={Bikers} />
      <Route path="/clientes" exact isPrivate component={Clients} />
    </Switch>
  </Router>
);

export default withRouter(Routes);
