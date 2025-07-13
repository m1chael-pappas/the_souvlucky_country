/**
 * Image optimization utilities for The SouvLucky Country website
 * These utilities help with manual image optimization recommendations
 */

export interface ImageOptimizationConfig {
  quality: number;
  format: 'webp' | 'avif' | 'jpeg' | 'png';
  sizes: string;
  priority: boolean;
  placeholder: 'blur' | 'empty';
}

export const IMAGE_CONFIGS = {
  // Critical above-fold images
  hero: {
    quality: 85,
    format: 'webp' as const,
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px',
    priority: true,
    placeholder: 'blur' as const,
  },
  
  // Logo and branding
  logo: {
    quality: 90,
    format: 'webp' as const,
    sizes: '200px',
    priority: true,
    placeholder: 'blur' as const,
  },
  
  // Popular section food images
  popular: {
    quality: 80,
    format: 'webp' as const,
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    priority: false, // Only first 3 get priority
    placeholder: 'blur' as const,
  },
  
  // Social media grid images
  social: {
    quality: 75,
    format: 'webp' as const,
    sizes: '(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw',
    priority: false, // Only first 4 get priority
    placeholder: 'blur' as const,
  },
  
  // About page images
  about: {
    quality: 80,
    format: 'webp' as const,
    sizes: '(max-width: 768px) 100vw, 50vw',
    priority: false,
    placeholder: 'blur' as const,
  },
  
  // Background images
  background: {
    quality: 85,
    format: 'webp' as const,
    sizes: '100vw',
    priority: true, // If above fold
    placeholder: 'blur' as const,
  },
} as const;

/**
 * Generate a blur placeholder data URL
 * This is a simple 1x1 pixel base64 encoded image
 */
export const generateBlurDataURL = (color = '#f3f4f6'): string => {
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z";
};

/**
 * Recommended file size limits for different image types
 */
export const FILE_SIZE_LIMITS = {
  hero: 500 * 1024, // 500KB for hero images
  popular: 150 * 1024, // 150KB for food images
  social: 100 * 1024, // 100KB for social media images
  logo: 50 * 1024, // 50KB for logos
  background: 800 * 1024, // 800KB for background images
} as const;

/**
 * Critical images that should be preloaded
 */
export const CRITICAL_IMAGES = [
  '/home_hero.png',
  '/logo.png',
  '/popylar_01.png',
  '/popular_02.png',
  '/popular_03.png',
  '/instagram_01.jpg',
  '/instagram_02.jpg',
  '/instagram_03.jpg',
  '/instagram_04.jpg',
] as const;

/**
 * Get optimization config for a specific image type
 */
export const getImageConfig = (type: keyof typeof IMAGE_CONFIGS): ImageOptimizationConfig => {
  return IMAGE_CONFIGS[type];
};

/**
 * Manual optimization recommendations for existing large images
 */
export const OPTIMIZATION_RECOMMENDATIONS = {
  '/home_hero.png': {
    currentSize: '15.9MB',
    recommendedSize: '500KB',
    compressionRatio: '97%',
    tools: ['TinyPNG', 'ImageOptim', 'Squoosh'],
    priority: 'HIGH - Critical above-fold image',
  },
  '/about_header.png': {
    currentSize: '8.2MB', 
    recommendedSize: '800KB',
    compressionRatio: '90%',
    tools: ['TinyPNG', 'ImageOptim', 'Squoosh'],
    priority: 'HIGH - Above-fold background',
  },
  '/about_01.png': {
    currentSize: '5.7MB',
    recommendedSize: '400KB',
    compressionRatio: '93%',
    tools: ['TinyPNG', 'ImageOptim', 'Squoosh'],
    priority: 'MEDIUM - Below fold content',
  },
  '/about_02_update.png': {
    currentSize: '4.7MB',
    recommendedSize: '400KB', 
    compressionRatio: '91%',
    tools: ['TinyPNG', 'ImageOptim', 'Squoosh'],
    priority: 'MEDIUM - Below fold content',
  },
  '/about_03_update.png': {
    currentSize: '3.3MB',
    recommendedSize: '400KB',
    compressionRatio: '88%',
    tools: ['TinyPNG', 'ImageOptim', 'Squoosh'],
    priority: 'MEDIUM - Below fold content',
  },
  '/popular_03.png': {
    currentSize: '3.1MB',
    recommendedSize: '150KB',
    compressionRatio: '95%',
    tools: ['TinyPNG', 'ImageOptim', 'Squoosh'],
    priority: 'HIGH - Popular section image',
  },
} as const;