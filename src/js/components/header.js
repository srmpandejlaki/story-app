import { LitElement, html, css } from 'lit';

class Header extends LitElement {
  static styles = css`
    nav {
      background-color: #333e4e;
      color: #fff;
      min-height: 10vh;

      display: flex;
      justify-content: space-between;
      padding-inline: 1rem;
    }

    
    .titleBrand {
      display: flex;
      gap: 1rem;
      align-items: center;

      img {
        width: 30px;
      }
    }

    .navLinks {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    
      a {
        text-decoration: none;
        color: #fff;
      }
    }

    .humbergerMenu {
      background-color: #333e4e;
      color: white;
      cursor: pointer;
      border: none;
      padding: 0.5rem 1rem;
    }
  `;
 
  render() {
    return html`
      <nav class="header">
        <div class="titleBrand">
          <img src="favicon.png" alt="Story App Logo" />
          <h1>My Story App</h1>
        </div>
        <ul class="navLinks">
          <li><a href="#">Home</a></li>
          <li><a href="#">Form</a></li>
          <li><a href="#">Developer</a></li>
        </ul>
        <button id="humbergerMenu" class="humbergerMenu"><i class="fa-solid fa-bars"></i></button>
      </nav>
    `;
  }
}

customElements.define('header-section', Header);