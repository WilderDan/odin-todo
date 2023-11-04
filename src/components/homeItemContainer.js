import styles from "./homeItemContainer.css";

import HomeItem from "./homeItem.js";

function HomeItemContainer(itemList, editItemCallback) {
  const itemContainerElem = document.createElement("div");
  itemContainerElem.classList.add(styles.itemContainer);

  function update(list) {
    removeAllChildren();

    for (let item of list) {
      itemContainerElem.appendChild(
        HomeItem(item, editItemCallback).getElement()
      );
    }
  }

  function removeAllChildren() {
    while (itemContainerElem.firstChild) {
      itemContainerElem.removeChild(itemContainerElem.lastChild);
    }
  }

  function getElement() {
    return itemContainerElem;
  }

  return { getElement, update };
}

export default HomeItemContainer;
