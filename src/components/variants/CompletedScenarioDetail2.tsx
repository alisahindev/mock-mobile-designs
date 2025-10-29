import React from 'react';

export default function CompletedScenarioDetail2() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* Screen Content */}
      <div className="flex-grow pb-28">
        {/* Top App Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 pb-2 backdrop-blur-sm dark:bg-background-dark/80">
          <div className="flex size-12 shrink-0 items-center justify-start text-text-main">
            <span className="material-symbols-outlined !text-2xl">arrow_back</span>
          </div>
        </div>
        {/* Header Image */}
        <div className="px-4">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[218px]"
            data-alt="Illustration of a busy but friendly coffee shop environment."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBy249kdPxQ6PRFr4ofXVCDoswC8RVC5ZIZaZ1r-1huHuC92zKx_kVn-bfXxSrzBts4V1sk68MLMrdNgd0kaTTsRVhWOP08k-fmCg1zvvIjagFnmoMWs3aRNEQsWoDwclSqT4iR_GgO-dvF_jHLKMzsZ1dUH8HZROCGzjdTckGY0PZ9HtxYys7tSVeOKqcRDBYRC-70wR9tY3GpSXXWXBH__yjtHoOuRj3BUIejfK9pyKmfIbKdAae4icSJXRklA-ZkSAUfp2IyVR4")',
            }}
          ></div>
        </div>
        {/* Headline Text */}
        <h1 className="tracking-tight text-3xl font-bold leading-tight px-4 text-left pb-3 pt-6 text-text-main">
          Ordering Coffee in a Hurry
        </h1>
        {/* Card (Celebration Section) */}
        <div className="px-4 py-2 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl bg-primary/20 p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 pb-3">
              <span className="material-symbols-outlined !text-3xl text-accent">workspace_premium</span>
              <p className="text-text-main text-xl font-bold leading-tight tracking-[-0.015em]">Great Work!</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-base">
                <p className="font-medium text-text-main">Conversation Duration:</p>
                <p className="font-normal text-text-subtle">5m 32s</p>
              </div>
              <div className="flex items-center justify-between text-base">
                <p className="font-medium text-text-main">Goals Achieved:</p>
                <p className="font-normal text-text-subtle">3/3</p>
              </div>
            </div>
          </div>
        </div>
        {/* Accordions */}
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-xl bg-ui-subtle/40 px-4 py-2 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
              <p className="text-text-main text-base font-medium leading-normal">Scenario Details</p>
              <div className="text-text-main transition-transform duration-300 group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="text-text-subtle text-sm font-normal leading-normal pb-2 space-y-2">
              <p>
                <strong>Environment:</strong> You are at a busy coffee shop ordering your favorite drink.
              </p>
              <p>
                <strong>Your Role:</strong> You are a customer who is in a hurry.
              </p>
              <p>
                <strong>AI Role:</strong> The AI is a friendly but slightly distracted barista.
              </p>
            </div>
          </details>
          <details className="flex flex-col rounded-xl bg-ui-subtle/40 px-4 py-2 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
              <p className="text-text-main text-base font-medium leading-normal">Review &amp; Practice</p>
              <div className="text-text-main transition-transform duration-300 group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="text-text-subtle text-sm font-normal leading-normal pb-2 space-y-4">
              <div>
                <h4 className="font-bold text-text-main mb-2">Your Improvements</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-background-light p-3">
                    <p className="text-sm">"I want coffee." -&gt; "I'd like a coffee, please."</p>
                    <span className="material-symbols-outlined text-accent cursor-pointer">volume_up</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-background-light p-3">
                    <p className="text-sm">"How much is?" -&gt; "How much is it?"</p>
                    <span className="material-symbols-outlined text-accent cursor-pointer">volume_up</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-text-main mb-2">Helpful Phrases</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-background-light p-3">
                    <p className="text-sm">"Could I get a latte to go?"</p>
                    <span className="material-symbols-outlined text-accent cursor-pointer">volume_up</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-background-light p-3">
                    <p className="text-sm">"I'm in a bit of a rush."</p>
                    <span className="material-symbols-outlined text-accent cursor-pointer">volume_up</span>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
        {/* Speaking Confidence Display */}
        <div className="px-4 py-2">
          <div className="flex flex-col gap-2 rounded-xl bg-ui-subtle/40 p-4">
            <p className="text-text-main text-base font-medium leading-normal">Speaking Confidence</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary !text-2xl">star</span>
              <span className="material-symbols-outlined text-primary !text-2xl">star</span>
              <span className="material-symbols-outlined text-primary !text-2xl">star</span>
              <span className="material-symbols-outlined text-primary !text-2xl">star</span>
              <span className="material-symbols-outlined text-ui-subtle !text-2xl">star</span>
            </div>
          </div>
        </div>
        {/* Primary Button */}
        <div className="p-4">
          <button className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/30 hover:bg-opacity-90 transition-all duration-300">
            Replay My Conversation
          </button>
        </div>
      </div>
      {/* Bottom Tab Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-background-light/80 backdrop-blur-sm border-t border-ui-subtle dark:bg-background-dark/80 dark:border-white/10">
        <div className="flex h-20 items-center justify-around px-4">
          <a className="flex flex-col items-center gap-1 text-text-subtle" href="#">
            <span className="material-symbols-outlined">home</span>
            <span className="text-xs font-medium">Home</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-primary" href="#">
            <div className="relative">
              <span className="material-symbols-outlined filled">check_circle</span>
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary ring-2 ring-background-light dark:ring-background-dark"></span>
            </div>
            <span className="text-xs font-bold">Completed</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-text-subtle" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-xs font-medium">Progress</span>
          </a>
        </div>
      </div>
    </div>
  );
}