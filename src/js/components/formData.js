import { LitElement, html, css } from 'lit';
 
class formData extends LitElement {
  static properties = {
    minTitleLength: {
      type: Number,
    },
    freeze: {
      type: Boolean,
    },
    withPlaceholder: {
      type: Boolean,
    },
  };

  static styles = css`
    form > div {
      margin-block-end: 8px;
    }
 
    label,
    input {
      display: block;
    }
  `;

  constructor() {
    super();
 
    this.minTitleLength = 6;
  }
 
  render() {
    return html`
      <form action="/story/add" method="POST">
            <label for="title">Judul:</label>
            <input type="text" id="title" name="title" minlength=${this.minTitleLength} ?readonly=${this.freeze} placeholder=${this.withPlaceholder ? 'Masukkan judul' : nothing} required>
            <br><br>
            <label for="description">Deskripsi:</label>
            <textarea id="description" name="description" ?readonly=${this.freeze} placeholder=${this.withPlaceholder ? 'Masukkan deskripsi' : nothing} required></textarea>
            <input type="submit" value="Submit">
        </form>
    `;
  }
}
 
customElements.define('form-section', formData);