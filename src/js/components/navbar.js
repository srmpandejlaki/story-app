import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
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
            <nav-link nav-link content="${msg(`Home`)}" to="/"></nav-link>
            <nav-link nav-link content="${msg(`Form`)}" to="/views/form.html"></nav-link>
            <nav-link nav-link content="${msg(`Developer`)}" to="/views/developer.html"></nav-link>
            <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
            <nav-link nav-link content="${msg(`Masuk`)}" to="/auth/login.html" id="loginMenu"></nav-link>
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