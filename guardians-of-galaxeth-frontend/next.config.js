/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true // 暂时忽略构建时的类型错误
  },
  eslint: {
    ignoreDuringBuilds: true // 暂时忽略构建时的 ESLint 错误
  }
}

module.exports = nextConfig 