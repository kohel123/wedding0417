import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingDown, DollarSign, PieChart, Info, CheckCircle2, RotateCcw } from 'lucide-react';

interface BudgetItemState {
  id: string;
  name: string;
  category: string;
  cost: number; // in 만원
  min: number;
  max: number;
  expoDiscount: number; // 박람회 예상 할인액 (만원)
  desc: string;
}

const DEFAULT_BUDGET_ITEMS: BudgetItemState[] = [
  {
    id: 'hall',
    name: '웨딩홀 대관료 및 식대 (보증 200명 기준)',
    category: '웨딩홀',
    cost: 1100,
    min: 500,
    max: 2500,
    expoDiscount: 150,
    desc: '천안 인기 웨딩홀 대관료 및 식대 (식대 1인 5.5만~6.5만선)'
  },
  {
    id: 'sdm',
    name: '스드메 패키지 (스튜디오+드레스+메이크업)',
    category: '스드메',
    cost: 280,
    min: 150,
    max: 600,
    expoDiscount: 80,
    desc: '촬영/본식 드레스, 헤어메이크업, 스튜디오 앨범 기본 구성'
  },
  {
    id: 'snap',
    name: '본식 스냅 & 서브스냅 / DVD 영상',
    category: '스냅/영상',
    cost: 120,
    min: 50,
    max: 300,
    expoDiscount: 30,
    desc: '본식 원판/스냅 앨범 및 4K 하이라이트 영상 촬영'
  },
  {
    id: 'jewel',
    name: '예물 (웨딩밴드 커플링 & 다이아)',
    category: '예물/예복',
    cost: 220,
    min: 80,
    max: 700,
    expoDiscount: 40,
    desc: '14k/18k 또는 플래티넘 웨딩밴드 커플링'
  },
  {
    id: 'suit',
    name: '신랑 맞춤예복 & 양가 혼주 한복',
    category: '예물/예복',
    cost: 160,
    min: 80,
    max: 400,
    expoDiscount: 35,
    desc: '신랑 이태리/영국 원단 수트 및 양가 어머님 한복 대여'
  },
  {
    id: 'honeymoon',
    name: '신혼여행 (허니문 항공+리조트)',
    category: '신혼여행',
    cost: 550,
    min: 200,
    max: 1200,
    expoDiscount: 60,
    desc: '동남아(발리) / 하와이 / 유럽 등 5~7박 기준 2인 비용'
  },
  {
    id: 'appliance',
    name: '혼수가전 (TV·냉장고·세탁기/건조기 등)',
    category: '혼수',
    cost: 950,
    min: 400,
    max: 2000,
    expoDiscount: 120,
    desc: '삼성/LG 신혼 패키지 다품목 구매 기준'
  },
  {
    id: 'furniture',
    name: '혼수가구 (침대 매트리스·소파·식탁)',
    category: '혼수',
    cost: 450,
    min: 200,
    max: 1200,
    expoDiscount: 50,
    desc: '호텔형 침대 프레임 및 고급 매트리스, 거실 소파'
  },
  {
    id: 'etc',
    name: '기타 부대비용 (청첩장·헬퍼비·답례품)',
    category: '기타',
    cost: 150,
    min: 50,
    max: 400,
    expoDiscount: 20,
    desc: '모바일/종이 청첩장, 이모님 수고비, 웨딩카 등'
  }
];

