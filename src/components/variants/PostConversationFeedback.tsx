import React from 'react';

export default function PostConversationFeedback() {
  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-md mx-auto flex-col overflow-hidden">
      <header className="sticky top-0 z-10 bg-background-light pt-6 pb-2">
        <h1 className="text-text-primary tracking-light text-[32px] font-bold leading-tight px-4 text-center">
          🏆 Harika iş! Bu sohbeti başardın!
        </h1>
      </header>
      <div className="flex-shrink-0 px-4 pt-4">
        <div className="flex items-center gap-4 min-h-14">
          <div className="text-text-secondary flex items-center justify-center rounded-lg bg-button-secondary-bg shrink-0 size-10">
            <span className="material-symbols-outlined">timer</span>
          </div>
          <p className="text-text-primary text-base font-normal leading-normal flex-1 truncate">
            4 dakika 32 saniye konuştun
          </p>
        </div>
        <div className="flex items-center gap-4 min-h-14">
          <div className="text-text-secondary flex items-center justify-center rounded-lg bg-button-secondary-bg shrink-0 size-10">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <p className="text-text-primary text-base font-normal leading-normal flex-1 truncate">8 hedefi tamamladın!</p>
        </div>
      </div>
      <main className="flex-1 overflow-y-auto px-4 pb-36">
        <h2 className="text-text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5 pb-3">
          Pratik Yapılacaklar
        </h2>
        <div className="py-2">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-soft bg-card-background">
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
                ✏️ Şunu dene: 'Could you please repeat that?'
              </p>
              <p className="text-text-secondary text-base font-normal leading-normal">Şunu dedin: 'Can you say it again?'</p>
              <div className="flex items-center gap-3 justify-end pt-2">
                <button className="flex min-w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary-light text-primary text-sm font-medium leading-normal hover:bg-[#DBC1F4]">
                  <span className="material-symbols-outlined text-xl">volume_up</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal hover:opacity-90">
                  <span className="truncate">Pratik Yap</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-soft bg-card-background">
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
                ✏️ Şunu dene: 'I'm looking for a jacket.'
              </p>
              <p className="text-text-secondary text-base font-normal leading-normal">Şunu dedin: 'I want jacket.'</p>
              <div className="flex items-center gap-3 justify-end pt-2">
                <button className="flex min-w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary-light text-primary text-sm font-medium leading-normal hover:bg-[#DBC1F4]">
                  <span className="material-symbols-outlined text-xl">volume_up</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal hover:opacity-90">
                  <span className="truncate">Pratik Yap</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-soft bg-card-background">
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
                ✏️ Şunu dene: 'What time does the store close?'
              </p>
              <p className="text-text-secondary text-base font-normal leading-normal">Şunu dedin: 'When close store?'</p>
              <div className="flex items-center gap-3 justify-end pt-2">
                <button className="flex min-w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary-light text-primary text-sm font-medium leading-normal hover:bg-[#DBC1F4]">
                  <span className="material-symbols-outlined text-xl">volume_up</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal hover:opacity-90">
                  <span className="truncate">Pratik Yap</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pb-4">
          <p className="text-center text-base font-medium text-text-primary mb-4">Ne kadar güvende hissediyorsun?</p>
          <div className="flex items-center justify-center gap-4">
            <button className="text-4xl transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light rounded-full p-1 opacity-50">
              😟
            </button>
            <button className="text-4xl transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light rounded-full p-1 ring-2 ring-primary scale-110">
              😐
            </button>
            <button className="text-4xl transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light rounded-full p-1 opacity-50">
              😊
            </button>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto p-4 z-10 bg-background-light border-t border-slate-200">
        <div className="flex items-center gap-3">
          <button className="flex flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-4 bg-button-secondary-bg text-text-primary text-base font-medium leading-normal hover:bg-slate-300">
            <span className="truncate">Tekrar Oynat</span>
          </button>
          <button className="flex flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-4 bg-primary text-white text-base font-medium leading-normal hover:opacity-90">
            <span className="truncate">Bitti</span>
          </button>
        </div>
      </footer>
    </div>
  );
}