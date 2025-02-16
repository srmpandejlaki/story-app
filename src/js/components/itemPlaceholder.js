import { LitElement, html } from "lit";

class itemPlaceholder extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div id="item" class="card" aria-hidden="true">
        <img class="card-img-top" src="..." alt="...">
        <div class="card-body">
          <h2 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h2>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define("item-placeholder", itemPlaceholder);