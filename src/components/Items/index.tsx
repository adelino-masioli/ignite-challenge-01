import { ListTaskProps } from "../../types";
import { Item } from "../Item";
import styles from "./styles.module.css";

export function Items({
  tasks,
  handleCheckedTask,
  handleDeleteTask,
}: ListTaskProps) {
  return (
    <div className={styles.listTasks}>
      <ul>
        {tasks.map((task) => {
          return (
            <Item
              key={task.id}
              task={task}
              handleCheckedTask={handleCheckedTask}
              handleDeleteTask={handleDeleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
}
