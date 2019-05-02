import React, { PureComponent } from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import Button from "@material-ui/core/Button";
import {
  Popover,
  Typography,
  Theme,
  createStyles,
  withStyles
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    typography: {
      margin: theme.spacing.unit * 2
    }
  });

type Prop = {
  classes: any;
};

type State = {
  anchorEl: HTMLElement | ((element: HTMLElement) => HTMLElement) | undefined;
};

class Dashboard extends PureComponent<Prop, State> {
  state: State = {
    anchorEl: undefined
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

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <LayoutAdmin title="Dashboard">
        <Button
          aria-owns={open ? "simple-popper" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Popover
        </Button>
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
          <div className={classes.typography}>The content of the Popover.</div>
        </Popover>
      </LayoutAdmin>
    );
  }
}

export default withStyles(styles)(Dashboard);
