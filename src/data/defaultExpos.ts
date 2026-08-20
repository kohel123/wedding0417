import { AdItem } from '../types';

export const AFFILIATE_CODE = 'wedding2026';

export function appendAffiliateCode(url?: string): string {
  if (!url) return '#';
  const trimmed = url.trim();
  if (trimmed.endsWith('/')) {
    return trimmed + AFFILIATE_CODE;
  }
  if (trimmed.includes('?') || trimmed.includes('&')) {
    return trimmed + (trimmed.endsWith('=') ? '' : '&tag=') + AFFILIATE_CODE;
  }
  return trimmed + '/' + AFFILIATE_CODE;
}

export const DEFAULT_CHEONAN_EXPOS: AdItem[] = [
  {
    id: 'cheonan-1',
    region: 'chungcheong',
    ad_location: '충남 천안시 서북구 쌍용동',
    gather_name: '천안 프리미엄 웨딩박람회 대축제',
    ad_title: '천안 신라스테이 특별전시장 무료초대권',
    ad_date: '이번 주말 토·일 (10:00 ~ 19:00)',
    venue: '천안 신라스테이 3층 연회홀 & 쌍용 컨벤션센터',
    ad_thumbnail2: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    ad_url: 'https://cpaad.co.kr/ad/cheonan-fair/',
    target_url: 'https://cpaad.co.kr/ad/cheonan-fair/wedding2026',
    benefits: [
      '방문 전원 스타벅스 기프트카드 100% 증정',
      '스드메 패키지 최대 150만원 즉시 할인',
      '천안 인기 웨딩홀 대관료 무료 및 식대 할인'
    ]
  },
  {
    id: 'cheonan-2',
    region: 'chungcheong',
    ad_location: '충남 천안시 동남구 신부동',
    gather_name: '천안·아산 웨딩&혼수 대박람회',
    ad_title: '스드메 / 웨딩홀 / 혼수가전 다이렉트 페어',
    ad_date: '매주 주말 상시 운영 (사전예약제)',
    venue: '천안 신부동 웨딩스퀘어 특별전시장',
    ad_thumbnail2: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    ad_url: 'https://cpaad.co.kr/ad/cheonan-asan/',
    target_url: 'https://cpaad.co.kr/ad/cheonan-asan/wedding2026',
    benefits: [
      '사전신청자 무료입장 + VIP 웰컴 사은품',
      '삼성/LG 신혼가전 최대 45% 임직원가 지원',
      '1:1 맞춤 웨딩플래너 무료 동행 서비스'
    ]
  },
  {
    id: 'cheonan-3',
    region: 'chungcheong',
    ad_location: '충남 천안시 서북구 불당동',
    gather_name: '천안 불당 신도시 VIP 웨딩페스타',
    ad_title: '하이엔드 드레스 & 본식스냅 초대전',
    ad_date: '이번 달 주말 상시 운영 (11:00 ~ 20:00)',
    venue: '천안 불당 갤러리아 센터시티 인근 특설행사장',
    ad_thumbnail2: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80',
    ad_url: 'https://cpaad.co.kr/ad/buldang-vip/',
    target_url: 'https://cpaad.co.kr/ad/buldang-vip/wedding2026',
    benefits: [
      '프리미엄 수입 드레스 무료 피팅권 증정',
      '맞춤 예복 셔츠 2벌 & 수제화 증정',
      '허니문 인기 휴양지 조기예약 특별할인'
    ]
  }
];

export const DEFAULT_CHUNGCHEONG_EXPOS: AdItem[] = [
  ...DEFAULT_CHEONAN_EXPOS,
  {
    id: 'asan-1',
    region: 'chungcheong',
    ad_location: '충남 아산시 배방읍 (천안아산역)',
    gather_name: '천안아산 KTX역세권 웨딩페어',
    ad_title: '충청권 웨딩홀 및 스드메 연합 대축제',
    ad_date: '이번 주말 토·일 (10:30 ~ 19:30)',
    venue: '천안아산 KTX역 인근 와이시티 특설전시장',
    ad_thumbnail2: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    ad_url: 'https://cpaad.co.kr/ad/cheonan-ktx/',
    target_url: 'https://cpaad.co.kr/ad/cheonan-ktx/wedding2026',
    benefits: [
      '방문 시 백화점 상품권 증정',
      'KTX 역세권 웨딩홀 파격 프로모션',
      '신혼여행 조기 예약 추가 할인'
    ]
  },
  {
    id: 'daejeon-1',
    region: 'chungcheong',
    ad_location: '대전·충남 세종권',
    gather_name: '중부권 메가 웨딩&혼수 엑스포',
    ad_title: '충남·충북 전지역 예비부부 초대전',
    ad_date: '매주 주말 (사전예약제)',
    venue: '대전·충청 메가 컨벤션 센터',
    ad_thumbnail2: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80',
    ad_url: 'https://cpaad.co.kr/ad/chungcheong-mega/',
    target_url: 'https://cpaad.co.kr/ad/chungcheong-mega/wedding2026',
    benefits: [
      '사전예약 전원 무료입장',
      '웨딩 패키지 다이렉트 최저가 보장',
      '가전·가구 통합 패키지 캐시백'
    ]
  }
];
