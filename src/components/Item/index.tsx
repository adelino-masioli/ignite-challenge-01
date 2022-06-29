import { Check, Trash } from "phosphor-react";
import styles from "./styles.module.css";

interface ItemProps {
  handleCheckedTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
  task: {
    id: string;
    description: string;
    checked: boolean;
  };
}

export function Item({ task, handleCheckedTask, handleDeleteTask }: ItemProps) {
  return (
    <li>
      <button
        className={task.checked ? styles.btnChecked : styles.btnUnchecked}
        onClick={() => handleCheckedTask(task.id)}
      >
        {task.checked && <Check size={14} />}
      </button>

      <p className={task.checked ? styles.taskChecked : ""}>
        {task.description}
      </p>

      <button
        className={styles.btnTrash}
        title="Delete"
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash size={24} />
      </button>
    </li>
  );
}
