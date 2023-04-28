/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.postimg.cc", "links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoieGF2aWVycHJvOTkiLCJhIjoiY2xnejk0cjRrMGg2MzNucGM0ODNqaWoxMiJ9.U5ELBHlycQc-S9J4Ftta2A",
  },
};

module.exports = nextConfig;
