import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Bikers from "../pages/Bikers";
import Clients from "../pages/Clients";
import MultipleDeliveries from "../pages/MultipleDeliveries";
import SingleDeliveries from "../pages/SigleDeliveries";
import Login from "../pages/Login";

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/entregas-avulsas" exact component={SingleDeliveries} />
    <Route path="/entregas-multiplas" exact component={MultipleDeliveries} />
    <Route path="/bikers" exact component={Bikers} />
    <Route path="/clientes" exact component={Clients} />
  </Switch>
);

export default withRouter(Routes);
