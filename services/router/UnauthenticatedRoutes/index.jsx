import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from 'src/domains/user/pages/Home';

const UnauthenticatedRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  );
};

UnauthenticatedRoutes.propTypes = {};

export default UnauthenticatedRoutes;
