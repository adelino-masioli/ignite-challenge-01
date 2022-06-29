import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { taskProps } from "../../types";
import { Empty } from "../Empty";
import { Header } from "../Header";
import { Items } from "../Items";

import styles from "./styles.module.css";

export function Tasks() {
  const [tasks, setTasks] = useState<taskProps[]>([]);
  const [newTask, setNewTask] = useState("");
  const [countTask, setcountTask] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const isNewTaskEmpty = newTask.length == 0;

  function handleCreateTask() {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description: newTask,
        checked: false,
      },
    ]);

    setcountTask((task) => {
      return task + 1;
    });

    setNewTask("");
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleDeleteTask(id: string) {
    const taskDelete = tasks.filter((task) => task.id != id);
    setTasks([...taskDelete]);

    setcountTask((task) => {
      return task - 1;
    });

    taskCompleted(taskDelete);
  }

  function handleCheckedTask(id: string) {
    const taskChecked = tasks.map((task) => {
      if (task.id == id) {
        task.checked = !task.checked;
      }
      return task;
    });
    setTasks([...taskChecked]);

    taskCompleted(taskChecked);
  }

  function taskCompleted(tasks: taskProps[]) {
    const result = tasks.filter((task) => task.checked === true);
    setTasksCompleted(result.length);
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.newTask}>
        <input
          placeholder="Add a new task"
          value={newTask}
          onChange={handleNewTask}
        />
        <button
          onClick={handleCreateTask}
          disabled={isNewTaskEmpty}
          title={isNewTaskEmpty ? "Enter a task to enable the button" : ""}
        >
          Add
          <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.content}>
        <main>
          <div className={styles.countTask}>
            <div className={styles.createTask}>
              <strong>Created tasks</strong>
              <span>{countTask}</span>
            </div>

            <div className={styles.completedTask}>
              <strong>Completed</strong>

              {countTask == 0 ? (
                <span>{countTask}</span>
              ) : (
                <span>
                  {tasksCompleted} of {countTask}
                </span>
              )}
            </div>
          </div>

          {tasks.length != 0 ? (
            <Items
              tasks={tasks}
              handleCheckedTask={handleCheckedTask}
              handleDeleteTask={handleDeleteTask}
            />
          ) : (
            <Empty />
          )}
        </main>
      </div>
    </div>
  );
}
