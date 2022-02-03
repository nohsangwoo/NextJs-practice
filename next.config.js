const API_KEY = process.env.API_KEY

module.exports = {
  reactStrictMode: true,
  // source로 접속하면 destination으로 redirects 해주는 역할
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-sexy-blog/:path*',
        permanent: false,
      },
    ]
  },
  // destination을 masking해주는 역할
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ]
  },
}
