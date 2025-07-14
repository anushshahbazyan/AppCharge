/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    basePath: process.env.BASE_PATH || '',
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '',
            pathname: '/img/**',
        }],
    },
    crossOrigin: 'anonymous',
    webpack: (config) => {
        config.watchOptions = {
            poll: true
        }
        return config
    },
    eslint: {
        dirs: ['src', 'app', 'products', 'components', 'utils', 'constants'],
    }
}

module.exports = nextConfig
