"use client";

import { usePathname } from "next/navigation";

const SimplePageBanner = () => {
  const pathname = usePathname();
  
  // 更精确的路径匹配
  const getBackgroundImage = () => {
    // 精确匹配或前缀匹配
    if (pathname.startsWith('/products') || pathname === '/products') {
      return "/assets/images/products-banner.jpg";
    } else if (pathname.startsWith('/service') || pathname === '/service') {
      return "/assets/images/service-banner.jpg";
    } else if (pathname.startsWith('/about') || pathname === '/about') {
      return "/assets/images/about-banner.jpg";
    } else if (pathname.startsWith('/news') || pathname === '/news') {
      return "/assets/images/xinwenzhongxin.jpg";
    } else if (pathname.startsWith('/contact-us') || pathname === '/contact-us') {
      return "/assets/images/lianxiwomen.jpg";
    } else {
      return "/assets/images/technology-innovation-banner.jpg";
    }
  };

  return (
    <div 
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '450px',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}
    />
  );
};
export default SimplePageBanner;