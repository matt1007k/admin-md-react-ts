import * as React from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Drawer,
  Button
} from "@material-ui/core";

import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { indigo } from "@material-ui/core/colors";

import { LinkButton } from "../material-custom";

const drawerWidth = 240;

const styles = ({ breakpoints, spacing, mixins }: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      marginLeft: drawerWidth,
      [breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`
      },
      boxShadow: "none"
    },
    menuButton: {
      marginRight: 20,
      [breakpoints.up("sm")]: {
        display: "none"
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      background: indigo[700],
      padding: "0 8px",
      ...mixins.toolbar,
      justifyContent: "center",
      fontSize: "1.20rem"
    },
    drawerPaper: {
      width: drawerWidth
    }
  });

type State = Readonly<{
  mobileOpen: boolean;
}>;

type Props = {
  classes?: any;
  theme: Theme;
  container?: any;
  title: string;
};

class ClientHeader extends React.PureComponent<Props, State> {
  state: State = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render(): React.ReactNode {
    const { classes, theme, container, title } = this.props;
    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap>
            title page
          </Typography>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <>
        <CssBaseline />
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" color="primary" noWrap>
              {title}
            </Typography>

            <LinkButton to="/login">Login</LinkButton>
            <LinkButton to="/register">Register</LinkButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ClientHeader);
