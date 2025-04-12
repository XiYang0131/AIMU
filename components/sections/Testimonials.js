import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    content: "SonicAI彻底改变了我的音乐创作流程。以前我需要花费数小时来寻找灵感和创作旋律，现在只需几分钟就能得到高质量的音乐素材。这是音乐创作的未来！",
    author: "张明",
    role: "独立音乐人",
    avatar: "/images/avatars/avatar-1.jpg"
  },
  {
    content: "作为一名视频创作者，我一直在寻找能够快速生成高质量背景音乐的工具。SonicAI不仅满足了我的需求，还超出了我的期望。现在我的视频配乐质量提升了一个档次。",
    author: "李华",
    role: "YouTube创作者",
    avatar: "/images/avatars/avatar-2.jpg"
  },
  {
    content: "我们工作室每天都需要处理大量的音频项目，SonicAI的批量处理功能为我们节省了大量时间。人声分离功能的准确度也是我见过的最好的。强烈推荐给所有音频专业人士。",
    author: "王芳",
    role: "音频工程师",
    avatar: "/images/avatars/avatar-3.jpg"
  },
  {
    content: "作为一个没有音乐背景的游戏开发者，SonicAI让我能够为我的游戏创建专业级别的配乐。界面简单直观，即使是音乐新手也能轻松上手。",
    author: "陈强",
    role: "独立游戏开发者",
    avatar: "/images/avatars/avatar-4.jpg"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="testimonials" className="section relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            用户反馈
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            创作者们的<span className="gradient-text">真实评价</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-light/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            看看其他创作者如何使用SonicAI提升他们的音乐创作
          </motion.p>
        </div>
        
        {/* 桌面版显示网格 */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="card card-hover p-8 bg-gradient-to-br from-dark-lighter/50 to-dark/50 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-primary/30">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-light/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-light/80 italic">"{testimonial.content}"</p>
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 移动设备显示轮播 */}
        <div className="md:hidden">
          <motion.div
            className="card p-8 bg-gradient-to-br from-dark-lighter/50 to-dark/50 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-primary/30">
                <Image 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                <p className="text-sm text-light/70">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            <p className="text-light/80 italic">"{testimonials[activeIndex].content}"</p>
            <div className="mt-6 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`查看第 ${index + 1} 条评价`}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="glass-effect p-10 rounded-2xl max-w-4xl mx-auto border border-white/5">
            <h3 className="text-2xl font-semibold mb-6">加入我们不断增长的创作者社区</h3>
            <p className="text-light/70 max-w-2xl mx-auto mb-8">
              全球已有超过10,000名创作者使用SonicAI提升他们的音乐创作效率和质量。
              立即加入，成为AI音乐创作革命的一部分！
            </p>
            <button className="btn btn-primary">
              免费注册
            </button>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">30天免费试用</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">无需信用卡</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">随时取消</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 