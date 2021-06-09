import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  text: {
    minWidth: 400,
    margin: 20,
    marginBottom: 0,
    marginTop: 0,
  },
  btn: {
    margin: 20,
  },
});
