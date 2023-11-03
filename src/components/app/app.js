import styles from "./app.css";

import Home from "../home/home.js";
import AddItem from "../addItem/addItem.js";

function App() {
  const app = document.createElement("div");
  app.classList.add(styles.app);

  const home = Home(changeToAddItem);
  const addItem = AddItem(changeToHome);

  app.appendChild(home.getElement());

  function changeToAddItem() {
    app.removeChild(app.firstElementChild);
    app.appendChild(addItem.getElement());
  }

  function changeToHome() {
    app.removeChild(app.firstElementChild);
    app.appendChild(home.getElement());
  }

  function getElement() {
    return app;
  }

  return { getElement };
}

export default App;
