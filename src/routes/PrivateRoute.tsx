import React, { useState } from "react";
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect
} from "react-router-dom";

// type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

const AUTHENTICATED = true;

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  isAutheticated?: boolean;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  isAutheticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        AUTHENTICATED ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
