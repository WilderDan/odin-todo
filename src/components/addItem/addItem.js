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

  function getElement() {
    return addItem;
  }

  return { getElement };
}

export default AddItem;
