import styles from "./Counter.module.css";

interface CounterProps {
  baseValue: number;
  currentValue?: number;
}

export function Counter({ baseValue, currentValue }: CounterProps) {
  const isCounterVisible = currentValue !== undefined && baseValue > 0;

  return (
    <span className={styles.counter}>
      {isCounterVisible ? `${currentValue} de ` : ""} {baseValue}
    </span>
  );
}
