import { motion } from 'framer-motion';
import { 
  MusicalNoteIcon, 
  MicrophoneIcon, 
  CpuChipIcon, 
  CloudArrowUpIcon, 
  LightBulbIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: <MusicalNoteIcon className="w-8 h-8" />,
    title: "AI音乐生成",
    description: "通过简单的文本描述，生成完整的音乐作品，包括旋律、和声和节奏"
  },
  {
    icon: <MicrophoneIcon className="w-8 h-8" />,
    title: "人声分离",
    description: "将歌曲中的人声与伴奏分离，提取或移除音乐中的人声、乐器和其他音轨"
  },
  {
    icon: <CpuChipIcon className="w-8 h-8" />,
    title: "智能混音",
    description: "AI驱动的专业混音和母带处理，让你的音乐听起来更专业"
  },
  {
    icon: <CloudArrowUpIcon className="w-8 h-8" />,
    title: "云端处理",
    description: "所有处理都在云端完成，无需安装软件，随时随地创作音乐"
  },
  {
    icon: <LightBulbIcon className="w-8 h-8" />,
    title: "创意灵感",
    description: "智能和弦进行生成，帮助音乐创作者找到完美的和声和创作灵感"
  },
  {
    icon: <ClockIcon className="w-8 h-8" />,
    title: "效率提升",
    description: "将传统需要数小时甚至数天的工作缩短至几分钟，大幅提高创作效率"
  }
];

export default function Features() {
  return (
    <section id="features" className="section bg-dark-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            强大功能
          </motion.h2>
          <motion.p 
            className="section-subtitle"
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
              className="card card-hover p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-light/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 