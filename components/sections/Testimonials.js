import { motion } from 'framer-motion';
import Image from 'next/image';

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
  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            用户评价
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            看看其他创作者如何使用SonicAI提升他们的音乐创作
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="card card-hover p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
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
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6">加入我们不断增长的创作者社区</h3>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            全球已有超过10,000名创作者使用SonicAI提升他们的音乐创作效率和质量。
            立即加入，成为AI音乐创作革命的一部分！
          </p>
          <button className="btn btn-primary">
            免费注册
          </button>
        </motion.div>
      </div>
    </section>
  );
} 