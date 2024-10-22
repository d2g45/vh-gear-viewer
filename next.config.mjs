import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
  analyzerMode: "static",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  experimental: {
    typedRoutes: true,
    esmExternals: true,
    optimizePackageImports: ["react-three-fiber"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.vaulthunters.gg",
        port: "",
        pathname: "/static/**",
      },
    ],
  },
};

export default bundleAnalyzer(nextConfig);
