/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BASE_PATH || '',
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '',
            pathname: '/img/**'
        }],
    },
    webpack: (config) => {
        config.watchOptions = {
            poll: true
        }
        return config
    }
}

module.exports = nextConfig