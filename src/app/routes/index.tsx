import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Bikers from "../pages/Bikers/bikers";
import Clients from "../pages/Clients/clients";
import MultipleDeliveries from "../pages/MultipleDeliveries/multipleDeliveries";
import SingleDeliveries from "../pages/SigleDeliveries";

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/entregas-avulsas" exact component={SingleDeliveries} />
    <Route path="/entregas-multiplas" exact component={MultipleDeliveries} />
    <Route path="/bikers" exact component={Bikers} />
    <Route path="/clientes" exact component={Clients} />
  </Switch>
);

export default withRouter(Routes);
