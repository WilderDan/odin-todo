import styles from "./homeItem.css";
import Pin from "./pin.js";
import Trash from "./trash.js";

function HomeItem(item, editItemCallback, pinCallback, trashCallback) {
  const MAX_TITLE = 24;
  const MAX_DESC = 72;

  const itemElem = document.createElement("div");
  itemElem.classList.add(styles.item);

  const header = document.createElement("header");
  header.classList.add(styles.header);

  const title = document.createElement("h3");
  title.innerText =
    item.title === "" ? "No Title" : truncateExcess(item.title, MAX_TITLE);

  const description = document.createElement("p");
  description.innerText = truncateExcess(item.description, MAX_DESC);

  const pin = Pin(24, item.isPinned, handlePinClick);
  const trash = Trash(24, handleTrashClick);

  const controlContainer = document.createElement("div");
  controlContainer.classList.add(styles.controlContainer);
  controlContainer.appendChild(pin.getElement());
  controlContainer.appendChild(trash.getElement());

  itemElem.appendChild(title);
  itemElem.appendChild(description);
  itemElem.appendChild(controlContainer);

  itemElem.addEventListener("click", () => editItemCallback(item.id));

  function handlePinClick() {
    pinCallback(item.id);
  }

  function handleTrashClick() {
    trashCallback(item.id);
  }

  function truncateExcess(str, limit) {
    return str.length > limit ? str.slice(0, limit - 3) + "..." : str;
  }

  function getElement() {
    return itemElem;
  }
  return { getElement };
}

export default HomeItem;
