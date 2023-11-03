import styles from "./home.css";
import AddItemImageSrc from "./images/plus.svg";

const Home = () => {
  const home = document.createElement("div");
  home.classList.add(styles.home);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(styles.imgContainer);

  const img = document.createElement("img");
  img.classList.add(styles.img);
  img.src = AddItemImageSrc;
  img.alt = "Add button";

  imgContainer.appendChild(img);
  home.appendChild(imgContainer);

  const getElement = () => home;
  return { getElement };
};

export default Home;
