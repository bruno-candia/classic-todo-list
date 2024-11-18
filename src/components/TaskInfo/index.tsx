import { Counter } from "../Counter";
import styles from "./TaskInfo.module.css";

interface TaskInfoProps {
  children: React.ReactNode;
  currentValue?: number;
  baseValue: number;
  textType: "created" | "done";
}

export function TaskInfo({
  children,
  currentValue,
  baseValue,
  textType,
}: TaskInfoProps) {
  return (
    <div className={styles.taskInfo}>
      <h2 className={styles[textType]}>{children}</h2>
      <Counter currentValue={currentValue} baseValue={baseValue} />
    </div>
  );
}
