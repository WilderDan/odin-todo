import styles from "./app.css";
import Note from "../note.js";
import HomeState from "./homeState.js";
import AddItemState from "./addItemState.js";

function App() {
  const itemList = [];
  // Will need to update when saving/loading existing notes
  let currentId = 1;

  const appElem = document.createElement("div");
  appElem.classList.add(styles.app);

  const addItemState = AddItemState(addItem);
  const homeState = HomeState(itemList, () => changeState(addItemState));

  appElem.appendChild(homeState.getElement());

  function changeState(state) {
    appElem.removeChild(appElem.firstElementChild);
    appElem.appendChild(state.getElement());
  }

  function addItem(title, desc) {
    addItemState.clear();

    if (title !== "" || desc !== "") {
      const note = new Note(currentId++, title, desc);
      itemList.push(note);
      homeState.update(itemList);
    }

    changeState(homeState);
  }

  function removeItem(id) {
    const findIndex = itemList.findIndex((e) => e.id === id);
    if (findIndex !== -1) itemList.splice(findIndex, 1);
  }

  function getElement() {
    return appElem;
  }

  return { getElement };
}

export default App;
