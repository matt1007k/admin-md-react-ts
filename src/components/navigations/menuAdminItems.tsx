import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { menuAdmin } from "./menu-admin";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  createStyles
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

import { AccountCircle, List, SupervisorAccount } from "@material-ui/icons";

const styles = (theme: Theme) =>
  createStyles({
    link: {
      textDecoration: "none"
    }
  });

interface Props {
  classes: any;
}

class MenuAdminItems extends React.Component<Props> {
  listItems() {
    const { classes } = this.props;
    return menuAdmin.map(({ text, icon, url }) => (
      <RouterLink className={classes.link} to={url} key={text}>
        <ListItem button>
          <ListItemIcon>
            {(() => {
              switch (icon) {
                case "AccountCircle":
                  return <AccountCircle />;
                case "List":
                  return <List />;
                case "SupervisorAccount":
                  return <SupervisorAccount />;
                default:
                  return <AccountCircle />;
              }
            })()}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </RouterLink>
    ));
  }
  render() {
    return this.listItems();
  }
}

export default withStyles(styles)(MenuAdminItems);
