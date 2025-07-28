import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    // Set basePath and assetPrefix to your GitHub repo name (replace 'your-repo-name')
    basePath: isProd ? '/testimonial-card' : '',
    assetPrefix: isProd ? '/testimonial-card' : '',

    // For static export to work on GitHub Pages
    output: 'export',

    // Disable image optimization for static export (since GitHub Pages is static)
    images: {
        unoptimized: true,
    },

    // Add any other config options you have
};

export default nextConfig;
