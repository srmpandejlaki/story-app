import { LitElement, html } from "lit";

class socialDev extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <article class="social">
        <h2>Sosial Media</h2>
        <p>Email: mutiarapandejlaki47@gmail.com</p>
        <div class="link">
          <a href="https://github.com/srmpandejlaki">GitHub</a>
          <a href="https://www.linkedin.com/in/sesilia-pandejlaki/">LinkedIn</a>
          <a href="https://www.instagram.com/mutiarapandejlaki27/?hl=en">Instagram</a>
        </div>
      </article>
    `;
  }
}

customElements.define("social-developer", socialDev);