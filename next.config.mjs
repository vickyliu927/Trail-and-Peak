/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [],
        unoptimized: true,
    },
    eslint: {
        // Temporarily disable ESLint during development
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
