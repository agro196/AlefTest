import React from "react";
import cx from "clsx";
import { Link } from "react-router-dom";
import styles from "./NavPanel.module.css";

export type NavPanelProps = React.HTMLAttributes<HTMLDivElement>;

export function NavPanel({ className, ...props }: NavPanelProps) {
  return (
    <nav className={cx(className, styles.container)} {...props}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.link}>
            Форма
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/preview" className={styles.link}>
            Превью
          </Link>
        </li>
      </ul>
    </nav>
  );
}
