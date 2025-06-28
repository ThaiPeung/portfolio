import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.glsl": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
  webpack: (config, { isServer }) => {
    // Fallback for Webpack when not using Turbopack
    if (process.env.NEXT_BUILDER !== "experimental-turbopack") {
      config.module.rules.push({
        test: /\.(glsl|vs|fs)$/,
        exclude: /node_modules/,
        use: ["raw-loader"],
      });
    }
    return config;
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
