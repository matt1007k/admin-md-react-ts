import React, { PureComponent } from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";

import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Card,
  CardActions,
  CardContent,
  Table,
  Button,
  Grid,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    typography: {
      margin: theme.spacing.unit * 2
    },
    chart: {
      marginBottom: "15px"
    }
  });

export interface Props extends WithStyles<typeof styles> {}

type State = {
  anchorEl: null | HTMLElement;
};

class ProjectPage extends PureComponent<Props, State> {
  state: State = {
    anchorEl: null
  };

  render() {
    const { classes } = this.props;
    return (
      <LayoutAdmin title="Projects">
        <Grid container spacing={24} className={classes.chart}>
          <Grid item md={6}>
            <Typography variant="subtitle1" color="primary">
              Number of projects
            </Typography>
            <Card>
              <CardActions>sadasd</CardActions>
              <CardContent>Projects </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Typography variant="subtitle1" color="primary">
              Employees in projects
            </Typography>
            <Card>
              <CardActions>sadasd</CardActions>
              <CardContent>Teams</CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <Typography variant="subtitle1" color="primary">
              Projects list
            </Typography>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>STATUS</TableCell>
                    <TableCell>PROJECT</TableCell>
                    <TableCell>START DATE</TableCell>
                    <TableCell>END DATE</TableCell>
                    <TableCell>TEAM</TableCell>
                    <TableCell>SPRINT PROGRESS</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>active</TableCell>
                    <TableCell>Web Facturation</TableCell>
                    <TableCell>09.04.2019</TableCell>
                    <TableCell>22.07.2019</TableCell>
                    <TableCell>users</TableCell>
                    <TableCell>progress</TableCell>
                    <TableCell>
                      <Button size="small">Actions</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>active</TableCell>
                    <TableCell>Web Facturation</TableCell>
                    <TableCell>09.04.2019</TableCell>
                    <TableCell>22.07.2019</TableCell>
                    <TableCell>users</TableCell>
                    <TableCell>progress</TableCell>
                    <TableCell>
                      <Button size="small">Actions</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </LayoutAdmin>
    );
  }
}

export default withStyles(styles)(ProjectPage);
