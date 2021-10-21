/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    PUBLIC_URL:
      process.env.NODE_ENV === "production"
        ? "https://test-next-graphql.netlify.app"
        : "http://localhost:3000",
  },
};
