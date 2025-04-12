import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SonicAI - AI驱动的音乐创作平台</title>
        <meta name="description" content="使用人工智能技术，让音乐创作变得简单、高效、有趣。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sonicai.com/" />
        <meta property="og:title" content="SonicAI - AI驱动的音乐创作平台" />
        <meta property="og:description" content="使用人工智能技术，让音乐创作变得简单、高效、有趣。" />
        <meta property="og:image" content="https://sonicai.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sonicai.com/" />
        <meta property="twitter:title" content="SonicAI - AI驱动的音乐创作平台" />
        <meta property="twitter:description" content="使用人工智能技术，让音乐创作变得简单、高效、有趣。" />
        <meta property="twitter:image" content="https://sonicai.com/og-image.jpg" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      
      {/* 全局装饰元素 */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-30">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-primary/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-secondary/5 rounded-full filter blur-[120px]"></div>
      </div>
      
      {/* 音符装饰 - 随机位置浮动 */}
      <motion.div 
        className="fixed text-primary/10 w-16 h-16 pointer-events-none z-[-1]"
        initial={{ x: '10vw', y: '30vh' }}
        animate={{ 
          x: ['10vw', '15vw', '10vw'],
          y: ['30vh', '35vh', '30vh'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 17V3h9v4h-5v10c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.73 0 1.41.21 2 .56z"/>
        </svg>
      </motion.div>
      
      <motion.div 
        className="fixed text-secondary/10 w-20 h-20 pointer-events-none z-[-1]"
        initial={{ x: '80vw', y: '60vh' }}
        animate={{ 
          x: ['80vw', '75vw', '80vw'],
          y: ['60vh', '65vh', '60vh'],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </motion.div>
      
      <motion.div 
        className="fixed text-accent/10 w-12 h-12 pointer-events-none z-[-1]"
        initial={{ x: '30vw', y: '80vh' }}
        animate={{ 
          x: ['30vw', '35vw', '30vw'],
          y: ['80vh', '75vh', '80vh'],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      </motion.div>
    </>
  );
} 