import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class infoDeveloper extends LitWithoutShadowDom {
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