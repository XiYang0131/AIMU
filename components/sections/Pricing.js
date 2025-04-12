import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "免费版",
      price: isAnnual ? "0" : "0",
      description: "适合初次体验AI音乐创作的用户",
      features: [
        "每月生成5首音乐",
        "基础音乐风格",
        "最长30秒音乐",
        "标准音质导出",
        "社区支持"
      ],
      cta: "免费开始",
      highlighted: false,
      gradient: "from-gray-800/50 to-gray-900/50"
    },
    {
      name: "专业版",
      price: isAnnual ? "99" : "12",
      period: isAnnual ? "/年" : "/月",
      description: "适合专业音乐创作者和内容制作者",
      features: [
        "每月生成50首音乐",
        "所有音乐风格",
        "最长3分钟音乐",
        "高品质音频导出",
        "优先客户支持",
        "无水印导出",
        "批量生成功能"
      ],
      cta: "选择专业版",
      highlighted: true,
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      name: "企业版",
      price: isAnnual ? "299" : "39",
      period: isAnnual ? "/年" : "/月",
      description: "适合工作室和企业用户",
      features: [
        "无限音乐生成",
        "所有高级功能",
        "最长10分钟音乐",
        "最高品质音频导出",
        "专属客户经理",
        "API访问权限",
        "商业授权"
      ],
      cta: "联系销售",
      highlighted: false,
      gradient: "from-accent/20 to-accent-dark/20"
    }
  ];
  
  return (
    <section id="pricing" className="section relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            灵活定价
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            选择<span className="gradient-text">适合您</span>的方案
          </motion.h2>
          
          <motion.p 
            className="text-xl text-light/70 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            我们提供灵活的价格方案，满足从个人创作者到专业工作室的各种需求
          </motion.p>
          
          <motion.div 
            className="inline-flex items-center p-1 mb-10 rounded-full bg-dark-lighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-primary text-white shadow-glow' : 'text-light/70'}`}
              onClick={() => setIsAnnual(true)}
            >
              年付
              {isAnnual && <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">省20%</span>}
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-primary text-white shadow-glow' : 'text-light/70'}`}
              onClick={() => setIsAnnual(false)}
            >
              月付
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`card p-8 bg-gradient-to-br ${plan.gradient} border-none ${plan.highlighted ? 'shadow-glow-lg scale-105 z-10' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-glow">
                  最受欢迎
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥{plan.price}</span>
                {plan.period && <span className="text-light/70">{plan.period}</span>}
              </div>
              <p className="text-light/70 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-primary' : 'text-green-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all ${
                  plan.highlighted 
                    ? 'bg-primary hover:bg-primary-dark text-white shadow-glow hover:shadow-glow-lg' 
                    : 'bg-dark-lighter hover:bg-dark text-white hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-10 backdrop-blur-sm border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">需要定制方案？</h3>
          <p className="text-light/70 mb-8">
            如果您有特殊需求或需要为团队定制方案，请联系我们的销售团队，我们将为您提供最适合的解决方案。
          </p>
          <button className="btn btn-outline">
            联系销售团队
          </button>
        </motion.div>
      </div>
    </section>
  );
} 