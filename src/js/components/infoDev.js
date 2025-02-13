import { LitElement, html, css } from 'lit';

class infoDeveloper extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <article class="info">
        <h2>Sesilia Pandejlaki</h2>
        <p>Mahasiswa <br>Asal: Manado, Indonesia</p>
      </article>
    `;
  }
}

customElements.define('info-developer', infoDeveloper);