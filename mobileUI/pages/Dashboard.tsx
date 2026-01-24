import React from 'react';
import { Surface, Button, Badge } from '../components/ui/Theme';
import { Heart, MessageCircle, Share2, Play } from 'lucide-react';

const MOCK_FEED = [
  { id: 1, type: 'image', user: 'CyberPunk_99', url: 'https://picsum.photos/600/600?random=1', prompt: 'Neon city with rain, cyberpunk style, highly detailed, 8k', likes: 243 },
  { id: 2, type: 'video', user: 'AnimeFan', url: 'https://picsum.photos/600/340?random=2', prompt: 'Anime girl running in a field of sunflowers, studio ghibli style', likes: 156 },
  { id: 3, type: 'image', user: 'DesignPro', url: 'https://picsum.photos/600/800?random=3', prompt: 'Minimalist architectural render, concrete and glass, morning light', likes: 892 },
  { id: 4, type: 'image', user: 'RetroWave', url: 'https://picsum.photos/600/600?random=4', prompt: 'Synthwave sunset, retro car 80s style', likes: 45 },
];

export const Square: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
       <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light text-white mb-1">探索广场</h1>
          <p className="text-white/40">发现社区最新的 AI 创作灵感</p>
        </div>
        <div className="flex gap-2">
           <Button variant="ghost" size="sm">最新</Button>
           <Button variant="glass" size="sm">热门</Button>
        </div>
      </div>

      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {MOCK_FEED.map((item) => (
          <Surface key={item.id} className="break-inside-avoid overflow-hidden group">
            <div className="relative">
              <img 
                src={item.url} 
                alt={item.prompt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </div>
              )}
              <div className="absolute top-3 left-3">
                 <Badge variant="default">{item.type === 'image' ? 'Gemini 2.5' : 'Sora'}</Badge>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  <span className="text-xs font-medium text-white/80">{item.user}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/50">
                  <span>2h ago</span>
                </div>
              </div>
              
              <p className="text-sm text-white/70 line-clamp-2 mb-4 font-light">
                {item.prompt}
              </p>
              
              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <button className="flex items-center gap-1.5 text-white/40 hover:text-pink-400 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">{item.likes}</span>
                </button>
                <div className="flex gap-4">
                  <button className="text-white/40 hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button className="text-white/40 hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
};
