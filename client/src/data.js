let cachedPosts = null;

export async function getPosts() {
  if (!cachedPosts) {
    const res = await fetch(`${import.meta.env.BASE_URL}instagram_archive.json`);
    cachedPosts = await res.json();
  }
  return cachedPosts;
}

export async function getPost(id) {
  const posts = await getPosts();
  return posts.find(p => p.id === id) ?? null;
}
