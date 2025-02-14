import { LitElement, html, css} from 'lit';

class Navbar extends LitElement {
  static styles = css `
    .navbar {
      position: fixed;
      left: 0;
      top: 0;
      background-color: #333e4e;
      color: white;
      height: 100vh;
      width: 10%;

      display: flex;
      flex-direction: column;
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

      h1 {
        font-size: 1rem;
      }
    }

    .navLinks {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      list-style: none;
      padding: 1rem;
        
      a {
        text-decoration: none;
        color: white;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .footer {
      p {
        text-align: center;
        font-size: 0.7rem;
      }
    }
  `;
 
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