import { useState } from 'react';
import { motion } from 'framer-motion';
import { MusicalNoteIcon, MicrophoneIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function ApiIntegration() {
  const [activeTab, setActiveTab] = useState('music');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedMusic, setGeneratedMusic] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('cinematic');
  const [duration, setDuration] = useState(30);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    setIsGenerated(false);
    
    // 模拟API调用
    setTimeout(() => {
      setGeneratedMusic({
        url: 'https://example.com/sample-music.mp3',
        title: `AI生成的${style}音乐`,
        duration: `${duration}秒`
      });
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000);
  };
  
  const tabs = [
    { id: 'music', label: '音乐生成' },
    { id: 'vocal', label: '人声分离' },
    { id: 'chord', label: '和弦生成' }
  ];
  
  return (
    <section id="api-integration" className="section relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            在线体验
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            立即体验<span className="gradient-text">AI音乐工具</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-light/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            无需注册，直接体验SonicAI强大的音乐生成和处理功能
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto bg-dark-lighter/50 rounded-2xl overflow-hidden backdrop-blur-md border border-white/5 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="border-b border-white/10">
            <div className="flex">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`px-6 py-4 font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-light/60 hover:text-light/80'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            {activeTab === 'music' && (
              <div>
                <div className="mb-6">
                  <label className="block text-light/70 mb-2">描述你想要的音乐</label>
                  <textarea 
                    className="w-full bg-dark rounded-xl border border-white/10 p-4 text-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    rows="4"
                    placeholder="例如：一首轻快的流行歌曲，带有钢琴和吉他，适合夏日心情..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-light/70 mb-2">音乐风格</label>
                    <select className="w-full bg-dark rounded-xl border border-white/10 p-3 text-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                      <option>流行</option>
                      <option>电子</option>
                      <option>摇滚</option>
                      <option>古典</option>
                      <option>爵士</option>
                      <option>嘻哈</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-light/70 mb-2">情绪</label>
                    <select className="w-full bg-dark rounded-xl border border-white/10 p-3 text-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                      <option>欢快</option>
                      <option>忧伤</option>
                      <option>激励</option>
                      <option>放松</option>
                      <option>紧张</option>
                      <option>浪漫</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-light/70 mb-2">时长（秒）</label>
                    <input 
                      type="number" 
                      className="w-full bg-dark rounded-xl border border-white/10 p-3 text-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      defaultValue="30"
                      min="10"
                      max="180"
                    />
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button 
                    className={`btn ${isGenerating ? 'bg-primary/70' : 'btn-primary'} flex items-center`}
                    onClick={handleGenerate}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
                        生成中...
                      </>
                    ) : (
                      <>
                        {isGenerated ? (
                          <>
                            <CheckCircleIcon className="w-5 h-5 mr-2" />
                            重新生成
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 17V3h9v4h-5v10c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.73 0 1.41.21 2 .56z"/>
                            </svg>
                            生成音乐
                          </>
                        )}
                      </>
                    )}
                  </button>
                </div>
                
                {isGenerated && (
                  <motion.div 
                    className="mt-8 p-6 bg-dark-lighter/30 rounded-xl border border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-center">生成结果</h3>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-full max-w-md h-16 bg-dark-lighter rounded-lg overflow-hidden flex items-center px-4">
                        <div className="flex-1">
                          <div className="flex space-x-1 h-8 items-end">
                            {[...Array(40)].map((_, i) => (
                              <div 
                                key={i} 
                                className="w-1 bg-gradient-to-t from-primary to-secondary rounded-full"
                                style={{ 
                                  height: `${Math.max(15, Math.floor(Math.random() * 100))}%`,
                                  animationDelay: `${i * 0.05}s`
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <button className="ml-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                      <button className="btn btn-outline flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        下载
                      </button>
                      <button className="btn btn-outline flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        编辑
                      </button>
                      <button className="btn btn-outline flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        分享
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
            
            {activeTab === 'vocal' && (
              <div className="text-center py-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MicrophoneIcon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">人声分离功能</h3>
                  <p className="text-light/70 max-w-2xl mx-auto">
                    上传一首歌曲，AI将自动分离人声和伴奏，让你获得干净的人声或纯音乐伴奏
                  </p>
                </div>
                
                <button className="btn btn-primary">
                  上传音乐文件
                </button>
              </div>
            )}
            
            {activeTab === 'chord' && (
              <div className="text-center py-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MusicalNoteIcon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">和弦进行生成</h3>
                  <p className="text-light/70 max-w-2xl mx-auto">
                    选择音乐风格和情绪，AI将为你生成完美的和弦进行，帮助你快速开始创作
                  </p>
                </div>
                
                <button className="btn btn-primary">
                  开始生成和弦
                </button>
              </div>
            )}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="glass-effect p-10 rounded-2xl max-w-4xl mx-auto border border-white/5">
            <h3 className="text-2xl font-semibold mb-6">想要更多高级功能？</h3>
            <p className="text-light/70 max-w-2xl mx-auto mb-8">
              注册账户后，你将获得更多高级功能，包括更长的音乐生成时间、更多音乐风格选择、
              批量处理功能以及API访问权限。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn btn-primary">
                注册账户
              </button>
              <button className="btn btn-outline">
                查看API文档
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 