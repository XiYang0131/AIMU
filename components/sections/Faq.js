import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "SonicAI生成的音乐我可以商用吗？",
    answer: "是的，根据您选择的订阅计划，SonicAI生成的音乐可以用于商业用途。免费版生成的音乐仅限个人使用，专业版可用于个人和商业项目，企业版则提供完整的商业授权，包括大规模发行权。详细信息请查看我们的使用条款。"
  },
  {
    question: "我需要有音乐基础才能使用SonicAI吗？",
    answer: "不需要。SonicAI设计得非常直观，即使没有任何音乐背景的用户也能轻松使用。您只需描述您想要的音乐风格和情绪，AI就会为您生成符合要求的音乐。当然，如果您有音乐知识，也可以使用更专业的参数来精确控制生成结果。"
  },
  {
    question: "SonicAI支持哪些音乐风格？",
    answer: "SonicAI支持广泛的音乐风格，包括但不限于流行、摇滚、电子、古典、爵士、嘻哈、民谣、电影配乐等。我们的AI模型经过了大量不同风格音乐的训练，能够理解和生成几乎任何风格的音乐。"
  },
  {
    question: "生成的音乐质量如何？",
    answer: "SonicAI生成的音乐质量非常高，许多用户表示难以区分是AI生成还是人类创作的。我们使用最先进的AI技术，确保生成的音乐在旋律、和声、节奏和音色上都达到专业水准。高级订阅计划还支持更高质量的音频导出。"
  },
  {
    question: "我可以编辑AI生成的音乐吗？",
    answer: "当然可以。SonicAI生成的音乐可以导出为多种格式，包括MIDI和多轨音频，您可以将这些文件导入到您喜欢的音乐制作软件中进行进一步编辑和混音。我们也提供在线编辑工具，让您可以直接在浏览器中调整生成的音乐。"
  },
  {
    question: "SonicAI的人声分离功能准确度如何？",
    answer: "SonicAI的人声分离功能采用了最新的深度学习技术，能够以极高的准确度分离人声和伴奏。即使在复杂的混音中，也能清晰地提取出人声或特定乐器的声音。许多专业音频工程师都对我们的分离质量给予了高度评价。"
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section id="faq" className="section bg-dark-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            常见问题
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            关于SonicAI的一些常见问题解答，帮助您更好地了解我们的服务
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all ${
                  openIndex === index 
                    ? 'bg-dark-lighter shadow-lg' 
                    : 'bg-dark-light hover:bg-dark-lighter'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-2 text-light/70">
                  {faq.answer}
                </div>
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
          <p className="text-light/70 mb-6">
            还有其他问题？请联系我们的客户支持团队
          </p>
          <button className="btn btn-outline">
            联系支持
          </button>
        </motion.div>
      </div>
    </section>
  );
} 