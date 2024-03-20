import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import SingleDeliveries from "../pages/singleDeliveries";
import MultipleDeliveries from "../pages/multipleDeliveries";
import Bikers from "../pages/bikers";
import Clients from "../pages/clients";

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/entregas-avulsas" exact component={SingleDeliveries} />
    <Route path="/entregas-multiplas" exact component={MultipleDeliveries} />
    <Route path="/bikers" exact component={Bikers} />
    <Route path="/clientes" exact component={Clients} />
  </Switch>
);

export default withRouter(Routes);
