import styles from "./editItemState.css";

import BackImg from "./images/back.svg";

function EditItemState(addItemCallback, editItemCallback) {
  let isEdit = false;
  let itemId = null;

  const item = document.createElement("div");
  item.classList.add(styles.addItem);

  const controlContainer = document.createElement("div");
  controlContainer.classList.add(styles.controlContainer);

  const backImg = document.createElement("img");
  backImg.classList.add(styles.backImg);
  backImg.src = BackImg;
  backImg.alt = "back button";
  backImg.addEventListener("click", handleBackClick);

  controlContainer.appendChild(backImg);
  item.appendChild(controlContainer);

  const textContainer = document.createElement("div");
  textContainer.classList.add(styles.textContainer);

  const titleText = document.createElement("input");
  titleText.classList.add(styles.titleText);
  titleText.type = "text";
  titleText.placeholder = "Title";

  const descriptionText = document.createElement("textarea");
  descriptionText.classList.add(styles.descriptionText);
  descriptionText.placeholder = "Description";

  textContainer.appendChild(titleText);
  textContainer.appendChild(descriptionText);

  item.appendChild(textContainer);

  function handleBackClick() {
    if (isEdit) {
      editItemCallback(itemId, titleText.value, descriptionText.value);
    } else {
      addItemCallback(titleText.value, descriptionText.value);
    }
  }

  function update(item) {
    if (item === null) {
      isEdit = false;
      titleText.value = "";
      descriptionText.value = "";
    } else {
      isEdit = true;
      itemId = item.id;
      titleText.value = item.title;
      descriptionText.value = item.description;
    }
  }

  function getElement() {
    return item;
  }

  return { getElement, update };
}

export default EditItemState;
