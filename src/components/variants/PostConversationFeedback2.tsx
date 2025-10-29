import React from 'react';

export default function PostConversationFeedback2() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-hidden">
      <header className="flex flex-col items-center justify-center pt-10 pb-6 px-4 bg-background sticky top-0 z-10">
        <h1 className="text-text-primary tracking-tight text-2xl font-bold text-center">
          🏆 Harika iş! Bu sohbeti başardın!
        </h1>
      </header>
      <main className="flex-1 overflow-y-auto pb-40 px-4">
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-soft">
            <div className="flex items-center justify-center rounded-lg bg-accent-green shrink-0 size-10">
              <span className="material-symbols-outlined text-accent-green-content">timer</span>
            </div>
            <p className="text-text-primary text-base font-medium flex-1 truncate">4 dakika 32 saniye konuştun</p>
            <span className="material-symbols-outlined text-text-secondary">chevron_right</span>
          </div>
          <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-soft">
            <div className="flex items-center justify-center rounded-lg bg-accent-green shrink-0 size-10">
              <span className="material-symbols-outlined text-accent-green-content">task_alt</span>
            </div>
            <p className="text-text-primary text-base font-medium flex-1 truncate">8 hedefi tamamladın!</p>
            <span className="material-symbols-outlined text-text-secondary">chevron_right</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-text-primary text-xl font-bold tracking-tight px-2">Pratik Yapılacaklar</h2>
          <div className="flex flex-col items-stretch justify-start rounded-xl bg-card p-4 shadow-soft">
            <div className="flex w-full grow flex-col items-stretch justify-center gap-3">
              <div>
                <p className="text-text-secondary text-sm font-normal">Şunu dedin:</p>
                <p className="text-text-primary text-base font-medium">'Could you tell me where is the library?'</p>
              </div>
              <div className="flex items-start gap-2">
                <p className="text-text-primary text-base font-normal pt-0.5">✏️</p>
                <div className="flex-1">
                  <p className="text-text-secondary text-sm font-normal">Şunu dene:</p>
                  <p className="text-text-primary text-base font-medium">'Could you tell me where the library is?'</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-between mt-2">
                <button className="flex items-center justify-center shrink-0 size-10 rounded-full bg-primary/20 text-primary-content">
                  <span className="material-symbols-outlined">volume_up</span>
                </button>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-primary-content text-sm font-semibold">
                  <span className="truncate">Pratik Yap</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start rounded-xl bg-card p-4 shadow-soft">
            <div className="flex w-full grow flex-col items-stretch justify-center gap-3">
              <div>
                <p className="text-text-secondary text-sm font-normal">Şunu dedin:</p>
                <p className="text-text-primary text-base font-medium">'I am agree with you.'</p>
              </div>
              <div className="flex items-start gap-2">
                <p className="text-text-primary text-base font-normal pt-0.5">✏️</p>
                <div className="flex-1">
                  <p className="text-text-secondary text-sm font-normal">Şunu dene:</p>
                  <p className="text-text-primary text-base font-medium">'I agree with you.'</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-between mt-2">
                <button className="flex items-center justify-center shrink-0 size-10 rounded-full bg-primary/20 text-primary-content">
                  <span className="material-symbols-outlined">volume_up</span>
                </button>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-primary-content text-sm font-semibold">
                  <span className="truncate">Pratik Yap</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 rounded-xl bg-card p-5 shadow-soft">
            <p className="text-text-primary text-base font-medium">Ne kadar güvende hissediyorsun?</p>
            <div className="flex items-center justify-center gap-4">
              <button className="text-4xl transition-transform duration-200 hover:scale-110 active:scale-95 grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                😟
              </button>
              <button className="text-4xl transition-transform duration-200 hover:scale-110 active:scale-95 grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                😐
              </button>
              <button className="text-4xl transition-transform duration-200 scale-110 active:scale-95">😊</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-background to-transparent">
        <div className="flex items-center gap-3">
          <button className="flex h-12 w-full items-center justify-center rounded-full border border-primary/50 bg-card text-primary-content text-base font-semibold">
            Tekrar Oynat
          </button>
          <button className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-primary-content text-base font-bold">
            Bitti
          </button>
        </div>
      </footer>
    </div>
  );
}