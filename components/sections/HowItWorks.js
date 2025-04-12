import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "描述你的想法",
    description: "使用自然语言描述你想要的音乐风格、情绪、结构或参考作品",
    color: "from-primary to-primary-light"
  },
  {
    number: "02",
    title: "AI生成音乐",
    description: "我们的AI模型会分析你的描述，并生成符合要求的高质量音乐作品",
    color: "from-secondary to-secondary-light"
  },
  {
    number: "03",
    title: "编辑和调整",
    description: "根据需要调整生成的音乐，改变节奏、和声或添加新的元素",
    color: "from-accent to-accent-light"
  },
  {
    number: "04",
    title: "导出和分享",
    description: "将完成的作品导出为各种格式，或直接分享到社交媒体和音乐平台",
    color: "from-primary to-secondary"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            工作原理
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SonicAI使用最先进的人工智能技术，让音乐创作过程变得简单直观
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="card card-hover p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br ${step.color} opacity-10`}></div>
              <span className={`text-6xl font-bold bg-gradient-to-r ${step.color} text-transparent bg-clip-text opacity-50`}>{step.number}</span>
              <h3 className="text-xl font-semibold my-4">{step.title}</h3>
              <p className="text-light/70">{step.description}</p>
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
          <h3 className="text-2xl font-semibold mb-6">观看演示视频</h3>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
            <div className="bg-dark-lighter w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/30 transition-colors">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-light/50">点击播放演示视频</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 