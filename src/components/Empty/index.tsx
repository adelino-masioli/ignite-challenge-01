import { BatteryWarningVertical } from "phosphor-react";
import styles from "./styles.module.css";

export function Empty() {
  return (
    <div className={styles.emptyTasks}>
      <BatteryWarningVertical size={32} />
      <div>
        <strong>You don't have any tasks registered yet.</strong>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
}
