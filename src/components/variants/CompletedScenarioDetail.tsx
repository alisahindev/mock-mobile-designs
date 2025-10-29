import React from 'react';

export default function CompletedScenarioDetail() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex flex-col grow pb-28">
        {/* TopAppBar */}
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
          <div className="text-dark-charcoal dark:text-background-light flex size-12 shrink-0 items-center justify-start -ml-3">
            <span className="material-symbols-outlined text-3xl">arrow_back</span>
          </div>
        </div>

        {/* HeaderImage */}
        <div className="@container">
          <div className="px-4 py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[218px]"
              data-alt="Vibrant abstract gradient representing a scenario in a cafe."
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAt3_Z6xANlWgbB8lEcdO6nnS3DTNa88w6sfte5CtBY9rk8fo2Wd4LzWH_-kaxbtP5_j7dk4gNf9vGhVclmLV3TyC8cTzk6UHtGiv4njdW4tp_SrWWKGAcV4ai81uDMS7Xre5-FbTkNueL64912Xwxxj1h-CyQPynVkEVwFrsyS-kS8ZYT8rSKJ8Xfd-WwI0SUSKf24RCuINKJoMwTMgxkcyTN7lXq5_GcI7DBMey29KApPmGCOILkxQstveqE8vr7TdSI76yOv7Gk")',
              }}
            ></div>
          </div>
        </div>

        {/* HeadlineText (Scenario Title) */}
        <h1 className="text-dark-charcoal dark:text-background-light tracking-tight text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-4">
          Kafede Sipariş Verme
        </h1>

        {/* Celebration Header & Metrics */}
        <div className="px-4">
          <div className="bg-light-lavender dark:bg-background-dark dark:border dark:border-primary/20 rounded-xl p-4">
            <h2 className="text-dark-charcoal dark:text-background-light text-[22px] font-bold leading-tight tracking-[-0.015em] text-center pb-4">
              Harika bir iş çıkardın!
            </h2>
            <div className="grid grid-cols-[auto_1fr] gap-x-4">
              <div className="col-span-2 flex items-center border-t border-t-lavender dark:border-t-primary/20 py-4">
                <span className="material-symbols-outlined text-muted-gray dark:text-primary/70 mr-3">timer</span>
                <p className="text-muted-gray dark:text-background-light/80 text-sm font-normal leading-normal grow">
                  Konuşma süresi
                </p>
                <p className="text-dark-charcoal dark:text-background-light text-sm font-bold leading-normal">
                  5 dakika 32 saniye
                </p>
              </div>
              <div className="col-span-2 flex items-center border-t border-t-lavender dark:border-t-primary/20 py-4">
                <span className="material-symbols-outlined text-muted-gray dark:text-primary/70 mr-3">
                  check_circle
                </span>
                <p className="text-muted-gray dark:text-background-light/80 text-sm font-normal leading-normal grow">
                  Ulaşılan hedefler
                </p>
                <p className="text-dark-charcoal dark:text-background-light text-sm font-bold leading-normal">3 / 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="flex flex-col gap-4 p-4 mt-4">
          {/* Accordion 1: Scenario Details */}
          <details className="group bg-white dark:bg-background-dark dark:border dark:border-primary/20 rounded-xl overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <h3 className="text-base font-bold text-dark-charcoal dark:text-background-light">Senaryo Detayları</h3>
              <span className="material-symbols-outlined text-muted-gray dark:text-primary/70 transition-transform duration-300 group-open:rotate-90">
                chevron_right
              </span>
            </summary>
            <div className="px-4 pb-4">
              <div className="flex items-start gap-4 py-3 border-t border-t-slate-200 dark:border-t-primary/20">
                <span className="material-symbols-outlined text-muted-gray dark:text-primary/70 mt-1">location_on</span>
                <div>
                  <h4 className="font-bold text-dark-charcoal dark:text-background-light">Ortam</h4>
                  <p className="text-muted-gray dark:text-background-light/80 text-sm mt-1">
                    Yoğun bir öğle saatinde, modern bir şehir merkezindeki bir kafe.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-3 border-t border-t-slate-200 dark:border-t-primary/20">
                <span className="material-symbols-outlined text-muted-gray dark:text-primary/70 mt-1">person</span>
                <div>
                  <h4 className="font-bold text-dark-charcoal dark:text-background-light">Rolünüz</h4>
                  <p className="text-muted-gray dark:text-background-light/80 text-sm mt-1">
                    Arkadaşınızla buluşmak için beklerken bir kahve ve bir kruvasan sipariş etmek isteyen bir müşteri.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-3 border-t border-t-slate-200 dark:border-t-primary/20">
                <span className="material-symbols-outlined text-muted-gray dark:text-primary/70 mt-1">smart_toy</span>
                <div>
                  <h4 className="font-bold text-dark-charcoal dark:text-background-light">AI Rolü</h4>
                  <p className="text-muted-gray dark:text-background-light/80 text-sm mt-1">
                    Siparişinizi alan cana yakın ama biraz meşgul bir barista.
                  </p>
                </div>
              </div>
            </div>
          </details>
          {/* Accordion 2: Review & Practice */}
          <details className="group bg-white dark:bg-background-dark dark:border dark:border-primary/20 rounded-xl overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <h3 className="text-base font-bold text-dark-charcoal dark:text-background-light">İnceleme &amp; Pratik</h3>
              <span className="material-symbols-outlined text-muted-gray dark:text-primary/70 transition-transform duration-300 group-open:rotate-90">
                chevron_right
              </span>
            </summary>
            <div className="px-4 pb-4">
              <h4 className="font-bold text-dark-charcoal dark:text-background-light pt-3">Gelişimleriniz</h4>
              <div className="flex flex-col gap-3 mt-3">
                {/* Correction Card */}
                <div className="border border-slate-200 dark:border-primary/20 rounded-lg p-3">
                  <p className="text-sm text-muted-gray dark:text-background-light/80 line-through">
                    "Ben bir kahve alabilir."
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-400 font-semibold mt-1">
                    "Ben bir kahve alabilir miyim?"
                  </p>
                  <button className="mt-2 flex items-center justify-center size-8 rounded-full bg-soft-teal/20 text-soft-teal dark:bg-primary/20 dark:text-primary">
                    <span className="material-symbols-outlined text-base">play_arrow</span>
                  </button>
                </div>
                {/* Correction Card */}
                <div className="border border-slate-200 dark:border-primary/20 rounded-lg p-3">
                  <p className="text-sm text-muted-gray dark:text-background-light/80 line-through">"Ne kadar para?"</p>
                  <p className="text-sm text-green-700 dark:text-green-400 font-semibold mt-1">"Ne kadar tuttu?"</p>
                  <button className="mt-2 flex items-center justify-center size-8 rounded-full bg-soft-teal/20 text-soft-teal dark:bg-primary/20 dark:text-primary">
                    <span className="material-symbols-outlined text-base">play_arrow</span>
                  </button>
                </div>
              </div>
              <h4 className="font-bold text-dark-charcoal dark:text-background-light pt-5 mt-3 border-t border-t-slate-200 dark:border-t-primary/20">
                Yardımcı İfadeler
              </h4>
              <ul className="flex flex-col gap-1 mt-3">
                <li className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50 dark:hover:bg-primary/10">
                  <p className="text-sm text-dark-charcoal dark:text-background-light">"Bir latte alacaktım, lütfen."</p>
                  <button className="flex items-center justify-center size-8 rounded-full bg-soft-teal/20 text-soft-teal dark:bg-primary/20 dark:text-primary shrink-0">
                    <span className="material-symbols-outlined text-base">play_arrow</span>
                  </button>
                </li>
                <li className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50 dark:hover:bg-primary/10">
                  <p className="text-sm text-dark-charcoal dark:text-background-light">
                    "Yanında bir de kruvasan alabilir miyim?"
                  </p>
                  <button className="flex items-center justify-center size-8 rounded-full bg-soft-teal/20 text-soft-teal dark:bg-primary/20 dark:text-primary shrink-0">
                    <span className="material-symbols-outlined text-base">play_arrow</span>
                  </button>
                </li>
                <li className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50 dark:hover:bg-primary/10">
                  <p className="text-sm text-dark-charcoal dark:text-background-light">
                    "Burada mı içeceğim, paket mi?"
                  </p>
                  <button className="flex items-center justify-center size-8 rounded-full bg-soft-teal/20 text-soft-teal dark:bg-primary/20 dark:text-primary shrink-0">
                    <span className="material-symbols-outlined text-base">play_arrow</span>
                  </button>
                </li>
              </ul>
            </div>
          </details>
        </div>

        {/* Speaking Confidence Display */}
        <div className="px-4 mt-2">
          <div className="bg-dusty-rose/30 dark:bg-primary/20 rounded-xl p-4 flex items-center gap-4">
            <span className="text-3xl">😊</span>
            <div>
              <p className="text-dark-charcoal dark:text-background-light font-bold">Harika!</p>
              <p className="text-muted-gray dark:text-background-light/80 text-sm">
                Konuşurken kendimi güvende hissettim.
              </p>
            </div>
          </div>
        </div>

        {/* Replay Conversation Button */}
        <div className="p-4 mt-2">
          <button className="w-full bg-soft-teal dark:bg-primary text-white dark:text-background-dark font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform duration-150">
            <span className="material-symbols-outlined">replay</span>
            Konuşmamı Tekrar Oynat
          </button>
        </div>
      </div>
      {/* Bottom Tab Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-200 dark:border-primary/20">
        <div className="flex justify-around items-center h-20">
          <div className="flex flex-col items-center gap-1 text-muted-gray dark:text-primary/70">
            <span className="material-symbols-outlined">home</span>
            <span className="text-xs font-medium">Ana Sayfa</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-soft-teal dark:text-primary font-bold">
            <span className="material-symbols-outlined">checklist</span>
            <span className="text-xs">Tamamlananlar</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-muted-gray dark:text-primary/70">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-xs font-medium">İlerleme</span>
          </div>
        </div>
      </div>
    </div>
  );
}