import { useState } from 'react';
import { motion } from 'framer-motion';
import { MusicalNoteIcon, MicrophoneIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function ApiIntegration() {
  const [activeTab, setActiveTab] = useState('music-generator');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMusic, setGeneratedMusic] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('cinematic');
  const [duration, setDuration] = useState(30);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // 模拟API调用
    setTimeout(() => {
      setGeneratedMusic({
        url: 'https://example.com/sample-music.mp3',
        title: `AI生成的${style}音乐`,
        duration: `${duration}秒`
      });
      setIsGenerating(false);
    }, 3000);
    
    // 实际API调用应该类似于:
    /*
    try {
      const response = await fetch('/api/music-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, style, duration }),
      });
      
      if (!response.ok) {
        throw new Error('生成失败');
      }
      
      const data = await response.json();
      setGeneratedMusic(data);
    } catch (error) {
      console.error('生成音乐时出错:', error);
      alert('生成音乐时出错，请重试');
    } finally {
      setIsGenerating(false);
    }
    */
  };
  
  return (
    <section id="api-integration" className="section bg-gradient-to-b from-dark-light to-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            在线体验
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            无需下载软件，直接在浏览器中体验AI音乐创作的魔力
          </motion.p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-dark-lighter rounded-full p-1">
              <button 
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'music-generator' ? 'bg-primary text-white' : 'text-light/70 hover:text-white'}`}
                onClick={() => setActiveTab('music-generator')}
              >
                <MusicalNoteIcon className="w-5 h-5 inline-block mr-2" />
                音乐生成
              </button>
              <button 
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'voice-separator' ? 'bg-primary text-white' : 'text-light/70 hover:text-white'}`}
                onClick={() => setActiveTab('voice-separator')}
              >
                <MicrophoneIcon className="w-5 h-5 inline-block mr-2" />
                人声分离
              </button>
              <button 
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'chord-generator' ? 'bg-primary text-white' : 'text-light/70 hover:text-white'}`}
                onClick={() => setActiveTab('chord-generator')}
              >
                <ChartBarIcon className="w-5 h-5 inline-block mr-2" />
                和弦生成
              </button>
            </div>
          </div>
          
          <div className="card p-8">
            {activeTab === 'music-generator' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">AI音乐生成</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label className="block text-light/80 mb-2">描述你想要的音乐</label>
                      <textarea 
                        className="w-full bg-dark-lighter border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        rows="4"
                        placeholder="例如：一段轻快的钢琴曲，带有一些弦乐元素，适合作为电影的背景音乐..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-light/80 mb-2">音乐风格</label>
                        <select 
                          className="w-full bg-dark-lighter border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                          value={style}
                          onChange={(e) => setStyle(e.target.value)}
                        >
                          <option value="cinematic">电影配乐</option>
                          <option value="electronic">电子音乐</option>
                          <option value="pop">流行音乐</option>
                          <option value="classical">古典音乐</option>
                          <option value="jazz">爵士乐</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-light/80 mb-2">时长（秒）</label>
                        <div className="flex items-center">
                          <input 
                            type="range" 
                            min="15" 
                            max="60" 
                            className="w-full h-2 bg-dark-lighter rounded-lg appearance-none cursor-pointer"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                          />
                          <span className="ml-3 text-light/80 w-10">{duration}秒</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          生成中...
                        </>
                      ) : '生成音乐'}
                    </button>
                  </form>
                </div>
                
                <div className="flex items-center justify-center">
                  {generatedMusic ? (
                    <div className="w-full">
                      <h3 className="text-xl font-semibold mb-6">生成结果</h3>
                      <div className="bg-dark-lighter rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-medium">{generatedMusic.title}</h4>
                            <p className="text-sm text-light/50">{generatedMusic.duration}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </button>
                            <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        <div className="w-full bg-dark rounded-lg overflow-hidden">
                          <audio controls className="w-full">
                            <source src={generatedMusic.url} type="audio/mpeg" />
                            您的浏览器不支持音频元素。
                          </audio>
                        </div>
                        
                        <div className="mt-4 flex justify-between">
                          <div className="audio-visualizer flex items-end space-x-1">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                          </div>
                          
                          <button className="text-sm text-light/70 hover:text-light transition-colors">
                            查看更多选项
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-light/50">
                      <MusicalNoteIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p>填写表单并点击"生成音乐"按钮<br />来创建你的第一个AI音乐作品</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'voice-separator' && (
              <div className="text-center py-12">
                <MicrophoneIcon className="w-16 h-16 mx-auto mb-4 text-primary/50" />
                <h3 className="text-xl font-semibold mb-4">人声分离功能</h3>
                <p className="text-light/70 max-w-2xl mx-auto mb-8">
                  上传一首歌曲，我们的AI将自动分离人声和伴奏，让你获得独立的音轨
                </p>
                <button className="btn btn-primary">
                  上传音乐文件
                </button>
              </div>
            )}
            
            {activeTab === 'chord-generator' && (
              <div className="text-center py-12">
                <ChartBarIcon className="w-16 h-16 mx-auto mb-4 text-primary/50" />
                <h3 className="text-xl font-semibold mb-4">和弦进行生成</h3>
                <p className="text-light/70 max-w-2xl mx-auto mb-8">
                  选择调性和风格，AI将为你生成独特的和弦进行，激发你的创作灵感
                </p>
                <button className="btn btn-primary">
                  开始生成和弦
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 