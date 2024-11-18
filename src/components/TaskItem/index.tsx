import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./TaskItem.module.css";
import { ITask } from "../../hooks/useHandleTasks";

interface TaskItemProps {
  task: ITask;
  onDeleteTask: (taskId: number) => void;
  onCheckTask: (taskId: number) => void;
}

export function TaskItem({ task, onDeleteTask, onCheckTask }: TaskItemProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCheckTask() {
    onCheckTask(task.id);
  }

  return (
    <li className={styles.taskItem}>
      <span>
        <input
          type="checkbox"
          id={`task-${task.id}`}
          checked={task.isDone}
          onChange={handleCheckTask}
        />
        <label htmlFor={`task-${task.id}`}>
          <CheckCircle
            size={24}
            weight="fill"
            className={styles.checkedCircle}
          />
          <Circle size={24} className={styles.circle} />
        </label>

        <p>{task.content}</p>
      </span>
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </li>
  );
}
