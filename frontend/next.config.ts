import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // React Compiler can slow down dev mode, disable for faster iteration
  reactCompiler: false,
};

export default nextConfig;

