import styles from "./index.css";
import App from "./components/app/app.js";

const root = document.getElementById("root");
root.appendChild(App().getElement());
