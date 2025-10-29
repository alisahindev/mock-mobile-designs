import React from 'react';

export default function ConversationReplay2() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-text-primary dark:text-white">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex flex-col bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button
            aria-label="Close"
            className="text-text-primary dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
            Konuşma Tekrarı
          </h2>
        </div>
        {/* Progress Bar */}
        <div className="flex flex-col gap-2 px-4 pb-4 pt-2">
          <div className="rounded-full bg-black/10 dark:bg-white/10 h-1.5">
            <div className="h-1.5 rounded-full bg-primary" style={{ width: '35%' }}></div>
          </div>
          <p className="text-text-secondary dark:text-gray-400 text-xs font-medium leading-normal self-end">
            01:30 / 03:45
          </p>
        </div>
      </div>
      {/* Chat Interface */}
      <main className="flex flex-1 flex-col gap-4 p-4">
        {/* AI Message Bubble */}
        <div className="flex items-start gap-3 w-full max-w-md">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
            data-alt="AI assistant avatar with a geometric pattern"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt5LgyvYI5fk_6gCwvPX7iSc6Dx4ga1jDcKSAHqntIKqD6OjYdRkzPaG2CgdIyhIYEzTRKAnHxSFrdMOlnpEYx9P6FdOGkH2JWYa9681qypIAFZYfpppgOtwXT-pF8wemENbuKHoPI8-01SNHH94h71tECREIEScpzWuQJcuLYIDEOUQON80erTFtesFDkqHV6pHFMX9-0iLzC5aQpfYgy-hLaoQAqOmaNFGfPOoF76aJQbh6RysbbnDu7yE0bR4oGr37m0IgD9Pc")',
            }}
          ></div>
          <div className="flex flex-1 flex-col gap-1 items-start">
            <p className="text-text-secondary dark:text-gray-400 text-[13px] font-medium leading-normal">AI Assistant</p>
            <div className="flex flex-col gap-2 rounded-xl rounded-tl-none px-4 py-3 bg-ai-bubble dark:bg-sky-900/50 text-text-primary dark:text-white">
              <p className="text-base font-normal leading-relaxed">
                Merhaba! Bugün pratik yapmak istediğiniz senaryo nedir?
              </p>
              {/* Translated Text (example of toggled view) */}
              <div className="border-t border-black/10 dark:border-white/10 pt-2">
                <p className="text-base font-normal leading-relaxed text-text-secondary dark:text-gray-300 italic">
                  Hello! What scenario would you like to practice today?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button
                aria-label="Play AI message"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-lg text-text-primary dark:text-white">play_arrow</span>
              </button>
              <button
                aria-label="Translate message"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-lg text-text-primary dark:text-white">translate</span>
              </button>
            </div>
          </div>
        </div>
        {/* Student Message Bubble */}
        <div className="flex items-start gap-3 w-full max-w-md self-end justify-end">
          <div className="flex flex-1 flex-col gap-1 items-end">
            <p className="text-text-secondary dark:text-gray-400 text-[13px] font-medium leading-normal text-right">
              Öğrenci
            </p>
            <div className="rounded-xl rounded-tr-none px-4 py-3 bg-student-bubble dark:bg-pink-900/50 text-text-primary dark:text-white">
              <p className="text-base font-normal leading-relaxed">
                Bir restoranda yemek sipariş etme alıştırması yapmak istiyorum.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button
                aria-label="Play student message"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-lg text-text-primary dark:text-white">play_arrow</span>
              </button>
            </div>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
            data-alt="Student avatar with a simple letter 'S'"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfsJt0OsW_woVwxhEdcw5yq6zhjMfx6oYRWpSEt1eAdc0jISaKQLhBFXl3Mc57zpLpYSxw54cW4SJbUXOCHTz5oAtok2oS6mFw5iatF1pg1LH9xEfb9IBf2SLisDfcmjGgVowrU0nEmZKuUCtUDF0QCjB9h7lHmKUErBkrdHICbeog7DeJLsJeFD8mgkMyuH9bWdHIEEdOaUBXayW5OjzctL1Qv6-6C19AVcWThmQzgrRIW1vvdaAwOGcesBz5qJGdBQJ3CK9FIz8")',
            }}
          ></div>
        </div>
        {/* AI Message Bubble */}
        <div className="flex items-start gap-3 w-full max-w-md">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
            data-alt="AI assistant avatar with a geometric pattern"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiTza1wc6KbfuH6xKrwtEdI6G3ieRdBZNlNXaRU3xlyyi0w5ibvl1AEKlZH1UOmO2dIed9C88JgDGVN-HzlXTR3dULYPfjdlvS1cB9cJhF_XMwoiTh4xVfNuWhAqsUmLThPcfP_ap1MobvJETielfGpPYytBEiOlauWnmlf9pJofRiDUrjW5Af3OC37GapFZ7ujwDJ6xAOas2vtXlheyJjDFrLMR7Imvgpod9WOcLE8aDxO-aagSXwwSoXhlPTs30iXlN5WBBk_Z0")',
            }}
          ></div>
          <div className="flex flex-1 flex-col gap-1 items-start">
            <p className="text-text-secondary dark:text-gray-400 text-[13px] font-medium leading-normal">AI Assistant</p>
            <div className="rounded-xl rounded-tl-none px-4 py-3 bg-ai-bubble dark:bg-sky-900/50 text-text-primary dark:text-white">
              <p className="text-base font-normal leading-relaxed">
                Harika bir seçim! Restoran senaryosuna başlayalım. "İyi akşamlar, bir kişilik masanız var mı?" diyerek
                başlayabilirsiniz.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button
                aria-label="Play AI message"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-lg text-text-primary dark:text-white">pause</span>
              </button>
              <button
                aria-label="Translate message"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-lg text-text-primary dark:text-white">translate</span>
              </button>
            </div>
          </div>
        </div>
        {/* Student Message Bubble */}
        <div className="flex items-start gap-3 w-full max-w-md self-end justify-end">
          <div className="flex flex-1 flex-col gap-1 items-end">
            <p className="text-text-secondary dark:text-gray-400 text-[13px] font-medium leading-normal text-right">
              Öğrenci
            </p>
            <div className="rounded-xl rounded-tr-none px-4 py-3 bg-student-bubble dark:bg-pink-900/50 text-text-primary dark:text-white">
              <p className="text-base font-normal leading-relaxed">İyi akşamlar, bir kişilik masanız var mı?</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button
                aria-label="Play student message"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-lg text-text-primary dark:text-white">play_arrow</span>
              </button>
            </div>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
            data-alt="Student avatar with a simple letter 'S'"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZh0UnYpE7WXhWMXYS8cbydFXHIx2NfJotM9d8PIRUA9vQR0961KElYQ3goGheyCckxFitiTVcyRipzkcF0lyrh46LROSr4J960jb6OD_VOC5JJV-8Q5ONcZ9l2ZWkBvPFXOnTOBULSKt2iECV_0DNbhJ98VBZUWoz1NS3WexRa6fNpuP1OVGtWgSSJ0vArIuXD8HYkH7rglnle6E0edIbav5GOMcvz-V3BD0h-y9L96nn8aZkTzwJznndL_YSCxppuBCtNZj3imc")',
            }}
          ></div>
        </div>
      </main>
    </div>
  );
}