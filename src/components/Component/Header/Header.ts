import Component from "../Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "main-header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <h1 class="main-title"> TU POKEDEX</h1>`;
  }
}

export default Header;
