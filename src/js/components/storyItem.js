import { LitElement, html, css } from 'lit';

class StoryItem extends LitElement {
  static properties = {
    id: { type: String },
    name: { type: String },
    description: { type: String },
  };

  createRenderRoot() {
    return this; // return this to enable shadow DOM
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