import logoUrl from '../assets/Logo.png';

export function mountHeader(container = document.body) {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="header-brand">
      <img src="${logoUrl}" alt="RainyLens logo" class="header-logo" />
      <span class="header-title">RainyLens</span>
    </div>
    <nav class="header-nav">
      <button class="header-btn">Gallery</button>
    </nav>
  `;
  container.prepend(header);
  return header;
}
