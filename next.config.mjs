/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nitjsr.ac.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "refreshing-benefit-91aab22e0f.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "www.mccmdclinic.org",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
