/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['links.papareact.com']
  }, 

  env: {
    mapbox_key: 'pk.eyJ1IjoiZGlydHlkdWNrOTk5IiwiYSI6ImNsZGMydmJndDA2amwzdnE1bW5yeWdsd3IifQ.llc4VRpuzOgGF26X4I3X0Q'
  }
}

module.exports = nextConfig
