import styles from "./homeState.css";
import AddItemImageSrc from "./images/plus.svg";

function HomeState(addItemCallback) {
  const home = document.createElement("div");
  home.classList.add(styles.home);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(styles.imgContainer);

  const img = document.createElement("img");
  img.classList.add(styles.img);
  img.src = AddItemImageSrc;
  img.alt = "Add button";
  img.addEventListener("click", addItemCallback);

  imgContainer.appendChild(img);
  home.appendChild(imgContainer);

  function getElement() {
    return home;
  }
  return { getElement };
}

export default HomeState;
