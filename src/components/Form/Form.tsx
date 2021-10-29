import React, { useState } from "react";
import cx from "clsx";
import styles from "./Form.module.css";
import { ReactComponent as IconCross } from "../icons/icon-cross.svg";
import { Button, Container, Input } from "..";
import { IUserData } from "../../models/IUser";

export type FormProps = React.HTMLAttributes<HTMLFormElement>;

export function Form({ className, ...props }: FormProps) {
  const [userData, setUserData] = useState<IUserData>({
    name: "",
    age: "",
    children: [],
  });

  const addChild = () => {
    setUserData((state) => ({
      ...state,
      children: [...state.children, { name: "", age: "" }],
    }));
  };

  const deleteChild = (idx: number) => {
    setUserData((state) => ({
      ...state,
      children: [
        ...state.children.slice(0, idx),
        ...state.children.slice(idx + 1),
      ],
    }));
  };

  const onParentInputChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    prop: "name" | "age"
  ) => {
    setUserData((state) => ({
      ...state,
      [prop]: evt.target.value,
    }));
  };

  const onChildInputChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    idx: number,
    prop: "name" | "age"
  ) =>
    setUserData((state) => ({
      ...state,
      children: state.children.map((el, id) =>
        id === idx ? { ...el, [prop]: evt.target.value } : el
      ),
    }));

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
                  value={userData.name}
                  onChange={(e) => onParentInputChange(e, "name")}
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
                  value={userData.age}
                  onChange={(e) => onParentInputChange(e, "age")}
                />
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className={cx(styles.fieldset, styles.fieldsetChildren)}>
          <div className={styles.row}>
            <legend className={styles.fieldsetTitle}>Дети(макс.5)</legend>
            {userData.children.length < 5 && (
              <Button
                onClick={addChild}
                type="button"
                icon={<IconCross />}
                variant="add"
              >
                Добавить ребенка
              </Button>
            )}
          </div>
          {userData.children.length > 0 &&
            userData.children.map((child, idx) => (
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
                      onChange={(e) => onChildInputChange(e, idx, "name")}
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
                      onChange={(e) => onChildInputChange(e, idx, "age")}
                    />
                  </label>
                </li>
                <li className={styles.fieldsetItem}>
                  <Button
                    onClick={() => deleteChild(idx)}
                    type="button"
                    variant="delete"
                  >
                    Удалить
                  </Button>
                </li>
              </ul>
            ))}
        </fieldset>
        <Button type="button" variant="save">
          Сохранить
        </Button>
      </Container>
    </form>
  );
}
