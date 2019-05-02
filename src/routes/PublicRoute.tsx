import * as React from "react";
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect,
  withRouter
} from "react-router-dom";
import { StaticContext } from "react-router";

// type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

const AUTHENTICATED = false;

interface PublicRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any, StaticContext, any>>
    | React.ComponentType<any>;
  isAutheticated?: boolean;
}

const PublicRoute: React.FunctionComponent<PublicRouteProps> = ({
  isAutheticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !AUTHENTICATED ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
