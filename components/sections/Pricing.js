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
      highlighted: false
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
      highlighted: true
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
      highlighted: false
    }
  ];
  
  return (
    <section id="pricing" className="section bg-dark-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            价格方案
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            选择最适合你需求的方案，开启AI音乐创作之旅
          </motion.p>
          
          <div className="flex justify-center mb-12">
            <div className="bg-dark-lighter rounded-full p-1 inline-flex">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-primary text-white' : 'text-light/70'}`}
                onClick={() => setIsAnnual(true)}
              >
                年付
                {isAnnual && <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">省20%</span>}
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-primary text-white' : 'text-light/70'}`}
                onClick={() => setIsAnnual(false)}
              >
                月付
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`card p-8 ${plan.highlighted ? 'border-primary/30 relative overflow-hidden' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-0 rotate-45 origin-bottom-left">
                  推荐
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
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.highlighted 
                    ? 'bg-primary hover:bg-primary-dark text-white' 
                    : 'bg-dark-lighter hover:bg-dark text-white'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center max-w-4xl mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-10"
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