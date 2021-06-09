import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useAppDispatch } from "../../hooks";
import { removeTask } from "../../store/tasksSlice";
import { useStyles } from "./styles";

type Props = {
  task: string;
};

export const UserTask: React.FC<Props> = ({ task }) => {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(removeTask(task));

  return (
    <ListItem onClick={handleClick} button className={classes.task}>
      <ListItemText primary={task} />
    </ListItem>
  );
};
