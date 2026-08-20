import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, ChevronRight, HeartHandshake, Building2, Camera, Gem, Mail, Sparkles } from 'lucide-react';

export const WeddingPreparationRoadmap: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      dDay: 'D-360 ~ D-300',
      phase: '1단계: 기초 기획 및 상담',
      title: '상견례, 예산 수립 & 박람회 방문',
      icon: HeartHandshake,
      summary: '결혼 준비의 첫 단추! 양가 상견례를 진행하고 전체 결혼 예산과 희망 일정을 정합니다.',
      tasks: [
        '양가 부모님 인사 및 상견례 장소 예약·진행',
        '신랑·신부 총 예산 및 항목별 분배 계획 수립',
        '천안 웨딩박람회 무료초대권 신청 및 일정 확인',
        '전문 웨딩플래너 1:1 상담을 통한 전반적인 일정표 작성'
      ],
      proTip: '💡 웨딩박람회를 초기에 방문하면 웨딩홀 대관료 무료 및 스드메 패키지 특가 혜택을 선점할 수 있습니다.'
    },
    {
      dDay: 'D-300 ~ D-240',
      phase: '2단계: 웨딩홀 & 스드메 확정',
      title: '천안 웨딩홀 투어 및 스드메 계약',
      icon: Building2,
      summary: '인기 있는 천안 웨딩홀은 1년 전부터 마감됩니다. 황금시간대(12~14시) 예약을 서두르세요.',
      tasks: [
        '천안·아산 주요 웨딩홀 3~4곳 투어 및 시식',
        '보증인원, 대관료, 식대, 주차 공간 꼼꼼히 비교',
        '스튜디오·드레스·메이크업(스드메) 업체 스타일 결정 및 계약',
        '본식 스냅 및 서브 스냅, DVD 영상 촬영 작가 섭외'
      ],
      proTip: '💡 박람회 제휴 혜택으로 웨딩홀 식대 할인과 스드메 원본비 지원 혜택을 챙기세요.'
    },
    {
      dDay: 'D-240 ~ D-180',
      phase: '3단계: 촬영 및 신혼여행',
      title: '스튜디오 웨딩촬영 & 허니문 예약',
      icon: Camera,
      summary: '보정본 완성까지 최소 2~3개월이 소요되므로 스튜디오 촬영을 여유 있게 진행합니다.',
      tasks: [
        '촬영용 드레스 및 턱시도 셀렉 & 가봉',
        '스튜디오 웨딩촬영 진행 및 캐주얼룩·소품 준비',
        '신혼여행 목적지 선정, 항공권 및 숙소 조기 예약',
        '여권 만료일 확인 및 필요 비자 발급'
      ],
      proTip: '💡 신혼여행은 6개월 이상 전에 예약해야 얼리버드 특가 및 룸 업그레이드가 가능합니다.'
    },
    {
      dDay: 'D-180 ~ D-90',
      phase: '4단계: 예물·예복 & 신혼살림',
      title: '예물·예복·한복 맞춤 & 혼수가전 준비',
      icon: Gem,
      summary: '평생 남을 웨딩 밴드와 신랑 맞춤 수트, 신혼집 가전·가구를 실속 있게 마련합니다.',
      tasks: [
        '웨딩밴드(커플링) 및 다이아몬드 예물 제작 (약 1~2개월 소요)',
        '신랑 맞춤 수트(예복) 및 수제화 맞춤 가봉',
        '양가 어머님 혼주 한복 및 아버님 정장 대여/맞춤',
        '신혼집 실측 및 삼성·LG 가전, 가구 견적 비교'
      ],
      proTip: '💡 가전은 한 브랜드에서 세트로 구매 시 다품목 캐시백과 백화점 상품권 혜택이 가장 큽니다.'
    },
    {
      dDay: 'D-90 ~ D-30',
      phase: '5단계: 초대 및 본식 준비',
      title: '청첩장 모임 & 본식 드레스 최종 피팅',
      icon: Mail,
      summary: '지인들에게 소식을 전하고 본식에 필요한 세부 연출과 인원을 확정합니다.',
      tasks: [
        '모바일 청첩장 및 종이 청첩장 제작, 모임 배부',
        '본식 드레스 최종 셀렉 및 악세서리 매칭',
        '예식 사회자, 축가, 주례(또는 주례없는 예식 대본) 섭외',
        '웨딩 카, 부케, 답례품, 본식 헬퍼 비용 준비'
      ],
      proTip: '💡 모바일 청첩장은 식 4~6주 전, 종이 청첩장은 식 8주 전부터 전달하는 것이 에티켓입니다.'
    },
    {
      dDay: 'D-30 ~ D-Day',
      phase: '6단계: 최종 리허설 & 결혼식',
      title: '식순 최종 점검 & 두근두근 웨딩데이',
      icon: Sparkles,
      summary: '모든 점검을 마치고 가장 빛나는 주인공으로 결혼식장에 입장합니다.',
      tasks: [
        '웨딩홀 최종 보증인원 확정 및 식순/음향/영상 전달',
        '신랑·신부 및 혼주 메이크업 샵 도착 시간 재확인',
        '당일 결제할 잔금 및 헬퍼비 봉투 준비',
        '신혼여행 짐 싸기 및 당일 비상용품(편한 신발, 보조배터리) 챙기기'
      ],
      proTip: '💡 전날 충분한 수면을 취하고 아침 식사는 가볍게 챙겨 드시는 것이 좋습니다.'
    }
  ];

  return (
    <section id="roadmap" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200">
            <Clock className="w-3.5 h-3.5 text-blue-800" />
            <span>결혼준비 순서 & 기간별 절차 로드맵</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            D-360부터 D-Day까지 완벽한 결혼준비 절차
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            시작이 막막한 예비 신랑·신부님을 위한 단계별 핵심 가이드입니다. 
            단계를 클릭하시면 상세 체크 항목과 전문가 꿀팁을 확인하실 수 있습니다.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-950 shadow-md ring-2 ring-blue-700/50'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-blue-800 text-blue-200' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {step.dDay}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
                </div>
                <div>
                  <p className={`text-xs font-bold leading-snug line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {step.title.split('&')[0]}
                  </p>
                  <p className={`text-[10px] mt-0.5 ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                    {step.phase.split(':')[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-900 text-xs font-black px-2.5 py-1 rounded-md">
                  {steps[activeStep].dDay}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {steps[activeStep].phase}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {steps[activeStep].summary}
              </p>
            </div>

            {/* Quick action */}
            <a
              href="#schedule"
              className="inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all shrink-0 active:scale-95"
            >
              <span>이 단계에서 박람회 혜택받기</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-6">
            {steps[activeStep].tasks.map((task, tIndex) => (
              <div
                key={tIndex}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-start gap-3 hover:bg-slate-100/70 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {task}
                </span>
              </div>
            ))}
          </div>

          {/* Pro Tip Callout */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
            <p className="font-semibold leading-relaxed">
              {steps[activeStep].proTip}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
