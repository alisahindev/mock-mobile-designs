import React from 'react';

export default function AssignmentList2() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-24">
      {/* Top App Bar */}
      <header className="flex items-center justify-between p-4 bg-background-light dark:bg-background-dark">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <div
            className="aspect-square size-10 rounded-full bg-cover bg-center"
            data-alt="User's profile avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhHmSviomkG2eFN8BM0eOXMlmP9sPMpB96rcFVueb8Unvn9GUJ1p_cRT6eefg3lo8eWcvtQC8TNyn-AELw-gVZCYM5B0Ovhv-nls6vqcPeMlW9HwN19FsjuBrBezIsZOI7erQ2RjHLWzlFp2xr5ICEiRE1qiFnIEoaf080PP5cp6t17Lmbareh8WCse-nW4D1Jr7u3_0keizBCkKXpuNKqrbO6eSzaTx3WJvXQzsyL9B0ROeGmok_9VjbVdMNxq5GwzhcALn9wT-o')",
            }}
          ></div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <div className="flex h-10 items-center justify-center gap-x-2 rounded-full border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark px-3 shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl" data-icon="schedule"></span>
            <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-semibold">45m</p>
          </div>
          <div className="flex h-10 items-center justify-center gap-x-2 rounded-full border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark px-3 shadow-sm">
            <span
              className="material-symbols-outlined text-secondary text-2xl"
              data-icon="local_fire_department"
            ></span>
            <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-semibold">12</p>
          </div>
        </div>
      </header>
      {/* Section Header */}
      <h2 className="px-4 pb-3 pt-4 text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
        Aktif Ödevler
      </h2>
      {/* In-Progress Assignment Card */}
      <div className="px-4 pb-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl bg-card-light dark:bg-card-dark shadow-lg ring-2 ring-primary">
          <div className="relative">
            <div
              className="w-full aspect-[16/9] rounded-t-xl bg-cover bg-center"
              data-alt="An illustration of two people having a serious conversation across a desk."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADQ3yBxrtXMHo0T9oHCcibG5LizsAM0pFMAm7r6OIqfGV2SjiKwcpq2tknVnhux9CvnzVpn5nQbzheDoBNbU6-MaoFM6vbnNaoEDV-Tvlkz7boqeGhYy3qsDdrjq_hpzJEs8gHlij1aq44FRhon6rooZeB0lOKszZwFvgMnx0UtTXUgzFdZW2MBGF1xYnFUuTYGm9PN-08ywVRVDxaKXOPSaMif3GsP6vl2kY2pEykB6R_t7iEEibAhfbSfi4qPYs7fLQR3CpPNTo')",
              }}
            ></div>
            <div className="absolute right-4 top-4 flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3 backdrop-blur-sm">
              <p className="text-sm font-medium text-primary">Devam Ediyor</p>
            </div>
          </div>
          <div className="flex w-full grow flex-col items-stretch justify-center gap-4 p-4">
            <div>
              <p className="text-lg font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
                Difficult Customer Conversation
              </p>
              <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
                Learn de-escalation techniques
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3">
                <p className="text-sm font-medium text-primary">Customer Service</p>
              </div>
              <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3">
                <p className="text-sm font-medium text-primary">Communication</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark">
                  <span className="material-symbols-outlined text-lg" data-icon="calendar_today"></span>
                  <p className="text-sm font-medium">Due: 2 days</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-lg" data-icon="groups"></span>
                  <span>82% of the class has completed this!</span>
                </div>
              </div>
              <div className="relative flex size-14 items-center justify-center">
                <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="stroke-current text-gray-200 dark:text-gray-700"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="45"
                    strokeWidth="10"
                  ></circle>
                  <circle
                    className="stroke-current text-primary transition-all duration-500"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="45"
                    strokeDasharray="282.74"
                    strokeDashoffset="141.37"
                    strokeLinecap="round"
                    strokeWidth="10"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Active Assignment Card */}
      <div className="px-4 pb-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl bg-card-light dark:bg-card-dark shadow-md">
          <div
            className="w-full aspect-[16/9] rounded-t-xl bg-cover bg-center"
            data-alt="Two people shaking hands across a table in a professional setting."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBn4zWNoRDIAkjv_NFYxXhyjzxCfy7exHofW0k83tGx000gyWS82AsExnDQGmvhRsevXoRUZrgbcaeUL1UshE4u9ulaagkib3Z4XJVNfLYHlAj7AwkgiK9KDk53sHRQOm9T9njzC75HSpeH3qjj6a3u2Ph2erMHuNsDcAV1I4nF9fYWotgEioqiKysfjRGRkNJPW1sHEfsRB4romGTorzrVwDOfqrW8AEPIIwnVn1Tv-6eQNqSd-0LFl48RPP1iEqcJu-wQtBJTy2Y')",
            }}
          ></div>
          <div className="flex w-full grow flex-col items-stretch justify-center gap-4 p-4">
            <div>
              <p className="text-lg font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
                Salary Negotiation Scenario
              </p>
              <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
                Practice negotiation skills
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3">
                <p className="text-sm font-medium text-primary">Career</p>
              </div>
              <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3">
                <p className="text-sm font-medium text-primary">Negotiation</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark pt-2">
              <span className="material-symbols-outlined text-lg" data-icon="calendar_today"></span>
              <p className="text-sm font-medium">Due: 5 days</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Tab Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t border-gray-200 bg-card-light/90 backdrop-blur-lg dark:border-gray-700 dark:bg-card-dark/90">
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span className="material-symbols-outlined fill text-2xl" data-icon="home"></span>
          <span className="text-xs font-bold">Ana Sayfa</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-text-secondary-light dark:text-text-secondary-dark" href="#">
          <span className="material-symbols-outlined text-2xl" data-icon="task_alt"></span>
          <span className="text-xs font-medium">Tamamlananlar</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-text-secondary-light dark:text-text-secondary-dark" href="#">
          <span className="material-symbols-outlined text-2xl" data-icon="bar_chart"></span>
          <span className="text-xs font-medium">İlerleme</span>
        </a>
      </nav>
    </div>
  );
}