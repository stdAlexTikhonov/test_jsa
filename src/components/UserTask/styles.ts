import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  task: {
    minWidth: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  text: {
    minWidth: 156,
  },
  btn: {
    marginRight: 10,
  },
  row: {
    background: red[100],
  },
});
