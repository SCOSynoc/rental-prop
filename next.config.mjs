/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.clerk.com',
          },
          {
            protocol:'https',
            hostname:'cbfynuzxghuyktbcovhc.supabase.co',
          }
        ],
      },
      webpack: (config) => {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          path: false,
          os: false,
        };
        return config;
      },
};



export default nextConfig;
