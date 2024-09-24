/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com', 'www.mowash.in', 'i.postimg.cc', 'cdn.harappa.education', 'publicassets.leverageedu.com', 'pantiss.com', 'static.pbcdn.in'], // Add the external domain here
    },
  };
  
  export default nextConfig;
  