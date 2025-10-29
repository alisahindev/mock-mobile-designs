import React from 'react';

export default function AssignmentList() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      {/* Top App Bar */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User profile avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFD5EbBih6WUL3cmV_YKIPQrEy-7wxPxBMUNNBywkX1iJuD2HsgFKvtz80Ul20BTOZkiWXjMqEEkpe-b3y9nBz7Lsz9H2ItWCBcEd_VMI6DiQ84kpmv5swWidX6nkOlR3D8BnsoImi4xQZbaG868Mns7AJBlbgfoM2Y2_tOUbGvZx3lDC150v_u1GXMxg92okfleU8DXf2tP-9klhkcqt6x4zspu0NQfgNv8GeW85mmIR0EtroSDlVa3OlmMXGv0eTplmdnfrf_MI")',
            }}
          ></div>
        </div>
        <div className="flex w-auto items-center justify-end gap-2">
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-card-light dark:bg-card-dark text-primary-text dark:text-gray-200 shadow-sm">
            <span className="material-symbols-outlined text-secondary-text dark:text-primary" style={{ fontSize: '24px' }}>
              timer
            </span>
          </button>
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-card-light dark:bg-card-dark text-primary-text dark:text-gray-200 shadow-sm">
            <span
              className="material-symbols-outlined text-secondary-text dark:text-primary"
              style={{ fontSize: '24px' }}
            >
              local_fire_department
            </span>
          </button>
        </div>
      </header>
      <main className="flex-1 pb-24">
        {/* Headline Text */}
        <h1 className="text-primary-text dark:text-gray-100 tracking-tight text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-4">
          Aktif Ödevler
        </h1>
        {/* In-Progress Assignment Card */}
        <div className="px-4 py-2 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-md bg-card-light dark:bg-card-dark border border-primary/50 dark:border-primary/70 overflow-hidden">
            <div className="relative">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="A business meeting with two people shaking hands"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzUpxkqa5sA1jP1dxKGWYy4ptHgc5-WfDIDm3-6KGJQG4r-g4nSUBGDDA3QYCk-mvoKKTTSiOGOX9nXUhEn921H-HGDoCIdqFajp3JHTqYB0gPMVFnfG8ivzz-yeRZZkxFcHeKGsKgO--pEtI4GzkRqE-CdqDLQk3ZXwOrBhYdY9coqveGxG3aTVcOF4b00s-fhNU6TrLYLIpVir2p60KzsltldDIWX7juEobNR1y_ZxcjqKl70Vc5InysXrWTTedZIoI40qV4g8o")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-3 left-3">
                <svg className="size-16" height="64" viewBox="0 0 36 36" width="64">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#ede7f3"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#bf8cf2"
                    strokeDasharray="60, 100"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-yellow-600 dark:text-yellow-400 text-sm font-bold leading-normal">DEVAM EDIYOR</p>
              <p className="text-primary-text dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">
                Advanced Sales Negotiation
              </p>
              <p className="text-secondary-text dark:text-gray-400 text-base font-normal leading-normal">
                Learn to handle difficult objections.
              </p>
              <div className="flex gap-2 pt-2 pb-2 flex-wrap">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-chip-light dark:bg-chip-dark px-3">
                  <p className="text-primary-text dark:text-gray-200 text-sm font-medium leading-normal">Sales</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-chip-light dark:bg-chip-dark px-3">
                  <p className="text-primary-text dark:text-gray-200 text-sm font-medium leading-normal">Negotiation</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">
                  Due: 25 Dec 2024
                </p>
                <p className="text-green-600 dark:text-green-400 text-sm font-medium leading-normal flex items-center gap-1.5">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    groups
                  </span>
                  <span>Sınıfın %75'i tamamladı!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Active Assignment Card 1 */}
        <div className="px-4 py-2 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-card-light dark:bg-card-dark overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover"
              data-alt="People in a meeting room looking at a presentation"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeythmcXDzUvQhwg9q9a_5Dbu9FvMbUQyZ3Jd05m0h6M95_u59AdeKUPgO4dFzCjcmCJag7syxZAqub2AU6ZyHlUabtRZlKzl4jBSyr57kk6wmBvSuOEOwn_Rsdx0gB9vwieo9FqRT6t2ao3QdjiGuJhO7uP_bUO-5CiD-VDb2IkOlHBS-Z-N4ko6_ZpBeoBsa5Cj_1wT2oAV4cN5ICOPbNgnI_LykDaEAbUX9CNtSNin2jBqvvc7CF77vr0zwbCWLl956D6TTz5M")',
              }}
            ></div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-primary-text dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">
                Client Objection Handling
              </p>
              <p className="text-secondary-text dark:text-gray-400 text-base font-normal leading-normal">
                Master techniques for turning "no" into "yes".
              </p>
              <div className="flex gap-2 pt-2 pb-2 flex-wrap">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-chip-light dark:bg-chip-dark px-3">
                  <p className="text-primary-text dark:text-gray-200 text-sm font-medium leading-normal">
                    Client Relations
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">
                  Due: 30 Dec 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Active Assignment Card 2 */}
        <div className="px-4 py-2 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-card-light dark:bg-card-dark overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover"
              data-alt="A person giving a presentation to a group of colleagues"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCl1mmkCoM0j2KUqpB7Eldezdr_JXj0_yNh7DSRivQVZb_KIdVwK1MnDNGFlWHDgtNOeozIc07Hq6-61C4-tQnm0WKnWoNgu6Yl10sOyuFRdemVzGra0Po7XBJPf_h356Zfl2_7UivhD5fpqEEl_PselPpFSp4X3TsNv-u3g43-5HxUqYSGVlHUEAHtiwPDRdUC8tx5gw7luLJQzX_kKEUYHfQCc9lKccqHdjjtcFzVRHFFUAQnbrTodoz3nY1WxBFIGLMgBdycToI")',
              }}
            ></div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-primary-text dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">
                Pitching to an Executive
              </p>
              <p className="text-secondary-text dark:text-gray-400 text-base font-normal leading-normal">
                Craft and deliver a compelling C-level pitch.
              </p>
              <div className="flex gap-2 pt-2 pb-2 flex-wrap">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-chip-light dark:bg-chip-dark px-3">
                  <p className="text-primary-text dark:text-gray-200 text-sm font-medium leading-normal">Presentation</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-chip-light dark:bg-chip-dark px-3">
                  <p className="text-primary-text dark:text-gray-200 text-sm font-medium leading-normal">
                    Public Speaking
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">
                  Due: 15 Jan 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Bottom Tab Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50 flex justify-around items-center z-20">
        {/* Home (Active) */}
        <a className="flex flex-col items-center justify-center gap-1 text-primary dark:text-primary" href="#">
          <div className="w-16 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined">home</span>
          </div>
          <span className="text-xs font-bold">Ana Sayfa</span>
        </a>
        {/* Completed */}
        <a
          className="flex flex-col items-center justify-center gap-1 text-secondary-text dark:text-gray-400"
          href="#"
        >
          <div className="w-16 h-8 rounded-full bg-transparent flex items-center justify-center">
            <span className="material-symbols-outlined">task_alt</span>
          </div>
          <span className="text-xs font-medium">Tamamlananlar</span>
        </a>
        {/* Progress */}
        <a
          className="flex flex-col items-center justify-center gap-1 text-secondary-text dark:text-gray-400"
          href="#"
        >
          <div className="w-16 h-8 rounded-full bg-transparent flex items-center justify-center">
            <span className="material-symbols-outlined">bar_chart</span>
          </div>
          <span className="text-xs font-medium">İlerleme</span>
        </a>
      </nav>
    </div>
  );
}