import { LitElement, html, css } from 'lit';

class StoryItem extends LitElement {
  static properties = {
    name: { type: String },
    description: { type: String },
  };

  static styles = css `
    .storyItem {
      width: 200px;
      border: 1px solid #333e4e;

      .storyImage {
        width: 150px;
      }
    }
  `;
 
  constructor() {
    super();
    this.name = 'Belajar reactive property di Lit component';
  }
 
  render() {
    return html` 
      <div class="storyItem">
        <img class="storyImage" src="favicon.png" alt="story image">
        <h2 class="storyName">Name</h2>
        <p class="storyDesc">description.</p>
      </div>
    `;
  }
}

customElements.define('story-item', StoryItem);