import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import cx from "clsx";
import styles from "./Input.module.css";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input({ className, ...props }: InputProps) {
  return <input className={cx(className, styles.root)} {...props}></input>;
}
