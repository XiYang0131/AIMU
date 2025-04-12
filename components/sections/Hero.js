import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* 动态背景 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 to-dark opacity-90"></div>
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full filter blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-secondary/20 rounded-full filter blur-[120px]"></div>
          <div className="absolute -bottom-[10%] left-[30%] w-[50%] h-[50%] bg-accent/10 rounded-full filter blur-[120px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-primary">
              AI驱动的音乐创作平台
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            探索<span className="gradient-text glow-text">AI音乐</span>的<br className="hidden md:block" />无限可能
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-light/80 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            发现、创作、分享 - 用人工智能重新定义音乐创作体验
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="#api-integration" className="btn btn-primary">
              立即体验
            </Link>
            <Link href="#how-it-works" className="btn btn-outline">
              了解更多
            </Link>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10万+</div>
                <div className="text-sm text-light/60 mt-1">创作者</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50万+</div>
                <div className="text-sm text-light/60 mt-1">音乐作品</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-light/60 mt-1">满意度</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* 浮动音符装饰 */}
      <div className="absolute top-1/4 left-10 animate-pulse">
        <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 17V3h9v4h-5v10c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.73 0 1.41.21 2 .56z"/>
        </svg>
      </div>
      <div className="absolute top-1/3 right-10 animate-pulse delay-300">
        <svg className="w-10 h-10 text-secondary/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </div>
    </section>
  );
} 