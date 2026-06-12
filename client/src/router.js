import { mountGallery } from './components/Gallery.js';
import { mountPostDetail } from './components/PostDetail.js';

export function startRouter(content) {
  async function render() {
    content.innerHTML = '';
    const hash = window.location.hash;

    if (hash.startsWith('#post/')) {
      const id = hash.replace('#post/', '');
      await mountPostDetail(content, id);
    } else {
      await mountGallery(content);
    }
  }

  window.addEventListener('hashchange', render);
  render();
}