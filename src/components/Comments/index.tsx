import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PersonIcon from "@material-ui/icons/Person";
import ListItemText from "@material-ui/core/ListItemText";
import { blue } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
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
    padding: 0,
  },
  comment: {
    flexGrow: 1,
  },
});

export const Comments = () => {
  const message = "Это тестовый комментарий";
  const classes = useStyles();

  const handleClick = () => {
    console.log("hello");
  };
  return (
    <List className={classes.list}>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <PersonIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary={message} />
      </ListItem>
      <ListItem className={classes.leave_comment}>
        <TextField
          autoFocus
          margin="dense"
          label="Комментарий"
          type="text"
          className={classes.comment}
        />
        <Button onClick={handleClick} color="primary">
          Отправить
        </Button>
      </ListItem>
    </List>
  );
};
