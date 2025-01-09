import React, { ComponentType, FC } from "react";
import {
  RouteProps as ReactRouterDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from "react-router-dom";
import { useAuth } from "../auth";

interface RouteProps extends ReactRouterDOMRouterProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { isValidToken } = useAuth();
  const isAuthenticated = isValidToken();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate && !isAuthenticated)
          return (
            <Redirect
              exact
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          );

        if (!isPrivate && isAuthenticated)
          return (
            <Redirect
              exact
              to={{
                pathname: "/entregas-avulsas",
                state: { from: location },
              }}
            />
          );

        return <Component />;
      }}
    />
  );
};

export default Route;
