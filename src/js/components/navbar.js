import { LitElement, html, css } from 'lit';

class Navbar extends LitElement {
  static styles = css`
    nav {
      position: absolute;
      left: 0;
      top: 0;
      background-color: #333e4e;
      color: #fff;
      height: 100vh;
      width: 10%;

      display: flex;
      flex-direction: column;
      padding-inline: 1rem;
    }

    
    .titleBrand {
      display: flex;
      gap: 1rem;
      align-items: center;

      img {
        width: 30px;
      }

      h1 {
        font-size: 1rem;
      }
    }

    .navLinks {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      list-style: none;
    
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  `;
 
  render() {
    return html`
      <nav>
        <div class="titleBrand">
          <img src="favicon.png" alt="Story App Logo" />
          <h1>My Story App</h1>
        </div>
        <ul class="navLinks">
          <li><a href="#">Home</a></li>
          <li><a href="#">Form</a></li>
          <li><a href="#">Developer</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('navbar-section', Navbar);