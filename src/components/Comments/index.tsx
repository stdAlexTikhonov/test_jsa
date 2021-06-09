import { ListItem } from "@material-ui/core";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PersonIcon from "@material-ui/icons/Person";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addComment } from "../../store/tasksSlice";

type Props = {
  comments: string[];
  id: string;
};

export const Comments: React.FC<Props> = ({ comments, id }) => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addComment({ id, comment: value }));
    setValue("");
  };
  return (
    <List className={classes.list}>
      {comments.map((comment, i) => (
        <ListItem className={classes.item} key={i}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PersonIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary={comment} />
        </ListItem>
      ))}
      <ListItem className={classes.leave_comment}>
        <TextField
          autoFocus
          margin="dense"
          label="Комментарий"
          type="text"
          className={classes.comment}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          onClick={handleClick}
          color="primary"
          disabled={value.length === 0}
        >
          Отправить
        </Button>
      </ListItem>
    </List>
  );
};
