import styles from "./editItemState.css";
import Pin from "./pin.js";
import BackImg from "./images/back.svg";
import DeleteImg from "./images/delete.svg";

function EditItemState(addItemCallback, editItemCallback, deleteItemCallback) {
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

  const rightSideControls = document.createElement("div");
  rightSideControls.classList.add(styles.rightSideControls);

  const pin = Pin(false, null);

  const deleteImg = document.createElement("img");
  deleteImg.classList.add(styles.deleteImg);
  deleteImg.src = DeleteImg;
  deleteImg.alt = "delete button";
  deleteImg.addEventListener("click", handleDeleteClick);

  rightSideControls.appendChild(pin.getElement());
  rightSideControls.appendChild(deleteImg);

  controlContainer.appendChild(backImg);
  controlContainer.appendChild(rightSideControls);

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
      editItemCallback(
        itemId,
        titleText.value,
        descriptionText.value,
        pin.getState()
      );
    } else {
      addItemCallback(titleText.value, descriptionText.value, pin.getState());
    }
  }

  function handleDeleteClick() {
    const confirmed =
      titleText.value === "" && descriptionText.value === ""
        ? true
        : confirm("Delete?");

    if (confirmed) deleteItemCallback(itemId);
  }

  function update(item) {
    if (item === null) {
      isEdit = false;
      itemId = null;
      titleText.value = "";
      descriptionText.value = "";
      pin.update(false);
    } else {
      isEdit = true;
      itemId = item.id;
      titleText.value = item.title;
      descriptionText.value = item.description;
      pin.update(item.isPinned);
    }
  }

  function getElement() {
    return item;
  }

  return { getElement, update };
}

export default EditItemState;
