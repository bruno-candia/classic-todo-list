import { useState } from "react";

export interface ITask {
  id: number;
  content: string;
  createdAt: Date;
  isDone: boolean;
}


interface UseHandleTasks {
  tasks: ITask[];
  newTask: string;
  handleNewTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreateTask: (event: React.FormEvent) => void;
  handleDeleteTask: (taskId: number) => void;
  handleCheckTask: (taskId: number) => void;
}

export function useHandleTasks(): UseHandleTasks {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");

  
  function handleCheckTask(taskId: number) {
    setTasks((oldTasks) =>
      oldTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      })
    );
  }


  function handleNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateTask(event: React.FormEvent) {
    event.preventDefault();

    if (!newTask.trim()) {
      return;
    }

    const newTaskObject: ITask = {
      id: tasks[tasks.length - 1]?.id + 1 || 1,
      content: newTask,
      createdAt: new Date(),
      isDone: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTaskObject]);
    setNewTask("");
  }

  function handleDeleteTask(taskId: number) {
    setTasks((oldTasks) => oldTasks.filter((t) => t.id !== taskId));
  }


  return {
    tasks,
    newTask,
    handleNewTask,
    handleCreateTask,
    handleDeleteTask,
    handleCheckTask,
  };
}