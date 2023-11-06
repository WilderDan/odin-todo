import styles from "./app.css";
import Note from "../note.js";
import HomeState from "./homeState.js";
import EditItemState from "./editItemState.js";

function App() {
  const itemList = [];
  // Will need to update when saving/loading existing notes
  let currentId = 1;

  const appElem = document.createElement("div");
  appElem.classList.add(styles.app);

  const homeState = HomeState(itemList, changeToAddState, changeToEditState);
  const editItemState = EditItemState(handleAdd, handleEdit);

  appElem.appendChild(homeState.getElement());

  function changeState(state) {
    appElem.removeChild(appElem.firstElementChild);
    appElem.appendChild(state.getElement());
  }

  function changeToAddState() {
    editItemState.update(null);
    changeState(editItemState);
  }

  function changeToEditState(id) {
    editItemState.update(getItem(id));
    changeState(editItemState);
  }

  function handleAdd(title, desc) {
    if (title !== "" || desc !== "") {
      const note = new Note(currentId++, title, desc);
      itemList.push(note);
      homeState.update(itemList);
    }

    changeState(homeState);
  }

  function handleEdit(id, title, desc) {
    getItem(id).title = title;
    getItem(id).description = desc;
    homeState.update(itemList);
    changeState(homeState);
  }

  function getItem(id) {
    const findIndex = itemList.findIndex((e) => e.id === id);
    return itemList[findIndex];
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
