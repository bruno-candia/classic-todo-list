import { Header } from "./components/Header";
import { CreateTask } from "./components/CreateTask";
import { TaskList } from "./components/TaskList";

import { useHandleTasks } from "./hooks/useHandleTasks";

import "./global.css";

function App() {
  const {
    tasks,
    newTask,
    handleNewTask,
    handleCreateTask,
    handleDeleteTask,
    handleCheckTask,
  } = useHandleTasks();

  return (
    <>
      <Header />
      <main>
        <CreateTask
          onChange={handleNewTask}
          onCreateTasks={handleCreateTask}
          newTask={newTask}
        />
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onCheckTask={handleCheckTask}
        />
      </main>
    </>
  );
}

export default App;
