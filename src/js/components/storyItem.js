import { LitElement, html } from 'lit';

class StoryItem extends LitElement {
  static properties = {
    name: { type: String },
    description: { type: String },
  };
 
  constructor() {
    super();
    this.name = 'Belajar reactive property di Lit component';
  }
 
  render() {
    return html` <h1>${this.name}</h1> `;
  }
}

customElements.define('my-element', StoryItem);