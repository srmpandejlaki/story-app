import { LitElement, html, css } from 'lit';

class WordSection extends LitElement {
  static styles = css `
    div {
      p {
        margin-top: -1rem;
        font-size: 1.2rem;
        line-height: 1;
      }
    }
  `;

  render() {
    return html` 
      <div>
        <h1>Welcome to My Story App!</h1>
        <p>
          <br>Simpan semua kenangan berhargamu disini.
          Lebih mudah ditemukan di sini. <br><br>
          Mari lihat kembali kenangan yang tersimpan pada list dibawah ini...
        </p>
      </div>
    `;
  }
}

customElements.define('words-section', WordSection);