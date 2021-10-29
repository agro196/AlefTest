import React from "react";
import styles from "./App.module.css";
import { Form, Header } from "./components";

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Form className={styles.form} />
    </div>
  );
};

export default App;
