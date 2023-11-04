import styles from "./app.css";
import Note from "../note.js";
import HomeState from "./homeState.js";
import AddItemState from "./addItemState.js";

function App() {
  const itemList = [];

  const appElem = document.createElement("div");
  appElem.classList.add(styles.app);

  const homeState = HomeState(itemList, changeState);
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
      itemList.push(note);
      homeState.update(itemList);
    }

    appElem.appendChild(homeState.getElement());
  }

  function getElement() {
    return appElem;
  }

  return { getElement };
}

export default App;
