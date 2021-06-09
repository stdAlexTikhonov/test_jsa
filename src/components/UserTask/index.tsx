import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeTask, getTasks, toggleTask } from "../../store/tasksSlice";
import { useStyles } from "./styles";
import { Task } from "../../Props";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Comments } from "../Comments";
import Box from "@material-ui/core/Box";

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
    <ListItem className={classes.task}>
      <Box display="flex">
        <IconButton onClick={handleClick}>
          {task.closed ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
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
      </Box>
      {!task.closed && <Comments comments={task.comments} id={task.id} />}
    </ListItem>
  );
};
