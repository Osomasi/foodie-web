/** @type {import('next').NextConfig} */
const nextConfig = {
  // to pass CI
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TO USE LATEST CANARY NEXT JS VERSION ALLOWING EXPERIMENTAL_PPR IN LAYOUTS
  // experimental: {
  //   ppr: 'incremental'
  // }
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
