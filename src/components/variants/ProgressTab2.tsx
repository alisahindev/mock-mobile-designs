import React from 'react';

export default function ProgressTab2() {
  return (
    <div className="relative flex h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center bg-background-light p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User's profile avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeVn5dWZXugbQWoVOOtCpNzVRKG8RvN5URH7eNNovFn4qa8IMGBPZX75EVWLSYz39yAVTGkNqIVmOoOvDZp0F8ZyL_UnBCxWsaMk6IfADlTNBO2UKg_DPdqOMEYKnNrYFYW-C2cjq53QQBc_SnuYQTl_eYE92E5zxfPeSVQeiPUm100Xn7C3SC2b_vbIuZtIraDZtmdfGsZKMtpZe6vuIFY4PqpDSf70dyoKyfKumTvnkOwURiDlQl13pn1aQW7YythcquiRvPd5I")',
            }}
          ></div>
        </div>
        <h1 className="text-text-primary text-xl font-bold leading-tight tracking-[-0.015em]">İlerlemen</h1>
        <div className="flex size-12 shrink-0 items-center"></div> {/* Spacer for centering title */}
      </header>
      <main className="flex-1 overflow-y-auto px-4">
        {/* Fixed Top Badge Card */}
        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-white mb-6 p-4">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-peach/50 text-amber-600">
              <span className="material-symbols-outlined text-3xl">trophy</span>
            </div>
            <div className="flex flex-1 flex-col items-stretch justify-center gap-1">
              <p className="text-text-secondary text-sm font-normal leading-normal">Tebrikler!</p>
              <p className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">12 tamamlandı</p>
              <div className="flex items-center gap-3 justify-between mt-1">
                <div className="flex flex-col">
                  <p className="text-text-secondary text-base font-normal leading-normal">
                    Harika gidiyorsun, devam et!
                  </p>
                </div>
                <p className="text-base font-medium leading-normal text-orange-500 flex items-center gap-1">
                  🔥 3 Günlük Seri
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Accordion Sections */}
        <div className="flex flex-col gap-3">
          <details
            className="flex flex-col rounded-xl border border-border-soft bg-white px-4 py-2 group"
            open
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-sky/40 text-sky-700">
                  <span className="material-symbols-outlined">timer</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-text-primary text-base font-medium leading-normal">Konuşma Süresi</p>
                  <p className="text-text-secondary text-xs">2s 5dk – geçen haftadan 15dk fazla!</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-text-primary transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="py-2 pl-12">
              <p className="text-text-secondary text-sm font-normal leading-relaxed pb-4">
                Konuşma süren geçen haftaya göre istikrarlı bir şekilde artıyor. Bu, pratik yapmaya daha fazla zaman
                ayırdığını gösteriyor!
              </p>
              <div
                className="h-40 w-full rounded-lg bg-accent-sky/20 flex items-center justify-center text-sky-700/50 text-xs"
                data-alt="A simple line graph showing an upward trend in speaking duration over the last 7 days, with labels for days and time."
              >
                {/* Placeholder for Line Graph */}
                Line Graph Visualization
              </div>
            </div>
          </details>
          <details className="flex flex-col rounded-xl border border-border-soft bg-white px-4 py-2 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-mint/40 text-emerald-700">
                  <span className="material-symbols-outlined">sentiment_satisfied</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-text-primary text-base font-medium leading-normal">Konuşma Güveni</p>
                  <p className="text-text-secondary text-xs">Düzenli olarak artıyor</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-text-primary transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="py-2 pl-12">
              <p className="text-text-secondary text-sm font-normal leading-relaxed pb-4">
                Senaryoları tamamladıkça kendine olan güvenin de artıyor. Son oturumlardaki ilerlemen harika.
              </p>
              <div
                className="h-40 w-full rounded-lg bg-accent-mint/20 flex items-center justify-center text-emerald-700/50 text-xs"
                data-alt="A simple bar graph showing increasing confidence ratings over the last 5 sessions. Each bar is taller than the last."
              >
                {/* Placeholder for Bar Graph */}
                Bar Graph Visualization
              </div>
            </div>
          </details>
          <details className="flex flex-col rounded-xl border border-border-soft bg-white px-4 py-2 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-lavender/40 text-purple-700">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-text-primary text-base font-medium leading-normal">Görev Başarımı</p>
                  <p className="text-text-secondary text-xs">Ort: Oturum başına 7.5 hedef</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-text-primary transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="py-2 pl-12">
              <p className="text-text-secondary text-sm font-normal leading-relaxed pb-4">
                Hedefleri tamamlama oranında artış gözlemleniyor. Son senaryolarda ulaştığın öğrenme hedefleri:
              </p>
              <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                <li>Etkili bir şekilde kendini tanıtma</li>
                <li>Bir ürün hakkında soru sorma</li>
                <li>Bir öneriyi kibarca reddetme</li>
              </ul>
            </div>
          </details>
        </div>
        <div className="h-5"></div>
      </main>
      {/* Bottom Navigation Bar */}
      <footer className="sticky bottom-0 z-10">
        <div className="flex gap-2 border-t border-border-soft bg-background-light/80 backdrop-blur-sm px-4 pb-3 pt-2">
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-text-secondary" href="#">
            <span className="material-symbols-outlined text-2xl">home</span>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Ana Sayfa</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-text-secondary" href="#">
            <span className="material-symbols-outlined text-2xl">check_circle</span>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Tamamlananlar</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-primary" href="#">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              trending_up
            </span>
            <p className="text-xs font-bold leading-normal tracking-[0.015em]">İlerleme</p>
          </a>
        </div>
      </footer>
    </div>
  );
}