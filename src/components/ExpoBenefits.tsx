import React from 'react';
import { Gift, Sparkles, Building2, Shirt, Gem, Tv, Coffee, ShieldCheck, Ticket } from 'lucide-react';

export const ExpoBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Ticket,
      badge: '방문 혜택 01',
      title: '사전예약 100% 무료입장',
      desc: '현장 구매 시 1인 10,000원 상당의 입장료를 사전예약자 및 동반 1인까지 전액 무료 지원합니다.',
      tag: '입장료 무료',
      color: 'blue'
    },
    {
      icon: Building2,
      badge: '웨딩홀 혜택 02',
      title: '천안 인기 웨딩홀 대관료 & 식대 할인',
      desc: '천안·아산 주요 웨딩홀 대관료 최대 무료 지원 및 보증인원별 식대 할인, 피크타임 골든타임 우선 예약권을 제공합니다.',
      tag: '대관료 무료 / 식대할인',
      color: 'indigo'
    },
    {
      icon: Shirt,
      badge: '스드메 혜택 03',
      title: '스드메 정찰제 & 최대 150만원 즉시 지원',
      desc: '신상 수입 드레스 무료 피팅, 본식 스냅 및 원판 앨범 포함, 원본 CD/수정본 무료 업그레이드 혜택을 드립니다.',
      tag: '스드메 패키지 특가',
      color: 'sky'
    },
    {
      icon: Tv,
      badge: '혼수 가전 혜택 04',
      title: '삼성·LG 신혼가전 VIP 임직원가 지원',
      desc: '웨딩박람회 제휴사 단독 구매 금액대별 최대 45% 할인, 백화점 상품권 캐시백 및 추가 무상 A/S 연장 혜택이 주어집니다.',
      tag: '가전 추가 캐시백',
      color: 'amber'
    },
    {
      icon: Gem,
      badge: '예물·예복 혜택 05',
      title: '맞춤 예복 셔츠 증정 & 핸드메이드 링 할인',
      desc: '신랑 맞춤 수제화 및 셔츠 2벌 무료 증정, 신부 다이아몬드 및 가드링 무상 증정 프로모션을 적용받으실 수 있습니다.',
      tag: '예복·예물 사은품',
      color: 'emerald'
    },
    {
      icon: Coffee,
      badge: '상담 감사 혜택 06',
      title: '상담만 받아도 스타벅스 카드 & 웰컴 기프트',
      desc: '부스 상담 3곳 이상 완료 시 스타벅스 기프트카드 또는 고급 디퓨저/웨딩 다이어리를 100% 현장 수령하실 수 있습니다.',
      tag: '100% 전원 증정',
      color: 'rose'
    },
  ];

  return (
    <section id="benefits" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            <Gift className="w-3.5 h-3.5 text-blue-700" />
            <span>천안 웨딩박람회 단독 특전</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            오직 사전예약자만을 위한 6대 핵심 혜택
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            발품 팔 필요 없이 하루 만에 천안 최저가 견적과 VIP 혜택을 확보하세요. 
            현장 박람회 특가 계약 시 파격적인 패키지 할인이 적용됩니다.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-700 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-blue-900 bg-blue-100/80 px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-bold text-blue-700 group-hover:underline">
                    사전신청 필수 →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice Card */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>현장 계약 강요 없는 100% 안심 상담 제도</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              상담만 받아도 사은품을 드리며, 계약 여부와 관계없이 전문 플래너가 1:1 맞춤 견적서를 무료로 작성해 드립니다.
            </p>
          </div>
          <a
            href="#schedule"
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors shadow-lg active:scale-95 text-center w-full md:w-auto"
          >
            지금 무료초대권 신청하기
          </a>
        </div>

      </div>
    </section>
  );
};
