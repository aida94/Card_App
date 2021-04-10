import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 700,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
  },
  header: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: "16px",
  },
  editButton: {
    color: theme.palette.secondary.main,
  },
}));
