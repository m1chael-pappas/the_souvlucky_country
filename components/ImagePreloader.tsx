"use client";

import { useEffect } from "react";

interface ImagePreloaderProps {
  criticalImages?: string[];
}

const ImagePreloader = ({ criticalImages = [] }: ImagePreloaderProps) => {
  useEffect(() => {
    // Default critical images for the homepage
    const defaultCriticalImages = [
      "/home_hero.png",
      "/logo.png", 
      "/popylar_01.png",
      "/popular_02.png", 
      "/popular_03.png",
      "/instagram_01.jpg",
      "/instagram_02.jpg",
      "/instagram_03.jpg", 
      "/instagram_04.jpg"
    ];

    const imagesToPreload = [...defaultCriticalImages, ...criticalImages];

    // Create preload links for critical images
    imagesToPreload.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=80`;
      
      // Add responsive preloads for different screen sizes
      const link2x = document.createElement("link");
      link2x.rel = "preload";
      link2x.as = "image";
      link2x.href = `/_next/image?url=${encodeURIComponent(src)}&w=1920&q=80`;
      link2x.media = "(min-width: 1024px)";
      
      const linkMobile = document.createElement("link");
      linkMobile.rel = "preload";
      linkMobile.as = "image";
      linkMobile.href = `/_next/image?url=${encodeURIComponent(src)}&w=750&q=80`;
      linkMobile.media = "(max-width: 768px)";

      document.head.appendChild(link);
      document.head.appendChild(link2x);
      document.head.appendChild(linkMobile);
    });

    // Preload WebP versions for browsers that support it
    if (typeof window !== "undefined" && window.navigator) {
      const canvas = document.createElement("canvas");
      const webpSupported = canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
      
      if (webpSupported) {
        imagesToPreload.forEach((src) => {
          const webpLink = document.createElement("link");
          webpLink.rel = "preload";
          webpLink.as = "image";
          webpLink.href = `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=80&f=webp`;
          document.head.appendChild(webpLink);
        });
      }
    }

    return () => {
      // Cleanup preload links when component unmounts
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach((link) => {
        if (link.getAttribute("href")?.includes("/_next/image")) {
          link.remove();
        }
      });
    };
  }, [criticalImages]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;