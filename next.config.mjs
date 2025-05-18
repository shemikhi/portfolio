/** @type {import('next').NextConfig} */ 
const nextConfig = { 
  output: 'export', 
  basePath: process.env.NODE_ENV === 'production' ? '/salm-portfolio' : '', 
  images: { 
    unoptimized: true, 
  }, 
}; 
 
export default nextConfig; 
