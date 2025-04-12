import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentLang, setCurrentLang] = useState('zh');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setCurrentLang(currentLang === 'zh' ? 'en' : 'zh');
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-dark/95 backdrop-blur-md' : 'py-6 bg-dark/80'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">SonicAI</span>
          </Link>
        </div>
        
        <nav className={`fixed md:relative top-0 ${isMenuOpen ? 'right-0' : '-right-full'} md:right-0 h-screen md:h-auto w-3/4 md:w-auto bg-dark-light md:bg-transparent transition-all duration-300 md:transition-none z-50 md:z-auto flex flex-col md:flex-row items-start md:items-center p-8 md:p-0`}>
          <button 
            className="md:hidden absolute top-4 right-4 text-white"
            onClick={toggleMenu}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 mt-12 md:mt-0">
            <li><Link href="#hero" className="text-white hover:text-primary transition-colors">{currentLang === 'zh' ? '首页' : 'Home'}</Link></li>
            <li><Link href="#features" className="text-white hover:text-primary transition-colors">{currentLang === 'zh' ? '功能' : 'Features'}</Link></li>
            <li><Link href="#how-it-works" className="text-white hover:text-primary transition-colors">{currentLang === 'zh' ? '工作原理' : 'How It Works'}</Link></li>
            <li><Link href="#pricing" className="text-white hover:text-primary transition-colors">{currentLang === 'zh' ? '价格' : 'Pricing'}</Link></li>
            <li><Link href="#testimonials" className="text-white hover:text-primary transition-colors">{currentLang === 'zh' ? '用户评价' : 'Testimonials'}</Link></li>
            <li><Link href="#faq" className="text-white hover:text-primary transition-colors">{currentLang === 'zh' ? '常见问题' : 'FAQ'}</Link></li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-dark-lighter transition-colors"
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5 text-white" />
            ) : (
              <MoonIcon className="w-5 h-5 text-white" />
            )}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full border border-white/20 text-sm font-medium hover:bg-dark-lighter transition-colors"
          >
            {currentLang === 'zh' ? 'EN' : '中文'}
          </button>
          
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
          
          <Link href="#api-integration" className="hidden md:block btn btn-primary">
            {currentLang === 'zh' ? '立即体验' : 'Try Now'}
          </Link>
        </div>
      </div>
    </header>
  );
} 