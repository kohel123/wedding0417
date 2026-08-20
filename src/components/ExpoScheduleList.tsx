import React, { useState } from 'react';
import { AdItem } from '../types';
import { Calendar, MapPin, ExternalLink, Sparkles, RefreshCw, Search, CheckCircle, Tag, Layers, LayoutList, LayoutGrid, Clock, ShieldCheck } from 'lucide-react';

interface ExpoScheduleListProps {
  cheonanExpos: AdItem[];
  chungcheongExpos: AdItem[];
  allExpos: AdItem[];
  isLoading: boolean;
  onRefresh: () => void;
  lastUpdated: string;
}

export const ExpoScheduleList: React.FC<ExpoScheduleListProps> = ({
  cheonanExpos,
  chungcheongExpos,
  allExpos,
  isLoading,
  onRefresh,
  lastUpdated
}) => {
  const [activeTab, setActiveTab] = useState<'cheonan' | 'chungcheong' | 'all'>('cheonan');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [viewMode, setViewMode] = useState<'compact' | 'card'>('compact');

  // Select list according to tab
  const getRawList = () => {
    switch (activeTab) {
      case 'cheonan':
        return cheonanExpos;
      case 'chungcheong':
        return chungcheongExpos;
      case 'all':
        return allExpos;
      default:
        return cheonanExpos;
    }
  };

  // Filter with search keyword
  const currentList = getRawList().filter((item) => {
    if (!searchKeyword.trim()) return true;
    const query = searchKeyword.toLowerCase();
    const name = String(item.gather_name || '').toLowerCase();
    const title = String(item.ad_title || '').toLowerCase();
    const loc = String(item.ad_location || '').toLowerCase();
    const venue = String(item.venue || '').toLowerCase();
    return name.includes(query) || title.includes(query) || loc.includes(query) || venue.includes(query);
  });

  return (
    <section id="schedule" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>실시간 연동 웨딩페어</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              천안 웨딩박람회 일정 안내
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              원하시는 웨딩박람회 일정을 클릭하시면 <strong className="text-blue-900 font-semibold">무료 초대권 신청 페이지</strong>로 바로 이동합니다.
            </p>
          </div>

          {/* Controls: Refresh & View Mode */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onRefresh}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 px-3 py-2 rounded-lg border border-slate-300 transition-colors active:scale-95 disabled:opacity-50"
              title="실시간 일정 새로고침"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-blue-600' : 'text-slate-500'}`} />
              <span>{isLoading ? '조회중...' : '새로고침'}</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex bg-slate-200 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('compact')}
                className={`p-1.5 rounded text-xs font-medium flex items-center gap-1 transition-all ${
                  viewMode === 'compact'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="모바일 최적화 간결한 리스트 보기"
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">간결형</span>
              </button>
              <button
                onClick={() => setViewMode('card')}
                className={`p-1.5 rounded text-xs font-medium flex items-center gap-1 transition-all ${
                  viewMode === 'card'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="상세 카드 보기"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">카드형</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Region Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setActiveTab('cheonan')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === 'cheonan'
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-950/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                천안 박람회 ({cheonanExpos.length})
              </button>
              <button
                onClick={() => setActiveTab('chungcheong')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeTab === 'chungcheong'
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-950/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                충청권 전체 ({chungcheongExpos.length})
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-950/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                전체 ({allExpos.length})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="박람회명, 장소 검색..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800"
              />
              {searchKeyword && (
                <button
                  onClick={() => setSearchKeyword('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>박람회명을 클릭하시면 공식 무료초대권 신청 페이지로 안전하게 이동합니다.</span>
          </div>
        </div>

        {/* Expo Items List */}
        {currentList.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs">
            <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 mb-1">해당 조건의 웨딩박람회가 없습니다.</h3>
            <p className="text-xs text-slate-500 mb-4">검색어를 변경하시거나 충청권 전체 탭을 확인해보세요.</p>
            <button
              onClick={() => { setActiveTab('chungcheong'); setSearchKeyword(''); }}
              className="bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-lg"
            >
              충청권 전체 일정 확인하기
            </button>
          </div>
        ) : viewMode === 'compact' ? (
          /* COMPACT LIST VIEW - Optimized for Mobile Density */
          <div className="space-y-3">
            {currentList.map((item, index) => {
              const targetUrl = item.target_url || item.ad_url || '#';
              const name = item.gather_name || item.ad_title || '천안 웨딩박람회';
              const date = item.ad_date || '이번 주말 상시 운영';
              const location = item.ad_location || '천안시 서북구/동남구';
              const thumb = item.ad_thumbnail2 || item.ad_thumbnail || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80';

              return (
                <div
                  key={item.id || index}
                  className="bg-white rounded-xl border border-slate-200 hover:border-blue-700 hover:shadow-md transition-all p-3 sm:p-4.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 group"
                >
                  {/* Left: Thumbnail & Info */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200 block group-hover:opacity-95"
                    >
                      <img
                        src={thumb}
                        alt={`${name} 무료 초대권 신청`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 right-1 bg-slate-900/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded backdrop-blur-xs">
                        무료입장
                      </span>
                    </a>

                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="bg-blue-100 text-blue-900 text-[11px] font-bold px-2 py-0.5 rounded-md">
                          {location.includes('천안') ? '천안 특설전' : '충청 웨딩페어'}
                        </span>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1 truncate">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{location}</span>
                        </span>
                      </div>

                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1"
                      >
                        💖 <strong>{name}</strong>
                      </a>

                      <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{date}</span>
                      </p>

                      {item.benefits && item.benefits.length > 0 && (
                        <p className="text-[11px] text-amber-700 font-medium truncate hidden md:block">
                          🎁 {item.benefits[0]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Direct CTA Button */}
                  <div className="flex items-center justify-end sm:shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <span>무료 초대권 신청</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* CARD GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentList.map((item, index) => {
              const targetUrl = item.target_url || item.ad_url || '#';
              const name = item.gather_name || item.ad_title || '천안 웨딩박람회';
              const date = item.ad_date || '이번 주말 상시 운영';
              const location = item.ad_location || '충남 천안시';
              const venue = item.venue || '천안 특별전시장';
              const thumb = item.ad_thumbnail2 || item.ad_thumbnail || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80';

              return (
                <div
                  key={item.id || index}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-blue-700 hover:shadow-xl transition-all overflow-hidden flex flex-col group"
                >
                  {/* Card Thumbnail */}
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-video w-full overflow-hidden bg-slate-100 block"
                  >
                    <img
                      src={thumb}
                      alt={`${name} 무료 초대권 신청`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {location.includes('천안') ? '천안 개최' : '충청권'}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-amber-300 text-xs font-semibold px-2 py-0.5 rounded">
                      사전예약 무료
                    </div>
                  </a>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2"
                      >
                        💖 {name}
                      </a>

                      <div className="space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="font-semibold text-slate-800">{date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="text-slate-600 truncate">{location} ({venue})</span>
                        </div>
                      </div>

                      {item.benefits && item.benefits.length > 0 && (
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1">
                          {item.benefits.map((b, bIdx) => (
                            <p key={bIdx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                              <span className="truncate">{b}</span>
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Button */}
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 active:scale-98"
                    >
                      <span>무료 초대권 신청하기</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
