document.addEventListener('DOMContentLoaded', function() {
    // 标签切换功能
    const apiTabs = document.querySelectorAll('.api-tab');
    const apiContents = document.querySelectorAll('.api-content');
    
    apiTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有标签的active类
            apiTabs.forEach(t => t.classList.remove('active'));
            // 为当前点击的标签添加active类
            this.classList.add('active');
            
            // 隐藏所有内容
            apiContents.forEach(content => content.classList.remove('active'));
            
            // 显示对应的内容
            const toolId = this.getAttribute('data-tool');
            document.getElementById(toolId).classList.add('active');
        });
    });
    
    // 滑块值显示
    const durationSlider = document.getElementById('music-duration');
    const durationValue = document.getElementById('duration-value');
    
    if (durationSlider && durationValue) {
        durationSlider.addEventListener('input', function() {
            durationValue.textContent = this.value + '秒';
        });
    }
    
    const complexitySlider = document.getElementById('chord-complexity');
    const complexityValue = document.getElementById('complexity-value');
    
    if (complexitySlider && complexityValue) {
        complexitySlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            let text = '';
            
            switch(value) {
                case 1:
                    text = '简单';
                    break;
                case 2:
                    text = '较简单';
                    break;
                case 3:
                    text = '中等';
                    break;
                case 4:
                    text = '较复杂';
                    break;
                case 5:
                    text = '复杂';
                    break;
            }
            
            complexityValue.textContent = text;
        });
    }
    
    // 文件上传区域拖放效果
    const uploadArea = document.querySelector('.upload-area');
    
    if (uploadArea) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, preventDefaults, false);
        });
        
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, highlight, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, unhighlight, false);
        });
        
        function highlight() {
            uploadArea.classList.add('dragover');
        }
        
        function unhighlight() {
            uploadArea.classList.remove('dragover');
        }
        
        // 处理文件拖放
        uploadArea.addEventListener('drop', handleDrop, false);
        
        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            
            if (files.length > 0) {
                document.getElementById('audio-upload').files = files;
                
                // 显示文件名
                const fileName = files[0].name;
                const placeholder = uploadArea.querySelector('.upload-placeholder p');
                placeholder.textContent = fileName;
            }
        }
    }
    
    // AI音乐生成表单提交
    const musicGeneratorForm = document.getElementById('music-generator-form');
    
    if (musicGeneratorForm) {
        musicGeneratorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const prompt = document.getElementById('music-prompt').value;
            const style = document.getElementById('music-style').value;
            const duration = document.getElementById('music-duration').value;
            
            // 显示加载指示器
            const loadingIndicator = this.nextElementSibling.querySelector('.loading-indicator');
            const resultPlayer = this.nextElementSibling.querySelector('.result-player');
            
            loadingIndicator.classList.remove('hidden');
            resultPlayer.classList.add('hidden');
            
            // 调用API生成音乐
            generateMusic(prompt, style, duration)
                .then(audioUrl => {
                    // 隐藏加载指示器
                    loadingIndicator.classList.add('hidden');
                    
                    // 显示结果播放器
                    const audioElement = resultPlayer.querySelector('audio');
                    audioElement.src = audioUrl;
                    resultPlayer.classList.remove('hidden');
                    
                    // 设置下载按钮
                    const downloadButton = resultPlayer.querySelector('.download-button');
                    downloadButton.onclick = function() {
                        const a = document.createElement('a');
                        a.href = audioUrl;
                        a.download = 'generated-music.mp3';
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    };
                    
                    // 设置分享按钮
                    const shareButton = resultPlayer.querySelector('.share-button');
                    shareButton.onclick = function() {
                        if (navigator.share) {
                            navigator.share({
                                title: '我用AI生成的音乐',
                                text: '听听我用SonicAI生成的音乐！',
                                url: window.location.href
                            });
                        } else {
                            alert('您的浏览器不支持分享功能');
                        }
                    };
                })
                .catch(error => {
                    console.error('音乐生成失败:', error);
                    loadingIndicator.classList.add('hidden');
                    alert('音乐生成失败，请重试。');
                });
        });
    }
    
    // 人声分离表单提交
    const voiceSeparatorForm = document.getElementById('voice-separator-form');
    
    if (voiceSeparatorForm) {
        voiceSeparatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const audioFile = document.getElementById('audio-upload').files[0];
            if (!audioFile) {
                alert('请上传音频文件');
                return;
            }
            
            const options = [];
            document.querySelectorAll('#voice-separator-form input[type="checkbox"]:checked').forEach(checkbox => {
                options.push(checkbox.value);
            });
            
            if (options.length === 0) {
                alert('请至少选择一个分离选项');
                return;
            }
            
            // 显示加载指示器
            const loadingIndicator = this.nextElementSibling.querySelector('.loading-indicator');
            const resultTracks = this.nextElementSibling.querySelector('.result-tracks');
            
            loadingIndicator.classList.remove('hidden');
            resultTracks.classList.add('hidden');
            
            // 调用API分离音频
            separateAudio(audioFile, options)
                .then(tracks => {
                    // 隐藏加载指示器
                    loadingIndicator.classList.add('hidden');
                    
                    // 清空之前的结果
                    resultTracks.innerHTML = '';
                    
                    // 添加分离后的音轨
                    tracks.forEach(track => {
                        const trackItem = document.createElement('div');
                        trackItem.className = 'track-item';
                        
                        trackItem.innerHTML = `
                            <h5>${track.name}</h5>
                            <audio controls src="${track.url}"></audio>
                            <button class="download-button" data-url="${track.url}" data-name="${track.name}">
                                <i class="fas fa-download"></i> 下载
                            </button>
                        `;
                        
                        resultTracks.appendChild(trackItem);
                    });
                    
                    // 添加下载按钮事件
                    resultTracks.querySelectorAll('.download-button').forEach(button => {
                        button.addEventListener('click', function() {
                            const url = this.getAttribute('data-url');
                            const name = this.getAttribute('data-name');
                            
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `${name}.mp3`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                        });
                    });
                    
                    // 显示结果
                    resultTracks.classList.remove('hidden');
                })
                .catch(error => {
                    console.error('音频分离失败:', error);
                    loadingIndicator.classList.add('hidden');
                    alert('音频分离失败，请重试。');
                });
        });
    }
    
    // 和弦生成表单提交
    const chordGeneratorForm = document.getElementById('chord-generator-form');
    
    if (chordGeneratorForm) {
        chordGeneratorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const key = document.getElementById('chord-key').value;
            const style = document.getElementById('chord-style').value;
            const complexity = document.getElementById('chord-complexity').value;
            
            // 显示加载指示器
            const loadingIndicator = this.nextElementSibling.querySelector('.loading-indicator');
            const chordResult = this.nextElementSibling.querySelector('.chord-result');
            
            loadingIndicator.classList.remove('hidden');
            chordResult.classList.add('hidden');
            
            // 调用API生成和弦
            generateChords(key, style, complexity)
                .then(chords => {
                    // 隐藏加载指示器
                    loadingIndicator.classList.add('hidden');
                    
                    // 清空之前的结果
                    const chordProgression = chordResult.querySelector('.chord-progression');
                    chordProgression.innerHTML = '';
                    
                    // 添加和弦
                    chords.forEach(chord => {
                        const chordElement = document.createElement('div');
                        chordElement.className = 'chord';
                        chordElement.textContent = chord;
                        chordProgression.appendChild(chordElement);
                    });
                    
                    // 设置播放按钮事件
                    const playButton = chordResult.querySelector('.play-chords');
                    playButton.onclick = function() {
                        playChordProgression(chords);
                    };
                    
                    // 设置下载MIDI按钮事件
                    const downloadButton = chordResult.querySelector('.download-midi');
                    downloadButton.onclick = function() {
                        downloadMidi(chords, key, style);
                    };
                    
                    // 显示结果
                    chordResult.classList.remove('hidden');
                })
                .catch(error => {
                    console.error('和弦生成失败:', error);
                    loadingIndicator.classList.add('hidden');
                    alert('和弦生成失败，请重试。');
                });
        });
    }
    
    // API调用函数
    
    // 生成音乐
    async function generateMusic(prompt, style, duration) {
        // 这里是模拟API调用，实际项目中应替换为真实的API调用
        return new Promise((resolve, reject) => {
            // 模拟API延迟
            setTimeout(() => {
                // 模拟成功响应
                // 在实际项目中，这里应该是真实的API调用
                // 例如：fetch('/api/generate-music', { method: 'POST', body: JSON.stringify({ prompt, style, duration }) })
                
                // 返回一个示例音频URL
                // 在实际项目中，这应该是API返回的音频URL
                resolve('https://example.com/demo-music.mp3');
                
                // 如果需要模拟失败，可以使用：
                // reject(new Error('API调用失败'));
            }, 3000); // 模拟3秒延迟
        });
    }
    
    // 分离音频
    async function separateAudio(audioFile, options) {
        // 这里是模拟API调用，实际项目中应替换为真实的API调用
        return new Promise((resolve, reject) => {
            // 模拟API延迟
            setTimeout(() => {
                // 模拟成功响应
                // 在实际项目中，这里应该是真实的API调用
                // 例如：
                // const formData = new FormData();
                // formData.append('audio', audioFile);
                // formData.append('options', JSON.stringify(options));
                // fetch('/api/separate-audio', { method: 'POST', body: formData })
                
                // 返回示例分离音轨
                const tracks = [];
                
                if (options.includes('vocals')) {
                    tracks.push({
                        name: '人声',
                        url: 'https://example.com/vocals.mp3'
                    });
                }
                
                if (options.includes('instrumental')) {
                    tracks.push({
                        name: '伴奏',
                        url: 'https://example.com/instrumental.mp3'
                    });
                }
                
                if (options.includes('drums')) {
                    tracks.push({
                        name: '鼓点',
                        url: 'https://example.com/drums.mp3'
                    });
                }
                
                if (options.includes('bass')) {
                    tracks.push({
                        name: '贝斯',
                        url: 'https://example.com/bass.mp3'
                    });
                }
                
                resolve(tracks);
                
                // 如果需要模拟失败，可以使用：
                // reject(new Error('API调用失败'));
            }, 3000); // 模拟3秒延迟
        });
    }
    
    // 生成和弦
    async function generateChords(key, style, complexity) {
        // 这里是模拟API调用，实际项目中应替换为真实的API调用
        return new Promise((resolve, reject) => {
            // 模拟API延迟
            setTimeout(() => {
                // 模拟成功响应
                // 在实际项目中，这里应该是真实的API调用
                // 例如：fetch('/api/generate-chords', { method: 'POST', body: JSON.stringify({ key, style, complexity }) })
                
                // 返回示例和弦进行
                let chords = [];
                
                if (key === 'C') {
                    if (style === 'pop') {
                        chords = ['C', 'G', 'Am', 'F', 'C', 'G', 'F'];
                    } else if (style === 'jazz') {
                        chords = ['Cmaj7', 'Dm7', 'G7', 'Cmaj7', 'Am7', 'D7', 'G7'];
                    } else {
                        chords = ['C', 'Em', 'F', 'G', 'C', 'F', 'G'];
                    }
                } else if (key === 'G') {
                    chords = ['G', 'D', 'Em', 'C', 'G', 'D', 'C'];
                } else if (key === 'Am') {
                    chords = ['Am', 'F', 'C', 'G', 'Am', 'F', 'E'];
                } else {
                    // 默认和弦进行
                    chords = ['D', 'A', 'Bm', 'G', 'D', 'A', 'G'];
                }
                
                // 根据复杂度调整和弦
                if (complexity >= 4) {
                    // 添加一些更复杂的和弦
                    chords = chords.map(chord => {
                        if (chord.length === 1 || chord.length === 2 && chord[1] === 'm') {
                            return chord + '7';
                        }
                        return chord;
                    });
                }
                
                resolve(chords);
                
                // 如果需要模拟失败，可以使用：
                // reject(new Error('API调用失败'));
            }, 2000); // 模拟2秒延迟
        });
    }
    
    // 播放和弦进行
    function playChordProgression(chords) {
        alert('播放和弦进行: ' + chords.join(' - '));
        // 在实际项目中，这里应该使用Web Audio API来播放和弦
        // 这需要更复杂的实现，超出了这个示例的范围
    }
    
    // 下载MIDI文件
    function downloadMidi(chords, key, style) {
        alert('下载MIDI文件: ' + chords.join(' - '));
        // 在实际项目中，这里应该生成MIDI文件并提供下载
        // 这需要使用专门的MIDI生成库，超出了这个示例的范围
    }
}); 