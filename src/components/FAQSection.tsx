import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ_ITEMS: FAQItem[] = [
  {
    category: '입장/신청',
    question: '사전예약 무료초대권은 동반 1인까지 함께 사용할 수 있나요?',
    answer: '네, 사전신청 1건으로 예비 신랑·신부 2인(동반 1인 포함) 모두 무료로 동시 입장하실 수 있습니다. 부모님이나 친구분과 함께 오실 경우에도 추가 비용 없이 자유롭게 관람 가능합니다.'
  },
  {
    category: '입장/신청',
    question: '사전신청 후 일정이 변경되거나 못 가게 되면 어떻게 되나요?',
    answer: '사전신청은 별도의 위약금이나 불이익이 전혀 없는 100% 무료 등록 서비스입니다. 방문하지 못하시더라도 자동으로 취소 처리되며, 다음 회차 박람회에 언제든 다시 무료로 신청하실 수 있습니다.'
  },
  {
    category: '상담/계약',
    question: '방문해서 상담만 받고 계약을 하지 않아도 괜찮나요?',
    answer: '네, 전혀 문제없습니다! 천안 웨딩박람회는 계약 강요 없이 예비부부님들께서 최신 견적과 트렌드를 비교하고 예산을 세우실 수 있도록 돕는 오픈 페어입니다. 상담만 받으셔도 방문 감사 사은품을 100% 드립니다.'
  },
  {
    category: '혜택/선물',
    question: '천안 웨딩홀 대관료 무료 및 식대 할인은 어떻게 적용받나요?',
    answer: '박람회장 내 웨딩홀 제휴 부스에서 1:1 상담 시 박람회 전용 프로모션 코드가 발급됩니다. 이를 통해 천안·아산 주요 인기 웨딩홀의 비수기/일요일 골든타임 대관료 전액 무료 및 식대 1인당 최대 5,000~10,000원 할인 혜택을 즉시 적용받으실 수 있습니다.'
  },
  {
    category: '상담/계약',
    question: '스드메 패키지에 추가금(헬퍼비, 원본비 등)이 많이 붙지 않나요?',
    answer: '본 박람회에서는 투명한 정찰제 패키지를 운영합니다. 계약 전 원본 수정본 데이터비, 헬퍼비, 드레스 등급별 추가금 유무를 계약서에 명확히 표기해 드리므로 깜짝 추가금 걱정 없이 안심하고 준비하실 수 있습니다.'
  },
  {
    category: '주차/위치',
    question: '행사장 주차는 무료인가요? 대중교통으로 가기 편한가요?',
    answer: '천안 신라스테이 및 주요 특설 박람회장은 전용 주차장을 완비하고 있으며, 사전예약자 안내데스크에서 차량 번호 등록 시 최대 3시간 무료 주차를 지원합니다. 천안아산역(KTX) 및 두정역/천안역 인근에 위치하여 대중교통 접근성도 매우 뛰어납니다.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string>('전체');

  const categories = ['전체', '입장/신청', '혜택/선물', '상담/계약', '주차/위치'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (selectedCat !== '전체' && item.category !== selectedCat) return false;
    return true;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800" />
            <span>자주 묻는 질문 FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            천안 웨딩박람회 궁금한 점을 모두 풀어드립니다
          </h2>
          <p className="text-sm text-slate-600">
            예비 신랑·신부님들이 가장 많이 질문하시는 내용을 모았습니다.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCat(cat); setOpenIndex(0); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-black text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-blue-900" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        A
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-blue-700 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700">
              더 궁금하신 사항이 있으신가요? <strong>무료초대권 신청 시 안심 해피콜</strong>을 통해 친절하게 상담해 드립니다.
            </p>
          </div>
          <a
            href="#schedule"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors shrink-0"
          >
            무료초대권 신청하기
          </a>
        </div>

      </div>
    </section>
  );
};
