import { LitElement, html} from 'lit';

class Navbar extends LitElement {
  createRenderRoot() {
    return this;
  }
 
  render() {
    return html`
      <section class="navbar" id="navbar">
        <nav>
          <div class="titleBrand">
            <img src="favicon.png" alt="Story App Logo" />
            <h1>My Story App</h1>
          </div>
          <ul class="navLinks">
            <li><a href="/">Home</a></li>
            <li><a href="/views/form.html">Form</a></li>
            <li><a href="/views/developer.html">Developer</a></li>
          </ul>
        </nav>
        <div class="footer">
          <p>&copy; 2024 My Story App.<br>All rights reserved.</p>
        </div>
      </section>
    `;
  }
}

customElements.define('navbar-section', Navbar);