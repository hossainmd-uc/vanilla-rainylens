export default {
  base: '/vanilla-rainylens/', // 👈 1. ADD THIS (Replace with your actual GitHub repo name)
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
}