import React from "react";
import cx from "clsx";
import styles from "./Container.module.css";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cx(className, styles.container)} {...props} />;
}
