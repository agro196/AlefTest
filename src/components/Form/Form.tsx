import React from "react";
import cx from "clsx";
import styles from "./Form.module.css";
import { ReactComponent as IconCross } from "../icons/icon-cross.svg";
import { Button, Container, Input } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  addChild,
  editChild,
  deleteChild,
} from "../../store/reducers/ChildrenSlice";
import { editUser } from "../../store/reducers/UserSlice";
import { getFromStorage, saveInStorage } from "../../utils";
import { IUserData } from "../../models/IUser";

export type FormProps = React.HTMLAttributes<HTMLFormElement>;

export function Form({ className, ...props }: FormProps) {
  const user = useAppSelector((state) => state.userReducer);
  const { children } = useAppSelector((state) => state.childrenReducer);
  const dispatch = useAppDispatch();

  /* Parent handlers */

  const handleUserChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    prop: "name" | "age"
  ) => {
    dispatch(
      editUser({
        user: {
          ...user,
          [prop]: evt.target.value,
        },
      })
    );
  };

  /* Child handlers */

  const handleAddChild = () => {
    dispatch(addChild());
  };

  const handleEditChild = (
    evt: React.ChangeEvent<HTMLInputElement>,
    idx: number,
    prop: "name" | "age"
  ) => {
    const child = children[idx];
    dispatch(editChild({ idx, child: { ...child, [prop]: evt.target.value } }));
  };

  const handleDeleteChild = (idx: number) => {
    dispatch(deleteChild({ idx }));
  };

  /* Handle save */

  const handleSave = () => {
    saveInStorage("form", {
      user,
      children,
    });
  };

  /* Initialize */
  React.useEffect(() => {
    const formData = getFromStorage<IUserData>("form");

    if (formData && !user.name && !user.age) {
      dispatch(
        editUser({
          user: formData.user,
        })
      );

      if (formData.children.length && !children.length) {
        formData.children.forEach((child, idx) => {
          dispatch(addChild());
          dispatch(editChild({ idx, child }));
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className={cx(className, styles.root)} {...props}>
      <Container>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldsetTitle}>Персональные данные</legend>
          <ul className={styles.fieldsetList}>
            <li className={styles.fieldsetItem}>
              <label className={styles.label}>
                <span className={styles.labelText}>Имя</span>
                <Input
                  placeholder="Введите имя..."
                  className={styles.input}
                  value={user.name}
                  onChange={(e) => handleUserChange(e, "name")}
                />
              </label>
            </li>
            <li className={styles.fieldsetItem}>
              <label className={styles.label}>
                <span className={styles.labelText}>Возраст</span>
                <Input
                  type="number"
                  placeholder="Введите возраст..."
                  className={styles.input}
                  value={user.age}
                  onChange={(e) => handleUserChange(e, "age")}
                />
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className={cx(styles.fieldset, styles.fieldsetChildren)}>
          <div className={styles.row}>
            <legend className={styles.fieldsetTitle}>Дети(макс.5)</legend>
            {children.length < 5 && (
              <Button
                onClick={handleAddChild}
                type="button"
                icon={<IconCross />}
                variant="add"
              >
                Добавить ребенка
              </Button>
            )}
          </div>
          {children.length > 0 &&
            children.map((child, idx) => (
              <ul
                key={idx}
                className={cx(styles.fieldsetList, styles.fieldsetListChildren)}
              >
                <li className={styles.fieldsetItem}>
                  <label className={styles.label}>
                    <span className={styles.labelText}>Имя</span>
                    <Input
                      placeholder="Введите имя..."
                      className={styles.input}
                      onChange={(e) => handleEditChild(e, idx, "name")}
                      value={child.name}
                    />
                  </label>
                </li>
                <li className={styles.fieldsetItem}>
                  <label className={styles.label}>
                    <span className={styles.labelText}>Возраст</span>
                    <Input
                      type="number"
                      placeholder="Введите возраст..."
                      className={styles.input}
                      value={child.age}
                      onChange={(e) => handleEditChild(e, idx, "age")}
                    />
                  </label>
                </li>
                <li className={styles.fieldsetItem}>
                  <Button
                    onClick={() => handleDeleteChild(idx)}
                    type="button"
                    variant="delete"
                  >
                    Удалить
                  </Button>
                </li>
              </ul>
            ))}
        </fieldset>
        <Button onClick={handleSave} type="button" variant="save">
          Сохранить
        </Button>
      </Container>
    </form>
  );
}
