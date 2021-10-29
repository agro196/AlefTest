import React from "react";
import cx from "clsx";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "./logo.svg";
import { Container, NavPanel } from "..";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={cx(className)} {...props}>
      <Container className={styles.container}>
        <Logo />
        <NavPanel className={styles.navPanel} />
      </Container>
    </header>
  );
}
