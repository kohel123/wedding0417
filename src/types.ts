export interface AdItem {
  id: string | number;
  region?: string;
  ad_location?: string;
  gather_name?: string;
  ad_title?: string;
  ad_date?: string;
  ad_thumbnail?: string;
  ad_thumbnail2?: string;
  ad_url?: string;
  target_url: string;
  venue?: string;
  benefits?: string[];
  is_active?: boolean;
}

export interface ChecklistItem {
  id: string;
  category: '예산/일정' | '웨딩홀/스드메' | '촬영/혼수' | '예물/예복' | '본식/허니문';
  dDay: string;
  title: string;
  description: string;
  tip?: string;
  completed: boolean;
}

export interface BudgetItem {
  id: string;
  category: string;
  name: string;
  recommendedCost: number; // in 10,000 KRW (만원 단위)
  minCost: number;
  maxCost: number;
  userCost: number;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: '입장/신청' | '혜택/선물' | '상담/계약' | '주차/위치';
}
