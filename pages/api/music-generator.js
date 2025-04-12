export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '只支持POST请求' });
  }

  try {
    const { prompt, style, duration } = req.body;
    
    // 这里应该是实际的AI音乐生成逻辑
    // 为了演示，我们返回模拟数据
    
    // 模拟处理时间
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return res.status(200).json({
      url: 'https://example.com/sample-music.mp3',
      title: `AI生成的${style}音乐`,
      duration: `${duration}秒`
    });
  } catch (error) {
    console.error('生成音乐时出错:', error);
    return res.status(500).json({ message: '服务器错误，请稍后再试' });
  }
} 