import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "描述你的想法",
    description: "使用自然语言描述你想要的音乐风格、情绪、结构或参考作品",
    color: "from-primary to-primary-light",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "AI生成音乐",
    description: "我们的AI模型会分析你的描述，并生成符合要求的高质量音乐作品",
    color: "from-secondary to-secondary-light",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "编辑和调整",
    description: "根据需要调整生成的音乐，改变节奏、和声或添加新的元素",
    color: "from-accent to-accent-light",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "导出和分享",
    description: "将完成的作品导出为各种格式，或直接分享到社交媒体和音乐平台",
    color: "from-primary to-secondary",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            简单易用
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="gradient-text">四步</span>创作完美音乐
          </motion.h2>
          
          <motion.p 
            className="text-xl text-light/70 max-w-3xl mx-auto"
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
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br opacity-10"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': step.color.split(' ')[0].replace('from-', ''),
                  '--tw-gradient-to': step.color.split(' ')[1].replace('to-', '')
                }}
              ></div>
              
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${step.color}`}>
                  {step.icon}
                </div>
                <span className={`ml-4 text-5xl font-bold bg-gradient-to-r ${step.color} text-transparent bg-clip-text opacity-50`}>
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-light/70">{step.description}</p>
              
              {/* 连接线 - 只在非移动设备和非最后一项显示 */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              )}
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
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 glass-effect">
            <div className="bg-dark-lighter/50 w-full h-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/30 transition-colors group">
                  <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
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