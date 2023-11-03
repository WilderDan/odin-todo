import styles from "./app.css";

import Home from "../home/home.js";

const App = () => {
  const app = document.createElement("div");
  app.classList.add(styles.app);

  const home = Home();

  app.appendChild(home.getElement());

  const getElement = () => {
    return app;
  };

  return { getElement };
};

export default App;
