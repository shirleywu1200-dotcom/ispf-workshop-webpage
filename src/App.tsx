import React from 'react';
import { ShieldCheck, Target, Users, Calendar, RefreshCw, Lightbulb, FileSpreadsheet, Map, ListChecks, ArrowRight } from 'lucide-react';

// --- Helper Components ---
const Section = ({ children, className = '' }) => (
  <section className={`py-16 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-4xl mx-auto">{children}</div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
    {children}
  </h2>
);

// --- Main Page Component ---
const ISPFWorkshopPageFinalAmber = () => {
  return (
    <div className="bg-slate-50 font-sans">
      {/* --- Hero Section --- */}
      <header className="bg-teal-600 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">ISPF 戰略獲利實戰工作坊</h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-8">
            一趟市場上獨一無二的學習旅程，與您一同釐清策略、看見獲利
          </p>
          <div className="inline-block bg-black bg-opacity-25 text-white font-semibold py-3 px-6 rounded-lg">
            <p className="text-lg tracking-wide">開課日期：12/21 (日)・12/22 (一)・1/11 (日)</p>
          </div>
        </div>
      </header>

      {/* --- Pain Points Section --- */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">您是否也正思索著...</h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-600">
            <div className="bg-white p-6 rounded-lg shadow-sm">營收成長，獲利卻沒跟上？</div>
            <div className="bg-white p-6 rounded-lg shadow-sm">團隊很努力，力量卻總被分散？</div>
            <div className="bg-white p-6 rounded-lg shadow-sm">面對市場變化，總讓人猶豫不決？</div>
          </div>
          <p className="mt-10 text-lg text-slate-700 max-w-2xl mx-auto">
            這趟旅程，將陪伴您撥開數字迷霧，找到清晰的前行路徑。
          </p>
        </div>
      </Section>

      {/* --- The Journey Section --- */}
      <Section className="bg-white">
        <SectionTitle>一趟完整的【陪伴式學習旅程】</SectionTitle>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-amber-400 p-4 rounded-full mb-4">
              <Calendar className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">課前暖身</h3>
            <p className="text-slate-600">線上引導，高效完成資料準備。</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-amber-400 p-4 rounded-full mb-4">
              <Users className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">課中實戰</h3>
            <p className="text-slate-600">三日工作坊，與團隊共創戰略藍圖。</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-amber-400 p-4 rounded-full mb-4">
              <RefreshCw className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">課後同行</h3>
            <p className="text-slate-600">兩週策略校準，確保學習確實落地。</p>
          </div>
        </div>
      </Section>

      {/* --- Agenda Section --- */}
      <Section>
        <SectionTitle>三日實戰旅程</SectionTitle>
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Day 1: 釐清我們的戰場 (Where to Play)</h3>
            <p className="text-slate-600 text-lg">從數據洞察市場，定位最有價值的戰略位置。</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Day 2: 打造我們的獲利引擎 (How to Win)</h3>
            <p className="text-slate-600 text-lg">建立企業專屬的「獲利模擬器」，讓決策影響一目了然。</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Day 3: 擘劃我們的行動地圖 (How to Execute)</h3>
            <p className="text-slate-600 text-lg">將策略轉化為具體行動方案，賦予團隊清晰的前進方向。</p>
          </div>
        </div>
      </Section>

      {/* --- Takeaways Section --- */}
      <Section className="bg-white">
        <SectionTitle>旅程結束後，您將帶走</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center"><FileSpreadsheet className="h-10 w-10 text-teal-600 mb-3" /><h4 className="font-semibold text-slate-700">營運損益模擬器</h4></div>
          <div className="flex flex-col items-center"><Map className="h-10 w-10 text-teal-600 mb-3" /><h4 className="font-semibold text-slate-700">團隊策略地圖</h4></div>
          <div className="flex flex-col items-center"><ListChecks className="h-10 w-10 text-teal-600 mb-3" /><h4 className="font-semibold text-slate-700">部門行動方案</h4></div>
          <div className="flex flex-col items-center"><ShieldCheck className="h-10 w-10 text-teal-600 mb-3" /><h4 className="font-semibold text-slate-700">方向一致的核心團隊</h4></div>
        </div>
      </Section>
      
      {/* --- Final CTA Section --- */}
      <Section>
        <div className="text-center bg-teal-600 text-white p-10 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">一份給您和您核心團隊的誠摯邀請</h2>
          <p className="text-lg text-teal-100 mb-8">讓我們陪您一起，將模糊的未來，轉化為清晰的作戰地圖。</p>
          <a 
            href="[您的Google表單報名網址]" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-300 transition-colors inline-flex items-center justify-center mx-auto"
          >
            立即報名，開啟轉型之旅 <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="text-center py-6 bg-slate-100">
        <p className="text-slate-500">© 2025 [大梅老師/您的轉型陪伴顧問]. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ISPFWorkshopPageFinalAmber;
