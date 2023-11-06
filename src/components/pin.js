import styles from "./pin.css";
import PinImg from "./images/pin.svg";
import PinPressedImg from "./images/pinPressed.svg";

function Pin(pixelWidth = 35, isPressed = false, onclick = null) {
  let state = isPressed;

  const pin = document.createElement("img");
  pin.classList.add(styles.pin);
  pin.src = getPinImage();
  pin.alt = "pin";
  pin.style.width = `${pixelWidth}px`;
  pin.addEventListener("click", handleClick);

  function handleClick(e) {
    e.stopPropagation();
    state = !state;
    pin.src = getPinImage();
    if (onclick) onclick();
  }

  function getPinImage() {
    return state ? PinPressedImg : PinImg;
  }

  function update(isPinned) {
    state = isPinned;
    pin.src = getPinImage();
  }

  function getState() {
    return state;
  }

  function getElement() {
    return pin;
  }

  return { getElement, getState, update };
}

export default Pin;
