import styles from "./addItemState.css";

import BackImg from "./images/back.svg";

function AddItemState(onBackClick) {
  const addItem = document.createElement("div");
  addItem.classList.add(styles.addItem);

  const controlContainer = document.createElement("div");
  controlContainer.classList.add(styles.controlContainer);

  const backImg = document.createElement("img");
  backImg.classList.add(styles.backImg);
  backImg.src = BackImg;
  backImg.alt = "back button";
  backImg.addEventListener("click", handleBackClick);

  controlContainer.appendChild(backImg);
  addItem.appendChild(controlContainer);

  const titleText = document.createElement("input");
  titleText.classList.add(styles.titleText);
  titleText.type = "text";
  titleText.placeholder = "Title";

  const descriptionText = document.createElement("input");
  descriptionText.classList.add(styles.descriptionText);
  descriptionText.type = "text";
  descriptionText.placeholder = "Description";

  addItem.appendChild(titleText);
  addItem.appendChild(descriptionText);

  function handleBackClick() {
    onBackClick(titleText.value, descriptionText.value);
  }

  function clear() {
    titleText.value = "";
    descriptionText.value = "";
  }

  function getElement() {
    return addItem;
  }

  return { getElement, clear };
}

export default AddItemState;
