import styles from "./trash.css";
import TrashImg from "./images/trash.svg";

function Trash(pixelWidth = 35, onclick = null) {
  const trashImg = document.createElement("img");
  trashImg.classList.add(styles.trashImg);
  trashImg.style.width = `${pixelWidth}px`;
  trashImg.src = TrashImg;
  trashImg.alt = "trash can";
  trashImg.addEventListener("click", handleClick);

  function getElement() {
    return trashImg;
  }

  function handleClick(e) {
    e.stopPropagation();
    if (confirm("Delete?")) onclick();
  }

  return { getElement };
}

export default Trash;
