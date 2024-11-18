import styles from "./EmptyTask.module.css";
import Clipboard from "../../assets/clipboard.png";

export function EmptyTask() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={Clipboard} />
      <div className={styles.emptyContent}>
        <p>
          <span>Você ainda não tem tarefas cadastradas</span>
          <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
}
