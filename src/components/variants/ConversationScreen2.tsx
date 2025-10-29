import React from 'react';

export default function ConversationScreen2() {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden">
      <header className="absolute top-0 z-20 w-full">
        <div className="flex items-center p-4 justify-between">
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-surface/80 backdrop-blur-sm text-text-main shadow-soft">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <div className="flex h-5 items-center justify-center px-4">
          <div className="w-24 h-1.5 rounded-full bg-pastel-blue/40 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/2 animate-pulse rounded-full bg-pastel-blue"></div>
          </div>
        </div>
      </header>
      <div className="absolute top-6 left-1/2 z-30 -translate-x-1/2 transform opacity-0 animate-pulse">
        <div className="flex items-center justify-center rounded-full bg-surface px-4 py-2 shadow-soft">
          <p className="text-sm font-medium text-text-main">90 saniye kaldı</p>
        </div>
      </div>
      <main className="flex-1 overflow-y-auto pt-28 pb-48">
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-3 p-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
              data-alt="AI Tutor avatar with a gradient background"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAY2eT118e_V8TGhbrC554EKFjlkqIdf7_2fDYzWLJ5T22CS7s6OSsQKQ7p9Zj0IMR4iKcjJ-Ho4TifeEw2zAyBWiqba9XUnZFzLs3bLBzGY_E83halDSlsci80KFnxw83w-bA7CvroEzQKpevvhKimGItE6myBZux73nHlBG-T99UeYrb7mavFNREq7Lztq5MYNGp8iA1ndlGFABtIwIbF4IXbL8cHLlPqKtRgOzaILw_Sqb8xgwWGo-c4BjXUv8ZSZ7uCeEDMAaU")',
              }}
            ></div>
            <div className="flex flex-1 flex-col gap-1 items-start">
              <p className="text-text-subtle text-sm font-normal leading-normal max-w-[360px]">AI Tutor</p>
              <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl rounded-bl-none px-4 py-3 bg-surface text-text-main shadow-soft">
                Sürükleyici konuşma pratiğimize hoş geldin! Hadi başlayalım. Okul projemizle ilgili bir sohbete nasıl
                başlarsın?
              </p>
            </div>
          </div>
          <div className="flex items-end gap-3 p-4 justify-end">
            <div className="flex flex-1 flex-col gap-1 items-end">
              <p className="text-text-subtle text-sm font-normal leading-normal max-w-[360px] text-right">Öğrenci</p>
              <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl rounded-br-none px-4 py-3 bg-pastel-purple text-pastel-purple-darker shadow-soft">
                Merhaba! Sunum için bazı fikirler üzerinde beyin fırtınası yaparak başlayabileceğimizi düşünüyordum.
              </p>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
              data-alt="Student avatar with a pastel background"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWplyZHGXHXTpVyGOSYGLLy7nZ4p1i1opfaLOoyGt3QAz9-Aa3j4UFz87JUw6f6RE4BHpIE3HG5X03HoQoNy_4THaPilx5Kdsiu3nVKbRNq-iEyWnjqjmtBela73Ese94PJnxkFNm6iKBiI-b1QzGJn1a7TCmZs6e97fFZPHyqmc8Z8BpgThEm4KQFjq3G0UchZAuuTPaQZSEuJ3yldfI3AFndkCWD4SwFFPLStymdnuxAAQYdi4WPApSmNSVon7WNYvD6PIa_u_I")',
              }}
            ></div>
          </div>
          <div className="flex items-end gap-3 p-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
              data-alt="AI Tutor avatar with a gradient background"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWa-J_xqZK65w_FFev9cWOKiyo0MzM27WJYFCCaiubaI31cDR9Lm8GxK-n8fI2R1oCSW1YzUbe9uVOitLyMdFcQ5DnszszzaWW9t8ygmc49_6KC2Dpa-RIHaZ9iqZ_bho42XRSqkVS1cfmhnb5akGxvKbUCXB3I4ebYONTzTm4G1c5UZGH-71axaKmJa_fXOmc44p3C4j6Uh6JgMdOryW-stgBAsbEsI56lpaBEK5e8v3nxrtwqDgxEzfkFKhEuK22gvvrAV_0WgY")',
              }}
            ></div>
            <div className="flex flex-1 flex-col gap-1 items-start">
              <p className="text-text-subtle text-sm font-normal leading-normal max-w-[360px]">AI Tutor</p>
              <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl rounded-bl-none px-4 py-3 bg-surface text-text-main shadow-soft">
                Harika fikir! Ne tür konuları veya görselleri dahil etmeliyiz?
              </p>
            </div>
          </div>
          <div className="flex items-end gap-3 p-4 justify-end opacity-40 transition-opacity duration-500">
            <div className="flex flex-1 flex-col gap-1 items-end">
              <p className="text-text-subtle text-sm font-normal leading-normal max-w-[360px] text-right">Öğrenci</p>
              <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl rounded-br-none px-4 py-3 bg-pastel-purple text-pastel-purple-darker shadow-soft">
                Belki ana bulgularımızı gösteren bazı grafikler ekleyebiliriz...
              </p>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
              data-alt="Student avatar with a pastel background"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGeVSUARvUFC1-N-dte1SaEmqo3CzhW8m2WeRQesNsGysz757QUU0xHGB7SQzw29DpO5y9ybKdcpHgg9dgGj1J99cPCya_F90vBfaY2zXzQNRZFYJZCpG76C6D2ST-anyYO6woeHmCT_YEG0vY8xoMHLsC96cjNJlQQeO3SX7GN9GW9XXAOacASLkFv67ppdUFuO_GnuTH57wz9BCvJoiwq_XYxHJ-AtAyobEthmLPbbQtdJRl9M-U4BRAuDjk9ytz6hNqpdC6w-c")',
              }}
            ></div>
          </div>
        </div>
      </main>
      <footer className="absolute bottom-0 w-full p-6 flex flex-col items-center gap-4 bg-gradient-to-t from-cream-bg to-transparent">
        <button className="flex items-center justify-center gap-2 rounded-full h-10 bg-surface/80 backdrop-blur-sm px-4 py-2 shadow-soft text-text-main">
          <span className="material-symbols-outlined">lightbulb</span>
          <span className="text-sm font-medium">İpucu</span>
        </button>
        <div className="flex justify-center">
          <button className="flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-pastel-green text-text-main shadow-soft">
            <span className="material-symbols-outlined text-4xl">mic</span>
          </button>
        </div>
      </footer>
    </div>
  );
}