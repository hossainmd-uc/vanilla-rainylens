import { getPosts } from '../data.js';
import { createCard } from './GalleryCard.js';

export async function mountGallery(container) {
  const section = document.createElement('section');
  section.className = 'gallery';
  container.appendChild(section);

  try {
    const posts = await getPosts();
    posts.forEach(post => section.appendChild(createCard(post)));
  } catch {
    section.innerHTML = '<p class="gallery-error">Failed to load gallery.</p>';
  }

  return section;
}
