import styles from "./homeItem.css";
import Pin from "./pin.js";

function HomeItem(item, editItemCallback, pinCallback) {
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

  const pinContainer = document.createElement("div");
  pinContainer.classList.add(styles.pinContainer);
  pinContainer.appendChild(pin.getElement());

  itemElem.appendChild(pinContainer);
  itemElem.appendChild(title);
  itemElem.appendChild(description);

  itemElem.addEventListener("click", () => editItemCallback(item.id));

  function handlePinClick() {
    pinCallback(item.id);
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
