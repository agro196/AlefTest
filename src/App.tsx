import React from "react";
import { Provider } from "react-redux";
import styles from "./App.module.css";
import { Form, Header } from "./components";
import { setupStore } from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PreviewPage } from "./pages";

const store = setupStore();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/preview">
            <PreviewPage />
          </Route>
          <Route path="/">
            <Form className={styles.form} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
