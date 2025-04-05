import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.glsl": {
          loaders: ["raw-loader"],
          as: "*.js",
        },
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
};

export default nextConfig;
