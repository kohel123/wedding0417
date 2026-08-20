import React, { useState, useEffect } from 'react';
import { Ticket, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { AdItem } from '../types';

interface FloatingCTAProps {
  onScheduleClick: () => void;
  featuredExpo?: AdItem;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onScheduleClick, featuredExpo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const targetUrl = featuredExpo?.target_url || featuredExpo?.ad_url || '#schedule';

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
      <div className="bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center justify-between gap-3">
        <div className="min-w-0 pl-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold text-blue-300">사전예약 무료입장</span>
          </div>
          <p className="text-xs font-black text-white truncate">
            {featuredExpo?.gather_name || '천안 웨딩박람회 무료초대권'}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {featuredExpo ? (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs px-3.5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1 active:scale-95"
            >
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              <span>초대권 받기</span>
            </a>
          ) : (
            <button
              onClick={onScheduleClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs px-3.5 py-2.5 rounded-xl shadow-md flex items-center gap-1"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>일정 보기</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
