import React from "react";
import { Info } from "../components/Info/Info";
import { IUserData } from "../models/IUser";
import styles from "./PreviewPage.module.css";
import { getFromStorage } from "../utils";

export const PreviewPage = (): JSX.Element => {
  const [data, setData] = React.useState<IUserData | null>(null);

  React.useEffect(() => {
    setData(getFromStorage<IUserData>("form"));
  }, []);

  console.log(data);

  return (
    <>
      <Info className={styles.info} data={data} />
    </>
  );
};
