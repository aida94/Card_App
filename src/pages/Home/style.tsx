import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: theme.palette.grey[100],
    marginTop: theme.spacing(5),
    width: 800,
    minHeight: 650,
    borderRadius: 24,
  },
  logo: {
    textAlign: "center",
  },
  addButton: {
    float: "right",
    marginRight: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
}));
