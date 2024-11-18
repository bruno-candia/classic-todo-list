import styles from "./Logo.module.css";
import logo from "../../assets/todo-logo.svg";

export function Logo() {
  return <img className={styles.logo} src={logo} alt="Todo Logo" />;
}
