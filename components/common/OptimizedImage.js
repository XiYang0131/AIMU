import Image from 'next/image';
import { useState } from 'react';

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width = 800, 
  height = 450, 
  priority = false,
  thumbnail = false,
  placeholder = true
}) {
  const [isLoading, setIsLoading] = useState(true);
  
  // 如果没有提供图片源，使用渐变占位符
  const placeholderSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23121212'/%3E%3Cpath d='M0 0L800 450M800 0L0 450' stroke='%23222222' stroke-width='1'/%3E%3C/svg%3E";
  
  // 音乐相关的占位图标
  const musicPlaceholderSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23121212'/%3E%3Cpath d='M400 125 L400 325 Q400 350 375 350 Q350 350 350 325 Q350 300 375 300 Q387.5 300 400 306.25 L400 125 L500 100 L500 175' stroke='%236c44fc' stroke-width='8' fill='none'/%3E%3Ccircle cx='500' cy='175' r='25' fill='%236c44fc'/%3E%3C/svg%3E";
  
  const actualSrc = src || (placeholder ? musicPlaceholderSrc : placeholderSrc);
  const containerClass = thumbnail ? 'img-thumbnail' : 'img-optimized';
  
  return (
    <div className={`relative overflow-hidden ${containerClass} ${className}`}>
      <Image
        src={actualSrc}
        alt={alt || "音乐图片"}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsLoading(false)}
        layout="responsive"
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-lighter animate-pulse">
          <svg className="w-12 h-12 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
      )}
    </div>
  );
} 