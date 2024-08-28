import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./lib/env");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
