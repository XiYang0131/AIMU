import { motion } from 'framer-motion';
import { 
  MusicalNoteIcon, 
  MicrophoneIcon, 
  CpuChipIcon, 
  CloudArrowUpIcon, 
  LightBulbIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const features = [
  {
    icon: <MusicalNoteIcon className="w-8 h-8 text-primary" />,
    title: "AI音乐生成",
    description: "通过简单的文本描述，生成完整的音乐作品，包括旋律、和声和节奏",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: <MicrophoneIcon className="w-8 h-8 text-secondary" />,
    title: "人声分离",
    description: "将歌曲中的人声与伴奏分离，提取或移除音乐中的人声、乐器和其他音轨",
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    icon: <CpuChipIcon className="w-8 h-8 text-accent" />,
    title: "智能混音",
    description: "AI驱动的专业混音和母带处理，让你的音乐听起来更专业",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    icon: <CloudArrowUpIcon className="w-8 h-8 text-primary" />,
    title: "云端处理",
    description: "所有处理都在云端完成，无需安装软件，随时随地创作音乐",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: <LightBulbIcon className="w-8 h-8 text-secondary" />,
    title: "创意灵感",
    description: "智能和弦进行生成，帮助音乐创作者找到完美的和声和创作灵感",
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-accent" />,
    title: "效率提升",
    description: "将传统需要数小时甚至数天的工作缩短至几分钟，大幅提高创作效率",
    gradient: "from-accent/20 to-accent/5"
  }
];

export default function Features() {
  return (
    <section id="features" className="section relative overflow-hidden">
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
            强大功能
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            革命性的<span className="gradient-text">AI音乐工具</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-light/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            探索SonicAI提供的革命性AI音乐工具，让音乐创作变得前所未有的简单和高效
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`card card-hover p-8 bg-gradient-to-br ${feature.gradient} border-none`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-light/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="#api-integration" className="btn btn-primary">
            探索所有功能
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 