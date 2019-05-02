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
  Badge,
  MenuList,
  MenuItem,
  Popover,
  ListSubheader,
  Button
} from "@material-ui/core";

import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle, ExitToAppOutlined } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { indigo } from "@material-ui/core/colors";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import MenuAdminItems from "../navigations/menuAdminItems";

const drawerWidth = 240;

const styles = ({ breakpoints, mixins, spacing }: Theme) =>
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
      width: drawerWidth,
      height: "100%"
    },
    drawerMenu: {
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between"
    },
    grow: {
      flexGrow: 1
    },
    sectionDesktop: {
      // display: "none",
      // [breakpoints.up("sm")]: {
      //   display: "flex"
      // }
    },
    sectionMobile: {
      display: "flex",
      [breakpoints.up("md")]: {
        display: "none"
      }
    },
    button: {
      margin: spacing.unit
    },
    leftIcon: {
      marginRight: spacing.unit
    }
  });

type State = {
  mobileOpen: boolean;
  anchorEl: HTMLElement | ((element: HTMLElement) => HTMLElement) | undefined;
  anchorElNot: null | HTMLElement;
};

type Props = {
  classes?: any;
  theme: Theme;
  container?: any;
  title: string;
};

class AdminHeader extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mobileOpen: false,
      anchorEl: undefined,
      anchorElNot: null
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: undefined
    });
  };

  handleClickNot = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorElNot: event.currentTarget
    });
  };

  handleCloseNot = () => {
    this.setState({
      anchorElNot: null
    });
  };

  render(): React.ReactNode {
    const { classes, theme, container, title } = this.props;
    const { anchorEl, anchorElNot } = this.state;
    const open = Boolean(anchorEl);
    const openNot = Boolean(anchorElNot);
    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap>
            E Grimorum
          </Typography>
        </div>
        <Divider />
        <div className={classes.drawerMenu}>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div" style={{ color: "white" }}>
                MANAGMENT
              </ListSubheader>
            }
          >
            <MenuAdminItems />
          </List>
          <Divider />
          <Button color="primary" className={classes.button}>
            <ExitToAppOutlined className={classes.leftIcon} />
            Logout
          </Button>
        </div>
      </div>
    );
    return (
      <>
        <CssBaseline />
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="primary" noWrap>
              {title}
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                color="primary"
                aria-owns={openNot ? "simple-popper1" : undefined}
                aria-haspopup="true"
                onClick={this.handleClickNot}
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Popover
                id="simple-popper1"
                open={openNot}
                anchorEl={anchorElNot}
                onClose={this.handleCloseNot}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <MenuList>
                  <MenuItem>dd</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Popover>

              <IconButton
                color="primary"
                aria-owns={open ? "simple-popper" : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <AccountCircle />
              </IconButton>

              <Popover
                id="simple-popper"
                open={open}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <div className={classes.typography}>
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </div>
              </Popover>
            </div>
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

export default withStyles(styles, { withTheme: true })(AdminHeader);
