let cachedPosts = null;

export async function getPosts() {
  if (!cachedPosts) {
    const res = await fetch('http://localhost:3001/api/instagram/');
    cachedPosts = await res.json();
  }
  return cachedPosts;
}

export async function getPost(id) {
  const posts = await getPosts();
  return posts.find(p => p.id === id) ?? null;
}
