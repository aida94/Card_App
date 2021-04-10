import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import CardForm from "components/Form/Form";
import { useStyles } from "components/Modal/style";

interface OwnProps {
  title: string;
  cardId?: number;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const CardModal: React.FC<OwnProps> = ({ title, cardId, open, setOpen }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        <Typography className={classes.title}>{title}</Typography>
      </DialogTitle>

      <DialogContent className={classes.modalContent}>
        <CardForm />
      </DialogContent>
    </Dialog>
  );
};

export default CardModal;
