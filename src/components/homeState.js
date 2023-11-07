import styles from "./homeState.css";
import HomeItemContainer from "./homeItemContainer.js";
import AddItemImageSrc from "./images/plus.svg";

function HomeState(
  itemList,
  addItemCallback,
  editItemCallback,
  pinCallback,
  trashCallback
) {
  const homeElem = document.createElement("div");
  homeElem.classList.add(styles.home);

  render(itemList);

  function createItemContainer(list) {
    const homeItemContainer = HomeItemContainer(
      list,
      editItemCallback,
      pinCallback,
      trashCallback
    );

    homeElem.appendChild(homeItemContainer.getElement());
  }

  function getElement() {
    return homeElem;
  }

  function render(list) {
    removeAllChildren(homeElem);

    const pinnedList = list.filter((item) => item.isPinned);
    const notPinnedList = list.filter((item) => !item.isPinned);

    if (pinnedList.length > 0) {
      createItemContainer(pinnedList);
    }

    if (notPinnedList.length > 0) {
      createItemContainer(notPinnedList);
    }

    const imgContainer = document.createElement("div");
    imgContainer.classList.add(styles.imgContainer);

    const img = document.createElement("img");
    img.classList.add(styles.img);
    img.src = AddItemImageSrc;
    img.alt = "Add button";
    img.addEventListener("click", addItemCallback);

    imgContainer.appendChild(img);
    homeElem.appendChild(imgContainer);

    return homeElem;
  }

  return { getElement, render };
}

function removeAllChildren(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.lastChild);
  }
}

export default HomeState;
