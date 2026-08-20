import React, { useState, useEffect } from 'react';
import { ChecklistItem } from '../types';
import { CheckSquare, Square, RotateCcw, Filter, Sparkles, CheckCircle2, ChevronDown, Award } from 'lucide-react';

const INITIAL_CHECKLIST: ChecklistItem[] = [
  // 예산/일정
  {
    id: 'chk-1',
    category: '예산/일정',
    dDay: 'D-360',
    title: '양가 부모님 첫 인사 및 상견례 일정 확정',
    description: '선호하는 음식과 분위기, 중간 위치의 조용한 한정식 또는 일식당 예약',
    tip: '상견례 2주 전 양가 부모님 식성과 날짜 최종 확인',
    completed: false
  },
  {
    id: 'chk-2',
    category: '예산/일정',
    dDay: 'D-330',
    title: '총 결혼 예산 수립 및 분담 비율 결정',
    description: '신혼집, 예식, 스드메, 혼수, 허니문 등 항목별 현실적인 지출 한도 설정',
    tip: '예상치 못한 부대비용을 대비해 10%의 예비비를 확보하세요',
    completed: false
  },
  {
    id: 'chk-3',
    category: '예산/일정',
    dDay: 'D-300',
    title: '천안 웨딩박람회 무료초대권 신청 및 방문',
    description: '최신 트렌드 파악 및 웨딩홀/스드메 박람회 단독 할인 혜택 비교',
    tip: '미리 원하는 드레스/스튜디오 스타일을 캡처해 가면 상담이 훨씬 빠릅니다',
    completed: false
  },

  // 웨딩홀/스드메
  {
    id: 'chk-4',
    category: '웨딩홀/스드메',
    dDay: 'D-280',
    title: '천안·아산 웨딩홀 투어 및 예식일 계약',
    description: '위치, 주차 대수, 식대, 보증인원, 단독홀 여부 확인 후 계약',
    tip: '골든타임(12시~13시30분)은 보통 1년 전 마감되므로 서두르세요',
    completed: false
  },
  {
    id: 'chk-5',
    category: '웨딩홀/스드메',
    dDay: 'D-250',
    title: '스드메(스튜디오·드레스·메이크업) 패키지 계약',
    description: '스튜디오 샘플 앨범 확인, 추가금(헬퍼비, 원본비, 얼리스타트비) 투명성 점검',
    tip: '박람회 정찰제 프로모션을 이용하면 불필요한 추가금을 크게 줄일 수 있습니다',
    completed: false
  },
  {
    id: 'chk-6',
    category: '웨딩홀/스드메',
    dDay: 'D-230',
    title: '본식 스냅 & DVD 영상 촬영 작가 섭외',
    description: '1인 2캠/2인 작가 여부, 홀 분위기(어두운 홀 vs 밝은 홀)에 맞는 포트폴리오 확인',
    tip: '인기 본식 스냅 작가는 예약이 빠르게 차므로 웨딩홀 계약 직후 섭외하세요',
    completed: false
  },

  // 촬영/혼수
  {
    id: 'chk-7',
    category: '촬영/혼수',
    dDay: 'D-200',
    title: '스튜디오 웨딩촬영 및 촬영용 드레스 피팅',
    description: '촬영 2~3주 전 촬영 드레스 가봉, 캐주얼/한복 룩 및 간식/소품 준비',
    tip: '촬영 당일에는 벗기 편한 셔츠나 지퍼형 옷을 착용하세요',
    completed: false
  },
  {
    id: 'chk-8',
    category: '촬영/혼수',
    dDay: 'D-180',
    title: '신혼여행(허니문) 항공권 및 숙소 예약',
    description: '휴양지(발리, 하와이, 몰디브 등) 또는 유럽 투어 일정 기획',
    tip: '여권 만료일이 6개월 이상 남아있는지 반드시 사전 확인하세요',
    completed: false
  },
  {
    id: 'chk-9',
    category: '촬영/혼수',
    dDay: 'D-150',
    title: '신혼집 계약 및 가전·가구 실측/구매',
    description: '도면 확인 후 대형 가전(냉장고, TV, 세탁기/건조기) 및 침대·소파 견적 비교',
    tip: '웨딩박람회 제휴 가전 매장에서 세트 구매 시 최대 캐시백 혜택이 적용됩니다',
    completed: false
  },

  // 예물/예복
  {
    id: 'chk-10',
    category: '예물/예복',
    dDay: 'D-120',
    title: '웨딩밴드(커플링) 및 신부 예물 맞춤',
    description: '디자인 및 착용감 비교, 각인 문구 결정, 제작 기간 1~2개월 고려',
    tip: '스튜디오 촬영 전에 웨딩밴드가 나오도록 일정을 조율하면 촬영 소품으로 좋습니다',
    completed: false
  },
  {
    id: 'chk-11',
    category: '예물/예복',
    dDay: 'D-100',
    title: '신랑 맞춤 수트(예복) 및 양가 혼주 정장 맞춤',
    description: '원단(이태리/영국/국내) 선택, 체형 보정 1차 가봉 및 수제화 맞춤',
    tip: '본식 후 일반 정장으로 리폼해 주는 서비스를 제공하는지 확인하세요',
    completed: false
  },
  {
    id: 'chk-12',
    category: '예물/예복',
    dDay: 'D-80',
    title: '양가 어머님 혼주 한복 대여 또는 맞춤',
    description: '예식장 조명과 양가 어머님 피부톤에 어울리는 색상 조화 매칭',
    tip: '양가 어머님이 함께 방문하여 치마/저고리 배색을 맞추면 본식 사진이 우아합니다',
    completed: false
  },

  // 본식/허니문
  {
    id: 'chk-13',
    category: '본식/허니문',
    dDay: 'D-60',
    title: '청첩장 제작 및 지인 모임 초대장 전달',
    description: '종이 청첩장 인쇄, 모바일 청첩장 링크 생성, 식전 영상 제작',
    tip: '모바일 청첩장은 식 4~6주 전에 보내는 것이 가장 적절합니다',
    completed: false
  },
  {
    id: 'chk-14',
    category: '본식/허니문',
    dDay: 'D-30',
    title: '본식 드레스 최종 피팅 & 부케/사회자 섭외',
    description: '본식 드레스 최종 가봉, 베일/티아라 선택, 사회자·축가·축사 대본 점검',
    tip: '웨딩홀 담당자에게 식순 음향(MR) 및 식전 영상 파일을 사전 전송해 테스트하세요',
    completed: false
  },
  {
    id: 'chk-15',
    category: '본식/허니문',
    dDay: 'D-7 ~ D-Day',
    title: '최종 보증인원 확정, 당일 사례비 봉투 준비',
    description: '식권 수량 점검, 헬퍼비/사회자/축가 수고비 봉투 준비 및 신혼여행 짐 정리',
    tip: '웨딩 당일 아침에는 간단한 죽이나 샌드위치를 꼭 챙겨드세요',
    completed: false
  }
];

