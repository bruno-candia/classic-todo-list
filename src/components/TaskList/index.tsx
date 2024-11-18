import { TaskInfo } from "../TaskInfo";
import styles from "./TaskList.module.css";
import { EmptyTask } from "../EmptyTask";
import { useMemo } from "react";
import { TaskItem } from "../TaskItem";
import { ITask } from "../../hooks/useHandleTasks";

interface TaskListProps {
  tasks: ITask[];
  onDeleteTask: (taskId: number) => void;
  onCheckTask: (taskId: number) => void;
}

export function TaskList({ tasks, onDeleteTask, onCheckTask }: TaskListProps) {
  const baseTasksValue = useMemo(() => tasks.length, [tasks]);
  const concludedTasks = useMemo(() => {
    return tasks.reduce((acc, task) => (task.isDone ? acc + 1 : acc), 0);
  }, [tasks]);

  return (
    <section className={styles.taskListWrapper}>
      <div className={styles.taskListContainer}>
        <div className={styles.taskListHeader}>
          <TaskInfo baseValue={baseTasksValue} textType="created">
            Tarefas criadas
          </TaskInfo>

          <TaskInfo
            baseValue={baseTasksValue}
            currentValue={concludedTasks}
            textType="done"
          >
            Concluídas
          </TaskInfo>
        </div>

        <div className={styles.taskListContent}>
          {tasks.length === 0 ? (
            <EmptyTask />
          ) : (
            <ul className={styles.taskList}>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onCheckTask={onCheckTask}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
