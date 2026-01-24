import React from 'react';
import { Surface, SectionTitle, Button, Input } from '../components/ui/Theme';
import { User, Shield, CreditCard, Bell, LogOut } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <SectionTitle title="账号设置" subtitle="管理您的个人资料和偏好" />
      
      <div className="space-y-6">
        <Surface className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center text-xl font-bold text-white">
              SH
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">SanHub User</h3>
              <p className="text-white/40 text-sm">user@sanhub.ai</p>
            </div>
            <Button size="sm" variant="outline" className="ml-auto">编辑</Button>
          </div>
          
          <div className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="text-xs text-white/50 mb-1 block">用户名</label>
                   <Input defaultValue="SanHub User" />
                </div>
                <div>
                   <label className="text-xs text-white/50 mb-1 block">邮箱</label>
                   <Input defaultValue="user@sanhub.ai" disabled className="opacity-50" />
                </div>
             </div>
          </div>
        </Surface>

        <Surface className="overflow-hidden">
          {[
            { label: '账户安全', icon: Shield, desc: '密码修改, 2FA' },
            { label: '订阅计划', icon: CreditCard, desc: 'Pro Plan (剩余 20 天)' },
            { label: '通知设置', icon: Bell, desc: '邮件订阅, 推送通知' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="p-2 rounded-lg bg-white/5">
                <item.icon className="w-5 h-5 text-white/70" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white">{item.label}</h4>
                <p className="text-xs text-white/40">{item.desc}</p>
              </div>
              <div className="text-white/20">→</div>
            </div>
          ))}
           <div className="p-4 flex items-center gap-4 text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer">
              <div className="p-2 rounded-lg bg-red-500/10">
                <LogOut className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">退出登录</span>
           </div>
        </Surface>
      </div>
    </div>
  );
};
