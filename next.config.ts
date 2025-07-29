import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/testimonial-card',
    assetPrefix: '/testimonial-card',

    output: 'export',

    images: {
        unoptimized: true,
    },

};

export default nextConfig;
