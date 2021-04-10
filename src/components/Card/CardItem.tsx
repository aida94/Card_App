import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";

import { CardInterface } from "model/card";
import { useStyles } from "components/Card/style";

interface OwnProps {
  card: CardInterface;
}

const CardItem: React.FC<OwnProps> = ({ card }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleEditClick = () => {
    setOpen(true);
  };

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={3}>
          <Typography>{card.name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{card.cardNumber}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{card.expiryDate}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{card.cvc}</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography>
            <IconButton aria-label="edit" onClick={handleEditClick}>
              <Edit className={classes.editButton} />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardItem;
