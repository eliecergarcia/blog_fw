/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// const baseUrl = '/flatwhite';

/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'experimental-serverless-trace',
  // Especifica el directorio de salida para los archivos HTML estáticos
  distDir: 'out',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;