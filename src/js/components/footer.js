import { LitElement, html, css } from 'lit';

class Footer extends LitElement {
  static styles = css`
    
    .footer {
      background-color: #333e4e;
      color: #fff;   
      padding-block: 0.45rem;
      text-align: center;
      min-height: 5vh;
    }
  `;
 
  render() {
    return html`
      <div class="footer">
        <p>&copy; 2024 My Story App. All rights reserved.</p>
      </div>
    `;
  }
}

customElements.define('footer-section', Footer);