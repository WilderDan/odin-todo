import styles from "./homeState.css";
import HomeItemContainer from "./homeItemContainer.js";
import AddItemImageSrc from "./images/plus.svg";

function HomeState(itemList, addItemCallback, editItemCallback, pinCallback) {
  const homeElem = document.createElement("div");
  homeElem.classList.add(styles.home);

  const homeItemContainer = HomeItemContainer(
    itemList,
    editItemCallback,
    pinCallback
  );
  homeElem.appendChild(homeItemContainer.getElement());

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(styles.imgContainer);

  const img = document.createElement("img");
  img.classList.add(styles.img);
  img.src = AddItemImageSrc;
  img.alt = "Add button";
  img.addEventListener("click", addItemCallback);

  imgContainer.appendChild(img);
  homeElem.appendChild(imgContainer);

  function update(list) {
    homeItemContainer.update(list);
  }

  function getElement() {
    return homeElem;
  }

  return { getElement, update };
}

export default HomeState;
