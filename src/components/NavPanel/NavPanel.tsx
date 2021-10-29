import React from "react";
import cx from "clsx";
import styles from "./NavPanel.module.css";

export type NavPanelProps = React.HTMLAttributes<HTMLDivElement>;

export function NavPanel({ className, ...props }: NavPanelProps) {
  return (
    <nav className={cx(className, styles.container)} {...props}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a className={styles.link} href="/">
            Форма
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.link} href="/">
            Превью
          </a>
        </li>
      </ul>
    </nav>
  );
}
