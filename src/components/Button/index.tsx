import { ReactNode } from "react";
import styles from "./Button.module.css";
import { Icon } from "@phosphor-icons/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: Icon;
}

export function Button({ children, icon: ButtonIcon, ...props }: ButtonProps) {
  return (
    <button className={styles.btn} {...props}>
      {children}
      {ButtonIcon && <ButtonIcon size={16} />}
    </button>
  );
}
