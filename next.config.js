/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.dicebear.com', 'xsgames.co'],
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add file-loader to handle PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: isServer ? 'static/media/[name].[hash].[ext]' : 'static/media/[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig
