import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "components/Card/style";

const CardHeader = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={3}>
          <Typography className={classes.header}>Name</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.header}>Card Number</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.header}>Expiry Date</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.header}>CVC</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardHeader;
