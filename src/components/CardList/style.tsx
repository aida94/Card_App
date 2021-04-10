import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    flexGrow: 1,
    overflow: "hidden",
  },
  title: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(3),
  },
  noData: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: 700,
    marginTop: theme.spacing(5),
    color: theme.palette.grey[500],
  },
  cards: {
    minHeight: 300,
  },
}));
