import styles from "./pin.css";
import PinImg from "./images/pin.svg";
import PinPressedImg from "./images/pinPressed.svg";

function Pin(isPressed, onclick) {
  let state = isPressed;

  const pin = document.createElement("img");
  pin.classList.add(styles.pin);
  pin.src = getPinImage();
  pin.alt = "pin";
  pin.addEventListener("click", handleClick);

  function handleClick() {
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
