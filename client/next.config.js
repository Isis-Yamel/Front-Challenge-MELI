module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'http2.mlstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env:{
    AUTH_TOKEN: process.env.AUTH_TOKEN
  }
}
