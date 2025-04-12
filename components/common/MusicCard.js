import { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import WaveAnimation from './WaveAnimation';
import { PlayIcon, PauseIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function MusicCard({ 
  title, 
  artist, 
  coverImage, 
  audioSrc,
  duration = "3:45",
  likes = 0,
  isNew = false
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // 这里可以添加实际的音频播放逻辑
  };
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  
  return (
    <motion.div 
      className="card glass-effect overflow-hidden"
      whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(108, 68, 252, 0.3)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <OptimizedImage 
          src={coverImage} 
          alt={`${title} by ${artist}`} 
          className="aspect-square"
          width={400}
          height={400}
        />
        
        {isNew && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </div>
        )}
        
        <button 
          className="absolute inset-0 flex items-center justify-center bg-dark/50 opacity-0 hover:opacity-100 transition-opacity"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
            {isPlaying ? (
              <PauseIcon className="w-8 h-8 text-white" />
            ) : (
              <PlayIcon className="w-8 h-8 text-white" />
            )}
          </div>
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
        <p className="text-light/70 text-sm mb-3">{artist}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <WaveAnimation isPlaying={isPlaying} barCount={8} className="h-8" />
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-light/60">{duration}</span>
            <button 
              className={`p-1 rounded-full ${isLiked ? 'text-red-500' : 'text-light/60 hover:text-light'}`}
              onClick={toggleLike}
            >
              <HeartIcon className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 