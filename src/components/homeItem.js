import styles from "./homeItem.css";

function HomeItem(item) {
  const itemElem = document.createElement("div");
  itemElem.classList.add(styles.item);

  const title = document.createElement("h3");
  title.innerText = item.title === "" ? "No Title" : item.title;

  const description = document.createElement("p");
  description.innerText = item.description;

  itemElem.appendChild(title);
  itemElem.appendChild(description);

  function getElement() {
    return itemElem;
  }
  return { getElement };
}

export default HomeItem;
