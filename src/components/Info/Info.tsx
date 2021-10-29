import React from "react";
import cx from "clsx";
import styles from "./Info.module.css";

export type InfoProps = React.HTMLAttributes<HTMLDivElement>;

export function Info({ className, ...props }: InfoProps) {
  return (
    <div className={cx(className, styles.root)} {...props}>
      <div className={styles.block}>
        <h2 className={styles.title}>Персональные данные</h2>
        <p className={styles.text}>Василий, 30 лет</p>
      </div>
      <div className={cx(styles.block, styles.blockChildren)}>
        <h2 className={styles.title}>Дети</h2>
        <p className={styles.text}>Пётр, 10 лет</p>
      </div>
    </div>
  );
}
