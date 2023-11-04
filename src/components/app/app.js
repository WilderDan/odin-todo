import styles from "./app.css";

import HomeState from "../homeState/homeState.js";
import AddItemState from "../addItemState/addItemState.js";

function App() {
  const appElem = document.createElement("div");
  appElem.classList.add(styles.app);

  const homeState = HomeState(onAddItemClick);
  const addItemState = AddItemState(onBackClick);

  appElem.appendChild(homeState.getElement());

  function onAddItemClick() {
    appElem.removeChild(appElem.firstElementChild);
    appElem.appendChild(addItemState.getElement());
  }

  function onBackClick(title, text) {
    addItemState.clear();
    appElem.removeChild(appElem.firstElementChild);

    appElem.appendChild(homeState.getElement());
  }

  function getElement() {
    return appElem;
  }

  return { getElement };
}

export default App;
