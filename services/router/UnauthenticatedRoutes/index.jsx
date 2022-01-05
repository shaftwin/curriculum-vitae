import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from 'src/domains/user/pages/Home';
import Paint from 'src/domains/user/pages/Paint';

const UnauthenticatedRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/paint" component={Paint} />
      <Redirect to="/home" />
    </Switch>
  );
};

UnauthenticatedRoutes.propTypes = {};

export default UnauthenticatedRoutes;
