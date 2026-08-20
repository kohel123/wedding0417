import React from 'react';
import { Clock, MapPin, Ticket, AlertTriangle, CheckCircle, Car, Compass, FileText, Smartphone, ShieldCheck } from 'lucide-react';

export const ExpoGuideAndTips: React.FC = () => {
  return (
    <section id="guide" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            <Compass className="w-3.5 h-3.5 text-blue-800" />
            <span>천안 웨딩박람회 관람 가이드 & 꿀팁</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            시간·입장료·주차 & 박람회 200% 활용 꿀팁
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            처음 방문하시는 예비 신랑·신부님도 당황하지 않고 가장 알뜰하게 혜택을 챙길 수 있는 완벽 가이드입니다.
          </p>
        </div>

        {/* 4 Key Info Cards (시간, 입장료, 위치, 주차) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">운영 시간 & 입장 안내</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                매주 토·일 주말 <strong className="text-blue-900">10:00 ~ 19:00</strong> 운영 (마지막 입장 18:00). 
                여유로운 상담을 위해 오전 시간대 방문을 추천합니다.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">입장료 안내</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                현장 발권 시 1인 10,000원이나, <strong className="text-blue-900">온라인 사전신청 시 동반 1인까지 100% 무료 입장</strong>입니다.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">개최 위치</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                천안 신라스테이 호텔, 쌍용동 컨벤션센터, 불당동 특설 행사장 등 천안 주요 교통 요충지에서 개최됩니다.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">주차장 안내</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                행사장 내 지하 및 지상 주차장 구비. 사전예약자 확인 시 <strong className="text-blue-900">무료 주차권 (최대 3시간)</strong>이 지급됩니다.
              </p>
            </div>
          </div>

        </div>

        {/* 3 Step Application Method Guide */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-blue-300">1분 간편 예약 가이드</span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              천안 웨딩박람회 무료초대권 신청 방법
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              복잡한 서류 없이 스마트폰으로 1분이면 사전등록이 완료됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3 text-center">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center mx-auto">
                1
              </div>
              <h4 className="font-bold text-sm text-white">일정 확인 및 초대권 클릭</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                상단 일정표에서 원하시는 날짜와 장소의 [무료 초대권 신청] 버튼을 누릅니다.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3 text-center">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center mx-auto">
                2
              </div>
              <h4 className="font-bold text-sm text-white">신청자 기본정보 입력</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                이름, 연락처, 예식 예정 시기(미정 가능)를 입력하고 신청을 완료합니다.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3 text-center">
              <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mx-auto">
                3
              </div>
              <h4 className="font-bold text-sm text-white">모바일 바코드 즉시 수령</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                카카오톡 또는 문자로 모바일 초대권이 즉시 전송되며 당일 안내데스크에 제시하면 입장 완료!
              </p>
            </div>
          </div>
        </div>

        {/* Cautions & Expert Tips (주의사항 & 호갱방지) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Cautions */}
          <div className="bg-amber-50/60 rounded-2xl p-6 border border-amber-200/80 space-y-4">
            <div className="flex items-center gap-2 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <h3 className="font-bold text-base sm:text-lg">박람회 계약 시 필수 주의사항 4가지</h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-amber-700 shrink-0">01</span>
                <div>
                  <strong>숨겨진 추가금(필수 옵션비) 사전 확인:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">드레스 블랙라벨 업그레이드 비용, 헬퍼비, 원본 수정본 파일 구입비가 포함인지 특약에 명시하세요.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-bold text-amber-700 shrink-0">02</span>
                <div>
                  <strong>취소 및 환불 위약금 규정 체크:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">계약 후 단순 변심 시 계약금 100% 환불 가능 기간(통상 14일 이내)을 계약서에 기재해 달라고 요청하세요.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-bold text-amber-700 shrink-0">03</span>
                <div>
                  <strong>당일 현장 압박에 휩쓸리지 않기:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">‘지금 안 하면 이 가격에 못 한다’는 말에 성급히 결정하지 말고, 가계약 조건을 먼저 문의하세요.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-bold text-amber-700 shrink-0">04</span>
                <div>
                  <strong>본식 스냅 작가 지정 여부:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">초보 아르바이트생이 아닌 대표/수석 실장급 촬영인지 확인하고 포트폴리오를 대조해보세요.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Visiting Tips */}
          <div className="bg-blue-50/60 rounded-2xl p-6 border border-blue-200/80 space-y-4">
            <div className="flex items-center gap-2 text-blue-900">
              <CheckCircle className="w-5 h-5 text-blue-700 shrink-0" />
              <h3 className="font-bold text-base sm:text-lg">박람회 200% 활용 실전 꿀팁</h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-blue-800 shrink-0">Tip 1</span>
                <div>
                  <strong>동선 추천 순서:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">웨딩홀 상담 → 스드메 견적 비교 → 예물/예복 → 신혼가전/허니문 순서로 돌아보는 것이 효율적입니다.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-bold text-blue-800 shrink-0">Tip 2</span>
                <div>
                  <strong>선호하는 스타일 이미지 캡처해 가기:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">인스타그램이나 핀터레스트에서 원하는 드레스/스튜디오 분위기 사진 5장 정도를 캡처해가면 상담 만족도가 2배 올라갑니다.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-bold text-blue-800 shrink-0">Tip 3</span>
                <div>
                  <strong>편안한 복장과 신발 착용:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">최소 2~3시간 동안 부스를 돌아다니며 상담을 받게 되므로 편한 운동화와 가벼운 옷차림이 좋습니다.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-bold text-blue-800 shrink-0">Tip 4</span>
                <div>
                  <strong>스탬프 투어로 사은품 모두 수령하기:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">부스 방문 스탬프를 모으면 스타벅스 카드와 백화점 상품권 등 쏠쏠한 현장 사은품을 모두 받을 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
