import { UserTask } from "../UserTask";
import { useAppSelector } from "../../hooks";
import { getTasks } from "../../store/tasksSlice";
import List from "@material-ui/core/List";

export const Tasks = () => {
  const tasks = useAppSelector(getTasks);

  return (
    <List>
      {tasks.map((task) => (
        <UserTask task={task} />
      ))}
    </List>
  );
};
