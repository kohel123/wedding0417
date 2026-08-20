import React, { useState } from 'react';
import { Sparkles, Calendar, Gift, CheckSquare, Calculator, HelpCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (id: string) => void;
  cheonanCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onScrollTo, cheonanCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '박람회 일정', id: 'schedule', icon: Calendar, badge: cheonanCount > 0 ? `${cheonanCount}건` : undefined },
    { label: '방문 혜택', id: 'benefits', icon: Gift },
    { label: '결혼준비 순서', id: 'roadmap', icon: ArrowRight },
    { label: '준비 체크리스트', id: 'checklist', icon: CheckSquare },
    { label: '예산 계산기', id: 'calculator', icon: Calculator },
    { label: '관람 가이드·FAQ', id: 'guide', icon: HelpCircle },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
      {/* Top micro banner */}
      <div className="bg-blue-950 text-blue-200 text-xs py-1.5 px-4 text-center border-b border-blue-900/40 flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
        <span className="truncate">천안·아산 지역 공인 웨딩박람회 실시간 공식 무료초대권 배부처</span>
        <span className="hidden sm:inline-block text-blue-400 font-semibold">• 사전신청 시 100% 무료입장</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('schedule')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-white font-black shadow-inner shadow-blue-400/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  천안<span className="text-blue-400">웨딩박람회</span>
                </span>
                <span className="bg-blue-600/30 text-blue-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-500/30">
                  실시간
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-tight hidden sm:block">
                일정 안내 & 공식 무료초대권 신청
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleNavClick('schedule')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>무료초대권 받기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1.5 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg text-left transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
