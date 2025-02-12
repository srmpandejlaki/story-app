import { LitElement, html, css } from 'lit';

class infoDeveloper extends LitElement {
  static styles = css `
    .info {
      background-color: #333e4e;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;

      h2 {
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        text-align: center;
      }
    }
  `;

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