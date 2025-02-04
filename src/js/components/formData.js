import { LitElement, html, css } from 'lit';
 
class formData extends LitElement {
  static styles = css`
    form > div {
      margin-block-end: 8px;
    }
 
    label,
    input {
      display: block;
    }
  `;
 
  render() {
    return html`
      <form action="/story/add" method="POST">
            <label for="title">Judul:</label>
            <input type="text" id="title" name="title" required>
            <br><br>
            <label for="description">Deskripsi:</label>
            <textarea id="description" name="description" required></textarea>
            <input type="submit" value="Submit">
        </form>
    `;
  }
}
 
customElements.define('form-section', formData);