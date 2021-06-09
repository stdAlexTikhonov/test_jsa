import { UserTask } from "../UserTask";
import { useAppSelector } from "../../hooks";
import { getTasksIds } from "../../store/tasksSlice";
import List from "@material-ui/core/List";
import { Task } from "../../Props";

export const Tasks = () => {
  const tasks = useAppSelector(getTasksIds);

  return (
    <List>
      {tasks.map((id) => (
        <UserTask id={id} key={id} />
      ))}
    </List>
  );
};
