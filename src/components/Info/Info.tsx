import React from "react";
import cx from "clsx";
import styles from "./Info.module.css";
import { IUserData } from "../../models/IUser";

export type InfoProps = React.HTMLAttributes<HTMLDivElement> & {
  data?: IUserData | null;
};
export function Info({ className, data, ...props }: InfoProps) {
  const { user, children } = data || {};
  return (
    <div className={cx(className, styles.root)} {...props}>
      <div className={styles.block}>
        <h2 className={styles.title}>Персональные данные</h2>
        <p className={styles.text}>
          {user?.name}, {user?.age} лет
        </p>
      </div>
      {Boolean(children?.length) && (
        <div className={cx(styles.block, styles.blockChildren)}>
          <h2 className={styles.title}>Дети</h2>
          {children?.map((child, idx) => (
            <p key={idx} className={styles.text}>
              {child.name}, {child.age} лет
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