export const InteractiveChecklist: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem('cheonan_wedding_checklist');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_CHECKLIST;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [onlyUncompleted, setOnlyUncompleted] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('cheonan_wedding_checklist', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const handleReset = () => {
    if (window.confirm('체크리스트 진행 상태를 처음으로 초기화하시겠습니까?')) {
      setItems(INITIAL_CHECKLIST);
    }
  };

  const completedCount = items.filter((i) => i.completed).length;
  const totalCount = items.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  const categories = ['전체', '예산/일정', '웨딩홀/스드메', '촬영/혼수', '예물/예복', '본식/허니문'];

  const filteredItems = items.filter((item) => {
    if (selectedCategory !== '전체' && item.category !== selectedCategory) return false;
    if (onlyUncompleted && item.completed) return false;
    return true;
  });

  return (
    <section id="checklist" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            <CheckSquare className="w-3.5 h-3.5 text-blue-800" />
            <span>결혼준비 필수 체크리스트</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            놓치기 쉬운 결혼준비 항목 완벽 체크
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            진행한 항목을 클릭하여 체크해보세요. 브라우저에 자동 저장되어 언제든 이어서 확인할 수 있습니다.
          </p>
        </div>

        {/* Progress Overview Card */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-5 sm:p-7 shadow-xl mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>나의 결혼준비 진행률</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                총 {totalCount}개 중 <span className="text-amber-300">{completedCount}개</span> 완료
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                {progressPercentage}%
              </span>
              <button
                onClick={handleReset}
                className="text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                title="진행도 초기화"
              >
                <RotateCcw className="w-3 h-3" />
                <span>초기화</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-700/60">
            <div
              className="bg-gradient-to-r from-blue-500 via-indigo-400 to-amber-300 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {progressPercentage === 100 ? (
            <p className="text-xs text-amber-300 font-semibold mt-3 text-center">
              🎉 축하합니다! 모든 결혼준비 체크리스트를 완벽하게 마쳤습니다!
            </p>
          ) : (
            <p className="text-xs text-slate-300 mt-2.5">
              💡 초반 항목(상견례, 웨딩홀, 스드메)은 천안 웨딩박람회에서 상담받으시면 수월하게 진행됩니다.
            </p>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={onlyUncompleted}
              onChange={(e) => setOnlyUncompleted(e.target.checked)}
              className="w-4 h-4 rounded text-blue-900 border-slate-300 focus:ring-blue-800"
            />
            <span>미완료 항목만 보기</span>
          </label>
        </div>

        {/* Checklist Items */}
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                item.completed
                  ? 'bg-slate-50/70 border-slate-200 opacity-75'
                  : 'bg-white border-slate-200 hover:border-blue-700 hover:shadow-md'
              }`}
            >
              {/* Checkbox Icon */}
              <div className="mt-0.5 shrink-0">
                {item.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-blue-700 fill-blue-100" />
                ) : (
                  <div className="w-6 h-6 rounded-lg border-2 border-slate-300 hover:border-blue-700 flex items-center justify-center transition-colors">
                    <Square className="w-4 h-4 text-transparent" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    item.completed ? 'bg-slate-200 text-slate-600' : 'bg-blue-100 text-blue-900'
                  }`}>
                    {item.dDay}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {item.category}
                  </span>
                </div>

                <h4 className={`text-sm sm:text-base font-bold transition-colors ${
                  item.completed ? 'line-through text-slate-400' : 'text-slate-900'
                }`}>
                  {item.title}
                </h4>

                <p className={`text-xs ${item.completed ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {item.tip && !item.completed && (
                  <div className="pt-1.5">
                    <p className="text-[11px] text-blue-900 font-medium bg-blue-50/60 p-2 rounded-lg border border-blue-100">
                      💡 {item.tip}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
