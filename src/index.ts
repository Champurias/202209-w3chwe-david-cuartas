import Header from "./components/Component/Header/Header.js";
const rootElement = document.querySelector(".root");
const header = new Header(rootElement as HTMLElement);
header.render();
