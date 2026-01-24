import React from 'react';
import { Surface, Badge, SectionTitle, Button } from '../components/ui/Theme';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { 
  Users, CreditCard, Image as ImageIcon, Video, Activity, AlertCircle, 
  DollarSign, ChevronRight, Gift, Megaphone, Terminal, FileCode, Cpu
} from 'lucide-react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// --- Dashboard Component ---

const DATA_GENERATIONS = [
  { name: 'Mon', image: 400, video: 240 },
  { name: 'Tue', image: 300, video: 139 },
  { name: 'Wed', image: 200, video: 980 },
  { name: 'Thu', image: 278, video: 390 },
  { name: 'Fri', image: 189, video: 480 },
  { name: 'Sat', image: 239, video: 380 },
  { name: 'Sun', image: 349, video: 430 },
];

const StatCard: React.FC<{ title: string; value: string; trend: string; icon: React.ComponentType<any>; color: string }> = ({ title, value, trend, icon: Icon, color }) => (
  <Surface className="p-4 flex flex-col justify-between h-32 relative overflow-hidden">
    <div className="flex justify-between items-start z-10">
      <div className={`p-2 rounded-lg ${color} bg-opacity-20`}>
        <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
      </div>
      <span className="text-emerald-400 text-xs font-medium bg-emerald-400/10 px-1.5 py-0.5 rounded">{trend}</span>
    </div>
    <div className="z-10">
      <h3 className="text-2xl font-bold text-white">{value}</h3>
      <p className="text-xs text-white/50">{title}</p>
    </div>
    <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${color} opacity-10 blur-xl`}></div>
  </Surface>
);

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">控制台概览</h2>
        <span className="text-xs text-white/40">Last updated: Just now</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="总用户" value="12.3k" trend="+12%" icon={Users} color="bg-blue-500" />
        <StatCard title="今日生成" value="8,234" trend="+5%" icon={Activity} color="bg-purple-500" />
        <StatCard title="总收入" value="$42k" trend="+18%" icon={CreditCard} color="bg-emerald-500" />
        <StatCard title="Tokens" value="1.2M" trend="-2%" icon={AlertCircle} color="bg-orange-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Surface className="p-5">
           <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-medium text-white/80">生成趋势</h3>
              <Badge variant="outline">7 Days</Badge>
           </div>
           <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA_GENERATIONS} barSize={20}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff30" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: '#ffffff05'}}
                  contentStyle={{ backgroundColor: '#0f1117', borderColor: '#ffffff10', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="image" fill="#38bdf8" radius={[4, 4, 0, 0]} stackId="a" />
                <Bar dataKey="video" fill="#8b5cf6" radius={[4, 4, 0, 0]} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Surface>
        
        {/* Quick Access Menu for Mobile */}
        <div className="grid grid-cols-2 gap-3">
           {[
             { label: '用户管理', path: '/admin/users', icon: Users, color: 'text-blue-400' },
             { label: '模型配置', path: '/admin/models', icon: Cpu, color: 'text-purple-400' },
             { label: '定价策略', path: '/admin/pricing', icon: DollarSign, color: 'text-emerald-400' },
             { label: '系统公告', path: '/admin/announcement', icon: Megaphone, color: 'text-pink-400' },
           ].map((item, i) => (
             <Surface key={i} className="p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/5 transition-colors">
                <item.icon className={`w-6 h-6 ${item.color}`} />
                <span className="text-xs text-white/70">{item.label}</span>
             </Surface>
           ))}
        </div>
      </div>
    </div>
  );
};

// --- Generic List Page Placeholder ---
const AdminListPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <SectionTitle title={title} />
      <Button size="sm">新建 +</Button>
    </div>
    <Surface className="min-h-[400px] flex items-center justify-center border-dashed border-white/10 bg-transparent">
       <div className="text-center text-white/30">
          <p>{title} 模块开发中</p>
          <p className="text-xs mt-1">Mock Data Display</p>
       </div>
    </Surface>
  </div>
);

// --- Admin Router ---
export const AdminDashboard: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/users" element={<AdminListPage title="用户管理" />} />
      <Route path="/generations" element={<AdminListPage title="生成记录" />} />
      <Route path="/image-channels" element={<AdminListPage title="图像渠道配置" />} />
      <Route path="/video-channels" element={<AdminListPage title="视频渠道配置" />} />
      <Route path="/models" element={<AdminListPage title="模型管理" />} />
      <Route path="/pricing" element={<AdminListPage title="定价管理" />} />
      <Route path="/redemption" element={<AdminListPage title="兑换码管理" />} />
      <Route path="/invites" element={<AdminListPage title="邀请码管理" />} />
      <Route path="/announcement" element={<AdminListPage title="系统公告" />} />
      <Route path="/site" element={<AdminListPage title="站点设置" />} />
      <Route path="/stats" element={<AdminListPage title="数据统计" />} />
      <Route path="/tokens" element={<AdminListPage title="API Token 管理" />} />
    </Routes>
  );
};