export const BudgetCalculator: React.FC = () => {
  const [items, setItems] = useState<BudgetItemState[]>(DEFAULT_BUDGET_ITEMS);
  const [preset, setPreset] = useState<'economical' | 'standard' | 'premium'>('standard');

  const handleCostChange = (id: string, newCost: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cost: newCost } : item))
    );
  };

  const applyPreset = (type: 'economical' | 'standard' | 'premium') => {
    setPreset(type);
    if (type === 'economical') {
      setItems([
        { ...DEFAULT_BUDGET_ITEMS[0], cost: 800 },
        { ...DEFAULT_BUDGET_ITEMS[1], cost: 180 },
        { ...DEFAULT_BUDGET_ITEMS[2], cost: 70 },
        { ...DEFAULT_BUDGET_ITEMS[3], cost: 120 },
        { ...DEFAULT_BUDGET_ITEMS[4], cost: 100 },
        { ...DEFAULT_BUDGET_ITEMS[5], cost: 350 },
        { ...DEFAULT_BUDGET_ITEMS[6], cost: 600 },
        { ...DEFAULT_BUDGET_ITEMS[7], cost: 280 },
        { ...DEFAULT_BUDGET_ITEMS[8], cost: 100 },
      ]);
    } else if (type === 'standard') {
      setItems(DEFAULT_BUDGET_ITEMS);
    } else {
      setItems([
        { ...DEFAULT_BUDGET_ITEMS[0], cost: 1600 },
        { ...DEFAULT_BUDGET_ITEMS[1], cost: 420 },
        { ...DEFAULT_BUDGET_ITEMS[2], cost: 180 },
        { ...DEFAULT_BUDGET_ITEMS[3], cost: 400 },
        { ...DEFAULT_BUDGET_ITEMS[4], cost: 250 },
        { ...DEFAULT_BUDGET_ITEMS[5], cost: 850 },
        { ...DEFAULT_BUDGET_ITEMS[6], cost: 1400 },
        { ...DEFAULT_BUDGET_ITEMS[7], cost: 700 },
        { ...DEFAULT_BUDGET_ITEMS[8], cost: 250 },
      ]);
    }
  };

  const totalCost = items.reduce((sum, item) => sum + item.cost, 0);
  const totalExpoDiscount = items.reduce((sum, item) => sum + item.expoDiscount, 0);
  const finalDiscountedCost = totalCost - totalExpoDiscount;

  const formatCost = (val: number) => {
    const eok = Math.floor(val / 10000);
    const man = val % 10000;
    if (eok > 0) {
      return man > 0 ? `${eok}억 ${man.toLocaleString()}만원` : `${eok}억원`;
    }
    return `${man.toLocaleString()}만원`;
  };

  return (
    <section id="calculator" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200">
            <Calculator className="w-3.5 h-3.5 text-blue-800" />
            <span>결혼준비 예상 비용 계산기</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            내 결혼 예산 시뮬레이션 & 절감액 확인
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            항목별 슬라이더를 조절하여 신랑·신부 맞춤 예산을 확인하고, 웨딩박람회 혜택으로 절약 가능한 금액을 한눈에 비교해보세요.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-200 p-1 rounded-xl flex items-center gap-1">
            <button
              onClick={() => applyPreset('economical')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                preset === 'economical'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              알뜰 실속형
            </button>
            <button
              onClick={() => applyPreset('standard')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                preset === 'standard'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              천안 인기 표준형 (추천)
            </button>
            <button
              onClick={() => applyPreset('premium')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                preset === 'premium'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              프리미엄 하이엔드형
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base sm:text-lg font-black text-blue-900">
                      {item.cost.toLocaleString()}만원
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <input
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={10}
                    value={item.cost}
                    onChange={(e) => handleCostChange(item.id, Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>최소 {item.min}만</span>
                    <span className="text-emerald-700 font-semibold">박람회 예상할인 ~{item.expoDiscount}만원</span>
                    <span>최대 {item.max}만</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Summary Box */}
          <div className="lg:col-span-5 sticky top-24 space-y-5">
            <div className="bg-gradient-to-b from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-blue-300">총 예상 결혼준비 비용 요약</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-sm text-slate-300">표준 총액</span>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    {formatCost(totalCost)}
                  </span>
                </div>
              </div>

              {/* Expo Discount Box */}
              <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-300 font-bold flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4 text-emerald-400" />
                    <span>천안 웨딩박람회 예상 할인 혜택</span>
                  </span>
                  <span className="font-black text-emerald-300 text-sm">
                    - {totalExpoDiscount.toLocaleString()}만원
                  </span>
                </div>
                <p className="text-[11px] text-emerald-200/90 leading-relaxed">
                  웨딩홀 대관료 할인, 스드메 패키지 특가, 가전 제휴 캐시백 등을 합산한 예상 절감액입니다.
                </p>
              </div>

              {/* Final Estimated Cost */}
              <div className="bg-blue-900/40 border border-blue-700/50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-blue-200">박람회 혜택 적용 후</span>
                  <p className="text-xs text-slate-400 font-medium">최종 예상 실지출</p>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-black text-amber-300">
                    {formatCost(finalDiscountedCost)}
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <a
                href="#schedule"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 text-center block"
              >
                <span>할인 혜택 받고 박람회 신청하기</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center">
                * 신혼집 보증금/매매 비용을 제외한 순수 예식·혼수·허니문 기준 시뮬레이션입니다.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
