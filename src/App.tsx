import React, { Component } from "react";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import LayoutClient from "./components/layout/LayoutClient";

import ProjectsPage from "./pages/admin/ProjectsPage";
import Dashboard from "./pages/admin/Dashboard";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import { LinkButton } from "./components/material-custom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        background: indigo[600],
        "& *": { color: "rgba(255, 255, 255, 0.7)" }
      }
    },
    MuiButton: {
      text: {
        background: "linear-gradient(45deg, #FF6B88 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

const App: React.FunctionComponent = ({}) => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute exact path="/register" component={RegisterPage} />
        <PublicRoute exact path="/products/:id" component={Details} />
        <PrivateRoute exact path="/admin" component={Dashboard} />
        <PrivateRoute exact path="/projects" component={ProjectsPage} />
        <PrivateRoute exact path="/profile" component={Dashboard} />
        <PrivateRoute exact path="/teams" component={ProjectsPage} />
      </MuiThemeProvider>
    </Router>
  );
};

export default App;

const Home: React.FunctionComponent = ({}) => (
  <LayoutClient>
    <div>Page Home</div>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/products/3">Details</Link>
  </LayoutClient>
);

type PropsParams = { id: string };
interface DetailsProps extends RouteComponentProps<PropsParams> {}

const Details: React.FunctionComponent<DetailsProps> = ({ match }) => (
  <>
    <div>Details page {match.params.id}</div>
    <LinkButton color="primary" to="/">
      Go home
    </LinkButton>
  </>
);
