import React from 'react';

export default function ScenarioDetail() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-40">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center text-slate-800 dark:text-slate-200">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </div>
      </div>
      {/* Header Image */}
      <div className="@container px-4">
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[218px]"
          data-alt="A cozy coffee shop interior with warm lighting and wooden tables."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcqMxDxGPxLwrseavG7GIJ4WkjG2aNDWNuEEsF9AszILreRUpv0f_aDgcqA0HWMWjoP2l0aUXm_rMdgdf0BlEBaxkAFZHmAfRA3IS98uJXI7K9Ay5caubQ_07ZwtPiO6SlPa2TVaEoIekYEBIPsULQwJxn63-ymIWFNZzVO38y8z_OSlFKC6mjqmH2vFb47PbzWAnQEf6PfFskdrTsIY5anz5ifUBZPWZUZ0od7g7SbYn5VYe4q_70jHuRYnx_wv9xrFeCWVkXc2U")',
          }}
        ></div>
      </div>
      {/* Headline Text */}
      <h1 className="text-slate-900 dark:text-slate-50 tracking-tight text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
        Ordering Coffee in Turkish
      </h1>
      {/* Actions Bar */}
      <div className="@container">
        <div className="gap-4 px-4 flex flex-wrap justify-start">
          <div className="flex flex-col items-center gap-2 text-center w-24">
            <div className="rounded-full bg-primary/20 p-3">
              <span className="material-symbols-outlined text-primary text-xl">school</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-xs font-medium leading-normal">
              Practicing polite requests
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center w-24">
            <div className="rounded-full bg-primary/20 p-3">
              <span className="material-symbols-outlined text-primary text-xl">sell</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-xs font-medium leading-normal">Beginner</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center w-24">
            <div className="rounded-full bg-primary/20 p-3">
              <span className="material-symbols-outlined text-primary text-xl">timer</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-xs font-medium leading-normal">7 minutes</p>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="px-4 pt-6">
        <hr className="border-slate-200 dark:border-slate-700" />
      </div>
      {/* Accordions */}
      <div className="flex flex-col p-4 gap-3">
        <details className="flex flex-col rounded-xl border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">location_on</span>
              <p className="text-slate-800 dark:text-slate-200 text-base font-semibold leading-normal">Setting</p>
            </div>
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal pb-2 pt-1">
            You are in a modern, bustling coffee shop in Istanbul. The aroma of freshly ground coffee fills the air. You
            are at the counter, ready to order from the friendly barista.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">person</span>
              <p className="text-slate-800 dark:text-slate-200 text-base font-semibold leading-normal">Your Role</p>
            </div>
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal pb-2 pt-1">
            You are a tourist visiting Turkey for the first time. Your goal is to politely order a coffee in Turkish.
            You know a few basic phrases but might need to ask for clarification.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">smart_toy</span>
              <p className="text-slate-800 dark:text-slate-200 text-base font-semibold leading-normal">AI Role</p>
            </div>
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal pb-2 pt-1">
            The AI will play the role of a patient and helpful barista. It will take your order, ask clarifying
            questions (like if you want milk or sugar), and respond naturally.
          </p>
        </details>
        <details
          className="flex flex-col rounded-xl border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-[15px] py-[7px] group"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">support</span>
              <p className="text-slate-800 dark:text-slate-200 text-base font-semibold leading-normal">
                Helpful Phrases
              </p>
            </div>
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>
          <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-700 pt-2 pb-1">
            <div className="flex items-center justify-between py-3">
              <p className="text-slate-700 dark:text-slate-300 text-sm font-normal leading-normal">
                Merhaba, bir kahve alabilir miyim?
              </p>
              <button aria-label="Play audio for Merhaba, bir kahve alabilir miyim?" className="text-primary">
                <span className="material-symbols-outlined">play_circle</span>
              </button>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="text-slate-700 dark:text-slate-300 text-sm font-normal leading-normal">Sade, lütfen.</p>
              <button aria-label="Play audio for Sade, lütfen." className="text-primary">
                <span className="material-symbols-outlined">play_circle</span>
              </button>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="text-slate-700 dark:text-slate-300 text-sm font-normal leading-normal">
                Sütlü ve şekerli olsun.
              </p>
              <button aria-label="Play audio for Sütlü ve şekerli olsun." className="text-primary">
                <span className="material-symbols-outlined">play_circle</span>
              </button>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="text-slate-700 dark:text-slate-300 text-sm font-normal leading-normal">Teşekkür ederim.</p>
              <button aria-label="Play audio for Teşekkür ederim." className="text-primary">
                <span className="material-symbols-outlined">play_circle</span>
              </button>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="text-slate-700 dark:text-slate-300 text-sm font-normal leading-normal">İyi günler!</p>
              <button aria-label="Play audio for İyi günler!" className="text-primary">
                <span className="material-symbols-outlined">play_circle</span>
              </button>
            </div>
          </div>
        </details>
      </div>
      {/* Sticky CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 pb-24 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent">
        <button className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold py-4 px-4 rounded-xl shadow-lg transform transition-transform duration-200 active:scale-95">
          Start Conversation
        </button>
      </div>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
        <div className="flex h-full items-center justify-around">
          <a className="flex flex-col items-center justify-center gap-1 text-primary" href="#">
            <span className="material-symbols-outlined">home</span>
            <span className="text-xs font-semibold">Home</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400" href="#">
            <span className="material-symbols-outlined">task_alt</span>
            <span className="text-xs font-semibold">Completed</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-xs font-semibold">Progress</span>
          </a>
        </div>
      </div>
    </div>
  );
}