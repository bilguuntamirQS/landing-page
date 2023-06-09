/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const { i18n } = require("./next-i18next.config.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.alithemes.com",
      },
    ],
  },
};
module.exports = config;
