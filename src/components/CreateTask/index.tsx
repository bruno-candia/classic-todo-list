import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./CreateTask.module.css";
import { FormEvent } from "react";

interface CreateTaskProps {
  onCreateTasks: (event: FormEvent<Element>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newTask: string;
}

export function CreateTask({
  onChange,
  newTask,
  onCreateTasks,
}: CreateTaskProps) {
  return (
    <div className={styles.createTaskWrapper}>
      <form className={styles.createTaskContainer} onSubmit={onCreateTasks}>
        <Input
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={onChange}
        />
        <Button type="submit" icon={PlusCircle}>
          Criar
        </Button>
      </form>
    </div>
  );
}
