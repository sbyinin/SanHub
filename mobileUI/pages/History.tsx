import React from 'react';
import { Surface, SectionTitle, Badge } from '../components/ui/Theme';
import { Clock, Download, MoreVertical } from 'lucide-react';

const MOCK_HISTORY = [
  { id: 1, type: 'image', prompt: 'Cyberpunk street vending machine', time: '10 mins ago', url: 'https://picsum.photos/200/200?random=10' },
  { id: 2, type: 'video', prompt: 'Cat playing piano in space', time: '1 hour ago', url: 'https://picsum.photos/200/200?random=11' },
  { id: 3, type: 'image', prompt: 'Abstract geometric shapes 3d render', time: '2 hours ago', url: 'https://picsum.photos/200/200?random=12' },
  { id: 4, type: 'video', prompt: 'Ocean waves crashing in slow motion', time: '1 day ago', url: 'https://picsum.photos/200/200?random=13' },
];

export const History: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <SectionTitle title="创作记录" subtitle="查看您过去生成的所有内容" />

      <div className="space-y-3">
        {MOCK_HISTORY.map((item) => (
          <Surface key={item.id} className="p-3 flex items-center gap-4 group hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/20 flex-shrink-0">
               <img src={item.url} className="w-full h-full object-cover" alt="" />
            </div>
            
            <div className="flex-1 min-w-0">
               <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline">{item.type.toUpperCase()}</Badge>
                  <span className="text-xs text-white/30 flex items-center gap-1">
                     <Clock className="w-3 h-3" /> {item.time}
                  </span>
               </div>
               <p className="text-sm text-white/80 truncate">{item.prompt}</p>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="p-2 hover:bg-white/10 rounded-full text-white/60">
                  <Download className="w-4 h-4" />
               </button>
               <button className="p-2 hover:bg-white/10 rounded-full text-white/60">
                  <MoreVertical className="w-4 h-4" />
               </button>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
};
