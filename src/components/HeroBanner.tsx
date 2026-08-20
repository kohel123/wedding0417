import React from 'react';
import { Calendar, Gift, Sparkles, CheckCircle2, Shield, ArrowDown, Users, Star } from 'lucide-react';

interface HeroBannerProps {
  onExploreClick: () => void;
  onChecklistClick: () => void;
  totalExposCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreClick, onChecklistClick, totalExposCount }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-slate-700/50">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-indigo-500/10 blur-2xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Main Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/60 rounded-full px-3.5 py-1.5 text-xs text-blue-200 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">천안·아산 공식 제휴 웨딩페어 실시간 연동</span>
              <span className="text-blue-400 font-bold">| 사전예약 무료</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] text-white">
                천안 웨딩박람회 일정 안내<br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200 bg-clip-text text-transparent">
                  VIP 무료초대권 즉시 신청
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                복잡한 결혼준비, 천안 최고 인기 웨딩홀부터 스드메·혼수·예물까지 한자리에서 비교하세요. 
                사전신청 한 번으로 <strong className="text-white font-semibold">입장료 전액 면제</strong> 및 <strong className="text-amber-300 font-semibold">현장 독점 할인 혜택</strong>을 받으실 수 있습니다.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-2.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-200 font-medium">입장료 100% 무료</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-2.5 flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">방문 전원 사은품 증정</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-slate-800/80 border border-slate-700/80 rounded-lg p-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-slate-200 font-medium">스드메 최대할인 혜택</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onExploreClick}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-xl shadow-blue-900/40 hover:shadow-blue-700/50 transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>천안 박람회 일정 확인 & 신청</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onChecklistClick}
                className="bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>결혼준비 체크리스트 보기</span>
              </button>
            </div>

            {/* Trust Stats */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-400" />
                <span>천안 예비부부 월 1,500+ 쌍 신청</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>예비신부 만족도 98.6%</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>정식 등록 웨딩기업</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Summary Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-slate-800 to-slate-850 rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-300 ml-1">천안 웨딩박람회 사전신청 혜택</span>
                </div>
                <span className="bg-red-500/20 text-red-300 text-[11px] font-bold px-2 py-0.5 rounded border border-red-500/30 animate-pulse">
                  선착순 마감주의
                </span>
              </div>

              {/* Benefit List in Card */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-blue-900/70 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-white">사전예약자 100% 무료 입장권</h4>
                    <p className="text-slate-400 text-xs mt-0.5">현장 결제 시 1인 10,000원 상당 입장료 전액 면제 (동반 1인 포함)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-indigo-900/70 text-indigo-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-white">천안 인기 웨딩홀 대관료 & 식대 특별 할인</h4>
                    <p className="text-slate-400 text-xs mt-0.5">골든타임 우선 배정, 대관료 최대 무료 지원 및 시식권 제공</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-emerald-900/70 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-white">스드메 정찰제 패키지 & 추가금 지원</h4>
                    <p className="text-slate-400 text-xs mt-0.5">드레스 무료 피팅권, 본식 스냅/원판 포함 및 액자 업그레이드</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-amber-900/70 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    04
                  </div>
                  <div>
                    <h4 className="font-bold text-white">혼수 가전·가구 VIP 임직원가 프로모션</h4>
                    <p className="text-slate-400 text-xs mt-0.5">삼성·LG 신혼가전 구매금액대별 모바일 상품권 및 사은품 증정</p>
                  </div>
                </div>
              </div>

              {/* Card Footer Call to Action */}
              <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-3 text-center">
                <p className="text-xs text-blue-200">
                  ⚡ <strong>무료초대권 신청은 1분이면 완료</strong>되며 즉시 모바일로 티켓이 발송됩니다.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
