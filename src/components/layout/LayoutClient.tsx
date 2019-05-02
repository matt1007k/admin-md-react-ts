import React from "react";
import ClientHeader from "./ClientHeader";
import ClientFooter from "./ClientFooter";
import { RouteProps } from "react-router";
import { Theme, createStyles, withStyles } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      background: "#fff"
    }
  });

type Props = {
  classes?: any;
};

const LayoutClient = ({ children, classes }: RouteProps & Props) => {
  return (
    <div className={classes.root}>
      <ClientHeader title="Home" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <ClientFooter />
      </main>
    </div>
  );
};

export default withStyles(styles)(LayoutClient);
