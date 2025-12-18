/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Deshabilitar optimización de imágenes
    domains: ['localhost', 'cdn.jsdelivr.net'] // Permitir imágenes de CDN
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/Nicovaz.tech', // Importante para GitHub Pages
  // Configuración para producción
  env: {
    HOSTINGER: 'true'
  }
}

module.exports = nextConfig
