import React from 'react';

export default function CompletedList2() {
  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col bg-[#FAF9F6] font-display group/design-root">
      {/* Main Content */}
      <main className="flex-1 pb-24">
        {/* Top App Bar */}
        <div className="sticky top-0 z-10 flex items-center bg-[#FAF9F6]/80 p-4 pb-3 backdrop-blur-sm">
          <div className="flex size-10 shrink-0 items-center justify-center">
            <button className="flex items-center justify-center">
              <div
                className="aspect-square size-9 rounded-full bg-cover bg-center"
                data-alt="User's profile avatar"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAka3X1LZMVQpg-1psCnCskzuHggv27a2lOvFbp2pzD55cCx4T0HZ8Lqh2Jfxy2vU3HGxyYG8ID4KhaNXtyrDudIaZWyOYlyv-iKHIurogjoDkpvBv0kGotLsL2j7NC-KuOH_4so3no3Xrh-1dh0CLQ3Ga2zvy1rH_7g-HxTijJG6TvXeDOdSmEuVMR6zLS1KYycPJeF0_MFf62aGgrI2z-LtRTSVTxmCU4o6BhbA951aWqyp4Q0lA8mv2tSBOkkGvIdrEmvrDvang")',
                }}
              ></div>
            </button>
          </div>
          <h1 className="flex-1 pr-10 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-[#4A4A4A]">
            Tamamlananlar
          </h1>
        </div>
        {/* Completed Scenario Cards List */}
        <div className="flex flex-col gap-4 px-4">
          {/* Card 1 */}
          <div
            className="relative flex flex-col items-stretch justify-end overflow-hidden rounded-xl bg-cover bg-center pt-[132px]"
            data-alt="A person giving a presentation in a modern office"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCahTz1kaz5KbJa-ZMGFws1H1k_W5bw7MA1S2rXz9T-JfAioqDw2E0U4Ig7ztSr7USAkgRtB5PdmEnm7wH8aPfsfmS8UojfOeRl264VQTCcsuUxahsH0Bj-aX2ud-1-TQJJ7p3ljnYH406kAWRr6pHuKufJfEk0rG5m0as_sALhAj9_bRt9_i6laQkydH2mJ8avCfPVMHE3dtQBcN7M8crdZ-zjxaseEKGY7DDpiqUDb0keERwPSRqTqmGpzQUnekrEoRSigwmRPSY")',
            }}
          >
            <div className="absolute right-4 top-4">
              <div className="group relative flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg className="size-8 -rotate-90" viewBox="0 0 36 36">
                  <circle
                    className="stroke-current text-white/30"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    strokeWidth="3"
                  ></circle>
                  <circle
                    className="stroke-current text-[#FFA07A] transition-all duration-500"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    strokeDasharray="100.53"
                    strokeDashoffset="25.13"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></circle>
                </svg>
                <span className="absolute text-xs font-bold text-white">6:23</span>
                <div className="absolute -top-10 scale-90 rounded-md bg-[#4A4A4A] px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                  6:23 konuşuldu
                </div>
              </div>
            </div>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-2xl font-bold leading-tight tracking-tight text-white">Müşteri Şikayeti Yönetimi</p>
                <p className="text-base font-medium leading-normal text-white/90">📅 15 Ekim 2023 &nbsp; 🏷️ Satış Becerileri</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="relative flex flex-col items-stretch justify-end overflow-hidden rounded-xl bg-cover bg-center pt-[132px]"
            data-alt="Two people having a discussion in a cafe"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6QtW0KUyJJmNBcf5XTCpoRfhi0Y8IkafgX8UGHA61Y_xJoFyKRApagNWnIEPJjPdrHvn5ubnKYi1QHu8FiYV5zfez0xUoJ4UULjWwt-ridhr4eVrNnjGA161xAfMeUmqliJwk5w-wQmOf_MC43llx8RbVcZ7hJjwieX2bHD4NgaROnozlR8OWoYtk4eFuWv5ezDK3gyHeRmaYHUOXyq0wbydy0a-p7gbA-MrSnNn-eTPvANqWT-8ojvnp2cMoIxgX0EGC72_2SQs")',
            }}
          >
            <div className="absolute right-4 top-4">
              <div className="group relative flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg className="size-8 -rotate-90" viewBox="0 0 36 36">
                  <circle
                    className="stroke-current text-white/30"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    strokeWidth="3"
                  ></circle>
                  <circle
                    className="stroke-current text-[#FFA07A] transition-all duration-500"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    strokeDasharray="100.53"
                    strokeDashoffset="10.05"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></circle>
                </svg>
                <span className="absolute text-xs font-bold text-white">8:45</span>
                <div className="absolute -top-10 scale-90 rounded-md bg-[#4A4A4A] px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                  8:45 konuşuldu
                </div>
              </div>
            </div>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-2xl font-bold leading-tight tracking-tight text-white">Etkili Sunum Teknikleri</p>
                <p className="text-base font-medium leading-normal text-white/90">📅 12 Ekim 2023 &nbsp; 🏷️ İletişim</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="relative flex flex-col items-stretch justify-end overflow-hidden rounded-xl bg-cover bg-center pt-[132px]"
            data-alt="A handshake between two business professionals"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAgv8MaYgOiQrQJgtltKYXxTyZenqO_STi34dyvpd5ghH2HRp5x8J4AJuYsFAr_mjihHyIZHEq2XPf-Os8p0VEsANnBMg4F5HvVGVhDDFPQaydf0TAQful525Jhp6OQYnklSCRREfQzsP_-bP-Z1vI8oWtoRsxxZNHgFtSafUHa_EUZHu6iJ6W__4Am7XtIHIjTfOEI5_U2vgcPtiYy6RCX7FN3nKGBcgqMERPorgfWr3jZxfRFrugFqciXe3kOqHNndmW9b5rxDQ")',
            }}
          >
            <div className="absolute right-4 top-4">
              <div className="group relative flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg className="size-8 -rotate-90" viewBox="0 0 36 36">
                  <circle
                    className="stroke-current text-white/30"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    strokeWidth="3"
                  ></circle>
                  <circle
                    className="stroke-current text-[#FFA07A] transition-all duration-500"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    strokeDasharray="100.53"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></circle>
                </svg>
                <span className="absolute text-xs font-bold text-white">12:10</span>
                <div className="absolute -top-10 scale-90 rounded-md bg-[#4A4A4A] px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                  12:10 konuşuldu
                </div>
              </div>
            </div>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-2xl font-bold leading-tight tracking-tight text-white">
                  Zorlu Müzakere Stratejileri
                </p>
                <p className="text-base font-medium leading-normal text-white/90">📅 10 Ekim 2023 &nbsp; 🏷️ Pazarlık</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Bottom Navigation Bar */}
      <footer className="fixed bottom-0 z-10 w-full max-w-md border-t border-[#D8BFD8]/30 bg-[#FAF9F6]/80 backdrop-blur-sm">
        <div className="flex justify-around px-2 pb-3 pt-2">
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#4A4A4A]/60" href="#">
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined !font-light" style={{ fontSize: '26px' }}>
                home
              </span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Ana Sayfa</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#FFA07A]" href="#">
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                check_circle
              </span>
            </div>
            <p className="text-xs font-bold leading-normal tracking-[0.015em]">Tamamlananlar</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#4A4A4A]/60" href="#">
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined !font-light" style={{ fontSize: '26px' }}>
                trending_up
              </span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">İlerleme</p>
          </a>
        </div>
      </footer>
    </div>
  );
}