import styles from "./addItem.css";

import BackImg from "./images/back.svg";

function AddItem(homeCallback) {
  const addItem = document.createElement("div");
  addItem.classList.add(styles.addItem);

  const controlContainer = document.createElement("div");
  controlContainer.classList.add(styles.controlContainer);

  const backImg = document.createElement("img");
  backImg.classList.add(styles.backImg);
  backImg.src = BackImg;
  backImg.alt = "back button";
  backImg.addEventListener("click", homeCallback);

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

  function getElement() {
    return addItem;
  }

  return { getElement };
}

export default AddItem;
