import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers() {
    return [
      {
        // Las texturas incluyen un hash en su nombre para renovar la caché al cambiarlas.
        source: "/images/textures/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/id/*/600/400",
        search: "",
      },
    ],
  },
};

export default nextConfig;
