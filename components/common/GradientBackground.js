import { motion } from 'framer-motion';

export default function GradientBackground({ 
  children, 
  className = '',
  primaryColor = 'rgba(108, 68, 252, 0.15)',
  secondaryColor = 'rgba(255, 126, 238, 0.1)',
  animate = true
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 静态网格背景 */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* 动态渐变背景 */}
      {animate ? (
        <>
          <motion.div 
            className="absolute rounded-full filter blur-[100px]"
            initial={{ top: '10%', right: '10%', width: '30%', height: '30%', opacity: 0.5 }}
            animate={{ 
              top: ['10%', '15%', '10%'],
              right: ['10%', '15%', '10%'],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: primaryColor }}
          />
          <motion.div 
            className="absolute rounded-full filter blur-[100px]"
            initial={{ bottom: '10%', left: '10%', width: '30%', height: '30%', opacity: 0.5 }}
            animate={{ 
              bottom: ['10%', '15%', '10%'],
              left: ['10%', '15%', '10%'],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ background: secondaryColor }}
          />
        </>
      ) : (
        <>
          <div 
            className="absolute rounded-full filter blur-[100px] top-[10%] right-[10%] w-[30%] h-[30%]"
            style={{ background: primaryColor, opacity: 0.5 }}
          />
          <div 
            className="absolute rounded-full filter blur-[100px] bottom-[10%] left-[10%] w-[30%] h-[30%]"
            style={{ background: secondaryColor, opacity: 0.5 }}
          />
        </>
      )}
      
      {/* 内容 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 