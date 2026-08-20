import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ExpoScheduleList } from './components/ExpoScheduleList';
import { ExpoBenefits } from './components/ExpoBenefits';
import { WeddingPreparationRoadmap } from './components/WeddingPreparationRoadmap';
import { InteractiveChecklist } from './components/InteractiveChecklist';
import { BudgetCalculator } from './components/BudgetCalculator';
import { ExpoGuideAndTips } from './components/ExpoGuideAndTips';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { AdItem } from './types';

export default function App() {
  const [cheonanExpos, setCheonanExpos] = useState<AdItem[]>([]);
  const [chungcheongExpos, setChungcheongExpos] = useState<AdItem[]>([]);
  const [allExpos, setAllExpos] = useState<AdItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchExposData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/expos');
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setCheonanExpos(data.cheonan_expos || []);
        setChungcheongExpos(data.chungcheong_expos || []);
        setAllExpos(data.all_advertisements || []);
        setLastUpdated(data.updated_at || new Date().toISOString());
      }
    } catch (err) {
      console.warn('Failed to fetch realtime expos from server route, using initial state:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExposData();
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const featuredExpo = cheonanExpos[0] || chungcheongExpos[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Sticky Header */}
      <Header
        onScrollTo={handleScrollTo}
        cheonanCount={cheonanExpos.length}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroBanner
          onExploreClick={() => handleScrollTo('schedule')}
          onChecklistClick={() => handleScrollTo('checklist')}
          totalExposCount={cheonanExpos.length}
        />

        {/* Real-time Expo Schedule List with affiliate link */}
        <ExpoScheduleList
          cheonanExpos={cheonanExpos}
          chungcheongExpos={chungcheongExpos}
          allExpos={allExpos}
          isLoading={isLoading}
          onRefresh={fetchExposData}
          lastUpdated={lastUpdated}
        />

        {/* 6 Key Benefits */}
        <ExpoBenefits />

        {/* Wedding Preparation Roadmap (순서/절차/기간) */}
        <WeddingPreparationRoadmap />

        {/* Interactive Checklist (체크리스트) */}
        <InteractiveChecklist />

        {/* Budget Calculator (비용 계산기) */}
        <BudgetCalculator />

        {/* Expo Guide, Venue, Cautions & Application Method (시간/입장료/주차/주의사항/신청방법) */}
        <ExpoGuideAndTips />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Free Ticket CTA */}
      <FloatingCTA
        onScheduleClick={() => handleScrollTo('schedule')}
        featuredExpo={featuredExpo}
      />
    </div>
  );
}
