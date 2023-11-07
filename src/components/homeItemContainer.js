import styles from "./homeItemContainer.css";

import HomeItem from "./homeItem.js";

function HomeItemContainer(
  itemList,
  editItemCallback,
  pinCallback,
  trashCallback
) {
  const itemContainerElem = document.createElement("div");
  itemContainerElem.classList.add(styles.itemContainer);

  removeAllChildren();

  for (let item of itemList) {
    itemContainerElem.appendChild(
      HomeItem(item, editItemCallback, pinCallback, trashCallback).getElement()
    );
  }

  function removeAllChildren() {
    while (itemContainerElem.firstChild) {
      itemContainerElem.removeChild(itemContainerElem.lastChild);
    }
  }

  function getElement() {
    return itemContainerElem;
  }

  return { getElement };
}

export default HomeItemContainer;
