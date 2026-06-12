import { getPost } from '../data.js';

export async function mountPostDetail(container, id) {
  const post = await getPost(id);

  if (!post) {
    container.innerHTML = '<p class="detail-error">Post not found.</p>';
    return;
  }

  const mediaHtml = post.images
    .map(url =>
      url.includes('.mp4')
        ? `<a href="${post.permalink}" target="_blank" rel="noopener" class="detail-video-tile">
            <span class="detail-video-icon">▶</span>
            <span>Watch on Instagram</span>
          </a>`
        : `<img src="${url}" alt="" class="detail-image" loading="lazy" />`
    )
    .join('');

  const detail = document.createElement('div');
  detail.className = 'post-detail';
  detail.innerHTML = `
    <div class="detail-nav">
      <button class="detail-back">← Back</button>
      <a href="${post.permalink}" target="_blank" rel="noopener" class="detail-instagram-link">
        View on Instagram →
      </a>
    </div>
    <div class="detail-images">
      ${mediaHtml}
    </div>
    <p class="detail-caption">${post.caption}</p>
  `;

  detail.querySelector('.detail-back').addEventListener('click', () => {
    window.location.hash = '';
  });

  container.appendChild(detail);
}
