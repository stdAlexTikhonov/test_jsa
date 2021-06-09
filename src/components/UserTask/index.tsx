import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeTask, getTasks, toggleTask } from "../../store/tasksSlice";
import { useStyles } from "./styles";
import { Task } from "../../Props";

type Props = {
  id: string;
};

const priority = ["Критичный", "Высокий", "Средний", "Низкий"];

export const UserTask: React.FC<Props> = ({ id }) => {
  const classes = useStyles();
  const tasks = useAppSelector(getTasks);
  const task: Task = tasks[id];

  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(toggleTask(id));

  return (
    <ListItem onClick={handleClick} button className={classes.task}>
      <ListItemText primary={task.task} className={classes.text} />
      <ListItemText primary={task.date} className={classes.text} />
      <ListItemText
        primary={priority[task.priority]}
        className={classes.text}
      />
      <ListItemText
        primary={task.closed ? "Закрыто" : "Открыто"}
        className={classes.text}
      />
    </ListItem>
  );
};
