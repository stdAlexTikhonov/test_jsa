import { UserTask } from "../UserTask";
import { useAppSelector } from "../../hooks";
import { getTasksIds } from "../../store/tasksSlice";
import List from "@material-ui/core/List";
import { useStyles } from "./styles";

export const Tasks = () => {
  const classes = useStyles();
  const tasks = useAppSelector(getTasksIds);

  return (
    <List className={classes.tasks}>
      {tasks.map((id) => (
        <UserTask id={id} key={id} />
      ))}
    </List>
  );
};
