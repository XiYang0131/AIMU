import { motion } from 'framer-motion';

export default function WaveAnimation({ className = '', barCount = 10, isPlaying = false }) {
  return (
    <div className={`wave-animation ${className}`}>
      {[...Array(barCount)].map((_, i) => (
        <motion.div
          key={i}
          className="bar"
          initial={{ height: "15px" }}
          animate={isPlaying ? {
            height: ["15px", "40px", "15px"],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1 % 0.5,
              ease: "easeInOut"
            }
          } : { height: "15px" }}
        />
      ))}
    </div>
  );
} 