/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    // 添加路径别名配置
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname),
      };
      return config;
    },
  };
  
  module.exports = nextConfig;
