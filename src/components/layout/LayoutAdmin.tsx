import React from "react";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
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
  title: string;
};

const LayoutAdmin = ({ children, classes, title }: RouteProps & Props) => {
  return (
    <div className={classes.root}>
      <AdminHeader title={title} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <AdminFooter />
      </main>
    </div>
  );
};

export default withStyles(styles)(LayoutAdmin);
