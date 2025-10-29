import React from 'react';

export default function ScenarioDetail2() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark group/design-root overflow-x-hidden pb-40">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 pb-2 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full">
          <span className="material-symbols-outlined text-2xl text-text-light dark:text-text-dark">arrow_back</span>
        </div>
        {/* Placeholder for potential right-side icons */}
        <div className="size-12"></div>
      </div>
      {/* Header Image */}
      <div className="px-4">
        <div
          className="w-full bg-cover bg-center bg-no-repeat flex min-h-[218px] flex-col justify-end overflow-hidden rounded-xl"
          data-alt="A cozy, well-lit coffee shop with a barista behind the counter."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCq8FGsdZI1SPxpc-UIXya8EZUYvB4hFgLsQ65iK2GEAdNYpweFO-XghjzGiMBDkzCMzx2A3jOLwXCCGrPSilI1RBhJQ0sj3B8_TmNa2tjBJ0B2nz_6lQYZOdqIrGRxMSW7QAggAWnYwPDZ5g9iNX5blzJLMX2SVhbG2_onQwlUyhoiZ4Pt_P_-MJtSDFZ_RI2VqE0ymSINwRmWvicDEL2GyG3i8l0hdC6tvz_dmNIFjUfVOie6VAXVXO-nGnbSRP9Jn4YHEqLFgB8")',
          }}
        ></div>
      </div>
      {/* Headline Text */}
      <h1 className="tracking-light text-text-light dark:text-text-dark px-4 pb-3 pt-6 text-left text-[32px] font-bold leading-tight">
        Ordering Coffee in English
      </h1>
      {/* Text Grid (Metadata) */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4 pt-0">
        <div className="flex flex-1 items-center gap-3 rounded-lg border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-card-dark">
          <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
            track_changes
          </span>
          <h2 className="text-base font-bold leading-tight text-text-light dark:text-text-dark">
            Practicing polite requests
          </h2>
        </div>
        <div className="flex flex-1 items-center gap-3 rounded-lg border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-card-dark">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
              sell
            </span>
            <h2 className="rounded-full bg-secondary/20 px-3 py-1 text-sm font-bold leading-tight text-secondary">
              Beginner
            </h2>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3 rounded-lg border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-card-dark">
          <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
            timer
          </span>
          <h2 className="text-base font-bold leading-tight text-text-light dark:text-text-dark">7 dakika</h2>
        </div>
      </div>
      {/* Accordions */}
      <div className="flex flex-col gap-3 p-4">
        <details className="group flex flex-col rounded-xl border border-border-light bg-card-light px-[15px] py-[7px] dark:border-border-dark dark:bg-card-dark">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
                location_on
              </span>
              <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Setting</p>
            </div>
            <span className="material-symbols-outlined text-text-light-secondary transition-transform group-open:rotate-180 dark:text-text-dark-secondary">
              expand_more
            </span>
          </summary>
          <p className="pb-2 text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
            You are in a bustling, friendly coffee shop during the morning rush. The smell of freshly brewed coffee is
            in the air. You need to order your favorite drink before heading to work.
          </p>
        </details>
        <details className="group flex flex-col rounded-xl border border-border-light bg-card-light px-[15px] py-[7px] dark:border-border-dark dark:bg-card-dark">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
                person
              </span>
              <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Your Role</p>
            </div>
            <span className="material-symbols-outlined text-text-light-secondary transition-transform group-open:rotate-180 dark:text-text-dark-secondary">
              expand_more
            </span>
          </summary>
          <p className="pb-2 text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
            You are a customer who is a bit unsure about ordering in English. Your goal is to politely order a coffee
            and pay for it successfully. Be friendly and clear.
          </p>
        </details>
        <details className="group flex flex-col rounded-xl border border-border-light bg-card-light px-[15px] py-[7px] dark:border-border-dark dark:bg-card-dark">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
                smart_toy
              </span>
              <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">AI Role</p>
            </div>
            <span className="material-symbols-outlined text-text-light-secondary transition-transform group-open:rotate-180 dark:text-text-dark-secondary">
              expand_more
            </span>
          </summary>
          <p className="pb-2 text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
            The AI will play the role of a patient and helpful barista. They will greet you, take your order, and might
            ask clarifying questions, like what size you want or if you need anything else.
          </p>
        </details>
        <details
          className="group flex flex-col rounded-xl border border-border-light bg-card-light px-[15px] py-[7px] dark:border-border-dark dark:bg-card-dark"
          open
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
                record_voice_over
              </span>
              <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Helpful Phrases</p>
            </div>
            <span className="material-symbols-outlined text-text-light-secondary transition-transform group-open:rotate-180 dark:text-text-dark-secondary">
              expand_more
            </span>
          </summary>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center justify-between rounded-lg bg-background-light p-3 dark:bg-background-dark">
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                "Could I please have a latte?"
              </p>
              <span className="material-symbols-outlined cursor-pointer text-primary">play_circle</span>
            </div>
            <div className="relative flex items-center justify-between rounded-lg bg-background-light p-3 dark:bg-background-dark">
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                "I would like to order a cappuccino."
              </p>
              <span className="material-symbols-outlined cursor-pointer text-primary">play_circle</span>
              {/* Tooltip */}
              <div className="absolute -top-10 right-0 hidden animate-pulse rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-white group-focus-within:block">
                Listen and repeat!
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-background-light p-3 dark:bg-background-dark">
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                "A medium size, please."
              </p>
              <span className="material-symbols-outlined cursor-pointer text-primary">play_circle</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-background-light p-3 dark:bg-background-dark">
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                "How much is that?"
              </p>
              <span className="material-symbols-outlined cursor-pointer text-primary">play_circle</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-background-light p-3 dark:bg-background-dark">
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                "Thank you, have a good day."
              </p>
              <span className="material-symbols-outlined cursor-pointer text-primary">play_circle</span>
            </div>
          </div>
        </details>
      </div>
      {/* Sticky Footer Button */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-background-light to-transparent p-4 pt-8 dark:from-background-dark">
        <button className="w-full rounded-full bg-primary py-4 text-center text-lg font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95">
          Start Conversation
        </button>
      </div>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-border-light bg-card-light/95 backdrop-blur-sm dark:border-border-dark dark:bg-card-dark/95">
        <div className="mx-auto flex max-w-md justify-around p-2">
          <a className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg py-2 text-primary" href="#">
            <span className="material-symbols-outlined">home</span>
            <span className="text-xs font-bold">Home</span>
          </a>
          <a
            className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg py-2 text-text-light-secondary transition-colors hover:text-primary dark:text-text-dark-secondary dark:hover:text-primary"
            href="#"
          >
            <span className="material-symbols-outlined">task_alt</span>
            <span className="text-xs">Completed</span>
          </a>
          <a
            className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg py-2 text-text-light-secondary transition-colors hover:text-primary dark:text-text-dark-secondary dark:hover:text-primary"
            href="#"
          >
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-xs">Progress</span>
          </a>
        </div>
      </div>
    </div>
  );
}