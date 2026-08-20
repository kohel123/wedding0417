import React from 'react';
import { Sparkles, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Info Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-700 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <span className="text-white font-extrabold text-base tracking-tight">
                천안 웨딩박람회 공식 일정 안내센터
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-xl">
              천안·아산 지역 결혼을 앞둔 예비 신랑·신부님을 위한 실시간 웨딩박람회 무료초대권 배부 및 결혼준비 토탈 가이드 플랫폼입니다.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer text-xs"
            >
              <span>맨 위로 이동</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal & Notice */}
        <div className="space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-850">
            <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p>
              [안내 및 면책 공지] 본 사이트는 천안 웨딩박람회 일정 안내 및 제휴 광고 링크를 실시간으로 제공하며, 웨딩 상품에 대한 상담·계약 및 서비스 제공의 주체는 각 주최사 및 제휴 웨딩업체에 있습니다. 박람회 일정 및 사은품 내용은 주최 측의 사정에 따라 변동될 수 있습니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p>
              © 천안 웨딩박람회 일정 안내 & 무료초대권 센터. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#schedule" className="hover:underline">일정 안내</a>
              <a href="#benefits" className="hover:underline">방문 혜택</a>
              <a href="#roadmap" className="hover:underline">결혼준비 순서</a>
              <a href="#checklist" className="hover:underline">체크리스트</a>
              <a href="#calculator" className="hover:underline">예산 계산기</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
