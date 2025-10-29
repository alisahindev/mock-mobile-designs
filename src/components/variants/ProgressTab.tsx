import React from 'react';

export default function ProgressTab() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-soft-cream/80 dark:bg-background-dark/80 p-4 pb-2 backdrop-blur-sm">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User profile avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD66WP9ePsOt8ruwDLYq0QkQ1uYzJiNLvYqJ0DH8k7s3nfkAsiJ9y7LGLNy7d8slt8PFG3dN18fubGrF08OtJdw5apkQJkUehsLeFTYaqQqMJt401Pd2Cq97o2ZjzRsZJ3VcpaPuoThz8LUI7ea7JObguBGH7t-tVftI0671C--uffCxys8YWNzw8-7F47Ues_VPpg3Zy8nNZnmc-rRGwd3DDmi0DcfVgM7B0JOWaNRxcBtmqxtf8o6nBg6XoX3CvaTE-T0yv_ch48")',
            }}
          ></div>
        </div>
        <h1 className="text-slate-gray dark:text-background-light text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          İlerlemen
        </h1>
        <div className="size-12"></div> {/* Spacer for centering title */}
      </header>
      {/* Main Content */}
      <main className="flex-grow pb-24">
        {/* Fixed Top Badge Card */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-4 rounded-xl bg-white dark:bg-slate-gray/20 p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-pastel-peach">trophy</span>
              <div className="flex flex-col">
                <p className="text-slate-gray dark:text-background-light text-base font-bold leading-tight">
                  12 tamamlandı 🔥
                </p>
                <p className="text-slate-gray/70 dark:text-background-light/70 text-sm font-normal leading-normal">
                  Harika gidiyorsun, devam et!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Accordions Section */}
        <div className="flex flex-col p-4 pt-0 gap-3">
          {/* Accordion 1: Speaking Time */}
          <details className="flex flex-col rounded-xl border border-slate-gray/10 dark:border-background-light/10 bg-white dark:bg-slate-gray/20 px-4 py-2 group" open>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sage-green">timer</span>
                <p className="text-slate-gray dark:text-background-light text-sm font-medium leading-normal">
                  Konuşma Süresi
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-slate-gray/70 dark:text-background-light/70 text-sm font-normal leading-normal hidden sm:block">
                  2s 5dk – geçen haftadan 15dk fazla!
                </p>
                <span className="material-symbols-outlined text-slate-gray dark:text-background-light transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </div>
            </summary>
            <div className="flex flex-wrap gap-4 py-4">
              <div className="flex w-full flex-1 flex-col gap-2">
                <p className="text-slate-gray dark:text-background-light text-base font-medium leading-normal">
                  Haftalık Konuşma Süresi
                </p>
                <p className="text-slate-gray dark:text-background-light tracking-light text-3xl font-bold leading-tight truncate">
                  2s 5dk
                </p>
                <div className="flex gap-1">
                  <p className="text-slate-gray/70 dark:text-background-light/70 text-base font-normal leading-normal">
                    Bu Hafta
                  </p>
                  <p className="text-sage-green text-base font-medium leading-normal">+15dk</p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg
                    fill="none"
                    height="148"
                    preserveAspectRatio="none"
                    viewBox="-3 0 478 150"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_chart)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#B2D8B2"
                      strokeLinecap="round"
                      strokeWidth="3"
                    ></path>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
                        <stop stopColor="#B2D8B2" stopOpacity="0.3"></stop>
                        <stop offset="1" stopColor="#B2D8B2" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-slate-gray/70 dark:text-background-light/70 text-xs font-bold leading-normal tracking-wider">
                      Pzt
                    </p>
                    <p className="text-slate-gray/70 dark:text-background-light/70 text-xs font-bold leading-normal tracking-wider">
                      Sal
                    </p>
                    <p className="text-slate-gray/70 dark:text-background-light/70 text-xs font-bold leading-normal tracking-wider">
                      Çar
                    </p>
                    <p className="text-slate-gray/70 dark:text-background-light/70 text-xs font-bold leading-normal tracking-wider">
                      Per
                    </p>
                    <p className="text-slate-gray/70 dark:text-background-light/70 text-xs font-bold leading-normal tracking-wider">
                      Cum
                    </p>
                    <p className="text-slate-gray/70 dark:text-background-light/70 text-xs font-bold leading-normal tracking-wider">
                      Cmt
                    </p>
                    <p className="text-slate-gray/70 dark:text-background-light/70 text-xs font-bold leading-normal tracking-wider">
                      Paz
                    </p>
                  </div>
                </div>
                <p className="text-slate-gray/70 dark:text-background-light/70 text-base font-normal leading-normal pt-1">
                  Tutarlılığını koruman, akıcılığını artırmana yardımcı oluyor. Harika iş!
                </p>
              </div>
            </div>
          </details>
          {/* Accordion 2: Speaking Confidence */}
          <details className="flex flex-col rounded-xl border border-slate-gray/10 dark:border-background-light/10 bg-white dark:bg-slate-gray/20 px-4 py-2 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-pastel-peach">sentiment_satisfied</span>
                <p className="text-slate-gray dark:text-background-light text-sm font-medium leading-normal">
                  Konuşma Güveni
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-slate-gray/70 dark:text-background-light/70 text-sm font-normal leading-normal hidden sm:block">
                  Düzenli olarak artıyor
                </p>
                <span className="material-symbols-outlined text-slate-gray dark:text-background-light transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </div>
            </summary>
            <div className="flex flex-col gap-4 py-4">
              <p className="text-slate-gray dark:text-background-light text-base font-medium leading-normal">
                Güven Seviyesi (Son 5 Oturum)
              </p>
              <div className="flex h-40 items-end justify-around gap-2">
                <div className="flex h-[60%] w-8 flex-col items-center justify-end rounded-lg bg-pastel-peach/30">
                  <div className="h-full w-full rounded-lg bg-pastel-peach"></div>
                </div>
                <div className="flex h-[70%] w-8 flex-col items-center justify-end rounded-lg bg-pastel-peach/30">
                  <div className="h-full w-full rounded-lg bg-pastel-peach"></div>
                </div>
                <div className="flex h-[65%] w-8 flex-col items-center justify-end rounded-lg bg-pastel-peach/30">
                  <div className="h-full w-full rounded-lg bg-pastel-peach"></div>
                </div>
                <div className="flex h-[85%] w-8 flex-col items-center justify-end rounded-lg bg-pastel-peach/30">
                  <div className="h-full w-full rounded-lg bg-pastel-peach"></div>
                </div>
                <div className="flex h-[90%] w-8 flex-col items-center justify-end rounded-lg bg-pastel-peach/30">
                  <div className="h-full w-full rounded-lg bg-pastel-peach"></div>
                </div>
              </div>
              <p className="text-slate-gray/70 dark:text-background-light/70 text-base font-normal leading-normal pt-1">
                Her denemede kendine daha çok güvendiğin açıkça görülüyor. Bu harika bir ilerleme!
              </p>
            </div>
          </details>
          {/* Accordion 3: Task Achievement */}
          <details className="flex flex-col rounded-xl border border-slate-gray/10 dark:border-background-light/10 bg-white dark:bg-slate-gray/20 px-4 py-2 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-light-lavender">task_alt</span>
                <p className="text-slate-gray dark:text-background-light text-sm font-medium leading-normal">
                  Görev Başarımı
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-slate-gray/70 dark:text-background-light/70 text-sm font-normal leading-normal hidden sm:block">
                  Ort: Oturum başına 7.5 hedef
                </p>
                <span className="material-symbols-outlined text-slate-gray dark:text-background-light transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </div>
            </summary>
            <div className="flex flex-col gap-4 py-4">
              <p className="text-slate-gray dark:text-background-light text-base font-medium leading-normal">
                Son Kazanılan Hedefler
              </p>
              <ul className="flex flex-col gap-2 pl-5">
                <li className="flex items-start gap-2 text-slate-gray/80 dark:text-background-light/80 text-sm">
                  <span className="material-symbols-outlined text-sm text-sage-green mt-0.5">check_circle</span>
                  Bir restoranda başarılı bir şekilde sipariş verme.
                </li>
                <li className="flex items-start gap-2 text-slate-gray/80 dark:text-background-light/80 text-sm">
                  <span className="material-symbols-outlined text-sm text-sage-green mt-0.5">check_circle</span>
                  Basit yol tariflerini anlama ve sorma.
                </li>
                <li className="flex items-start gap-2 text-slate-gray/80 dark:text-background-light/80 text-sm">
                  <span className="material-symbols-outlined text-sm text-sage-green mt-0.5">check_circle</span>
                  Bir otel için rezervasyon yapma.
                </li>
              </ul>
            </div>
          </details>
        </div>
      </main>
      {/* Bottom Tab Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 border-t border-slate-gray/10 dark:border-background-light/10 bg-white/80 dark:bg-slate-gray/20 backdrop-blur-sm">
        <div className="mx-auto flex max-w-md items-center justify-around px-4 py-2">
          <a
            className="flex flex-col items-center gap-1 text-slate-gray/60 dark:text-background-light/60 hover:text-slate-gray dark:hover:text-background-light"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-xs font-medium">Ana Sayfa</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-slate-gray/60 dark:text-background-light/60 hover:text-slate-gray dark:hover:text-background-light"
            href="#"
          >
            <span className="material-symbols-outlined">checklist</span>
            <span className="text-xs font-medium">Tamamlananlar</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-sage-green dark:text-sage-green font-bold" href="#">
            <span className="material-symbols-outlined">trending_up</span>
            <span className="text-xs">İlerleme</span>
          </a>
        </div>
      </nav>
    </div>
  );
}