/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    basePath: "",
    output: "export",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
