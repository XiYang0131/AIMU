import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentLang, setCurrentLang] = useState('zh');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setCurrentLang(currentLang === 'zh' ? 'en' : 'zh');
  
  const navLinks = [
    { name: "功能", href: "#features" },
    { name: "工作原理", href: "#how-it-works" },
    { name: "定价", href: "#pricing" },
    { name: "API", href: "#api-integration" },
    { name: "常见问题", href: "#faq" }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-dark-lighter/80 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">SonicAI</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-light/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-light/80 hover:text-primary transition-colors">
              登录
            </Link>
            <Link 
              href="#" 
              className="btn btn-primary py-2 px-4"
            >
              免费注册
            </Link>
          </div>
          
          <button 
            className="md:hidden text-light/80 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-dark z-50 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex justify-end p-4">
              <button 
                className="text-light/80 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col items-center mt-10 space-y-6">
              {navLinks.map(link => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-xl text-light/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-6 mt-6 border-t border-white/10 w-full flex flex-col items-center space-y-4">
                <Link 
                  href="#" 
                  className="text-xl text-light/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  登录
                </Link>
                <Link 
                  href="#" 
                  className="btn btn-primary w-40 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  免费注册
                </Link>
              </div>
            </div>
            
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full filter blur-[100px] pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 