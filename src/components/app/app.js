import styles from "./app.css";

import Note from "../../common/note.js";

import HomeState from "../homeState/homeState.js";
import AddItemState from "../addItemState/addItemState.js";

function App() {
  const appElem = document.createElement("div");
  appElem.classList.add(styles.app);

  const homeState = HomeState(changeState);
  const addItemState = AddItemState(addItem);

  appElem.appendChild(homeState.getElement());

  function changeState() {
    appElem.removeChild(appElem.firstElementChild);
    appElem.appendChild(addItemState.getElement());
  }

  function addItem(title, desc) {
    addItemState.clear();
    appElem.removeChild(appElem.firstElementChild);

    if (title !== "" || desc !== "") {
      const note = new Note(title, desc);

      console.log(note);
    }

    appElem.appendChild(homeState.getElement());
  }

  function getElement() {
    return appElem;
  }

  return { getElement };
}

export default App;
