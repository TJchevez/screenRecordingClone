import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'tjc-snap-cast.b-cdn.net', protocol: 'https', port:'', pathname: '/**' }
        ]
    }
};

export default nextConfig;

