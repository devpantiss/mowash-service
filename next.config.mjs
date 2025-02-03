/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com', 'mowash-service.vercel.app', 'i.postimg.cc', 'cdn.harappa.education', 'publicassets.leverageedu.com', 'pantiss.com', 'static.pbcdn.in', 'app.shiprocket.in'], // Add the external domain here
    },
  };
  
  export default nextConfig;
  