import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cx from "clsx";
import styles from "./Button.module.css";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: React.ReactNode;
  variant?: "save" | "delete" | "add";
  children?: React.ReactNode;
};

export function Button({
  className,
  icon,
  children,
  variant,

  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        className,
        styles.root,
        variant === "save" && styles.variantSave,
        variant === "delete" && styles.variantDelete,
        variant === "add" && styles.variantAdd
      )}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
