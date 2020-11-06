import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import Home from "../pages/Home";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/detail" component={CardDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
