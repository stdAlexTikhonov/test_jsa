import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  leave_comment: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
  },
  list: {
    width: "90%",
    position: "relative",
    left: 50,
  },
  item: {
    fontSize: 10,
    padding: 5,
  },
  comment: {
    flexGrow: 1,
    fontSize: 10,
  },
});
