/** @type {import('next').NextConfig} */
const nextConfig = {
  ReactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
};

export default nextConfig;
