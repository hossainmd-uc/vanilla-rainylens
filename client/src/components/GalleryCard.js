export function createCard(post) {
  const card = document.createElement('article');
  card.className = 'gallery-card';

  card.addEventListener('click', () => {
    window.location.hash = `#post/${post.id}`;
  });

  const shortCaption =
    post.caption.length > 120
      ? post.caption.slice(0, 120).trim() + '...'
      : post.caption;

  const mediaHtml = post.images
    .map(url =>
      url.includes('.mp4')
        ? `<div class="card-video-tile">
            <span class="card-video-icon">▶</span>
            <span>Watch on Instagram</span>
          </div>`
        : `<img src="${url}" alt="" class="card-image" loading="lazy" />`
    )
    .join('');

  card.innerHTML = `
    <div class="card-images">
      ${mediaHtml}
    </div>
    <p class="card-caption">${shortCaption}</p>
  `;

  return card;
}
