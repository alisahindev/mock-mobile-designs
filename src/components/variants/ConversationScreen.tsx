import React from 'react';

export default function ConversationScreen() {
  return (
    <div className="relative flex h-screen w-full flex-col group/design-root overflow-hidden">
      {/* Header: Exit Button, Progress Bar, Speaking Indicator */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm pt-safe">
        <div className="p-4 pb-2 flex items-center justify-between">
          <button className="text-slate-800 dark:text-slate-200 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        {/* Speaking Indicator */}
        <div className="flex flex-col gap-1.5 p-4 pt-0 pb-3 items-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">AI is listening...</p>
          <div className="flex items-center justify-center gap-1.5 h-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
      </header>

      {/* Time Warning Notification (Example) */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-30 bg-primary/20 text-slate-800 dark:text-slate-200 text-sm font-medium py-2 px-4 rounded-full shadow-md animate-fade-in-out">
        <p>90 saniye kaldı</p>
      </div>
      <style>
        {`
          @keyframes fade-in-out {
            0%, 100% { opacity: 0; transform: translateY(-20px) translateX(-50%); }
            10%, 90% { opacity: 1; transform: translateY(0) translateX(-50%); }
          }
          .animate-fade-in-out {
            animation: fade-in-out 4s ease-in-out forwards;
          }
        `}
      </style>

      {/* Transcription Display Area */}
      <main className="flex-1 overflow-y-auto px-4 pt-32 pb-40">
        <div className="flex flex-col gap-6">
          {/* AI Message */}
          <div className="flex gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
              data-alt="AI avatar with a purple abstract pattern"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJu5ibzX0z8CgH5OItZd-fAWBX3Nz2I5WjdJzI6OnJM0dkewHfwxFvCNeeJnqwCId8PjgS6x1GLo9ThJKR_JYJzkafvUgnRTPe4kfg2wiHOv8Y9wy_Ao-I6WyXtT8wY09ZLxFFWhHGXI9rdkeqCKNfueyEo9p3FNmC6yn6Xfavo-TKumSUByo8DGcxrhxv3VoxPHRDXpvyz1ssK11lv3UKoCHQGCAfPHx8OUxTVesVg8AYOXPz9EzXpVLwvupXRVZoRTC2vfAqlNk")',
              }}
            ></div>
            <div className="flex flex-1 flex-col items-start gap-2">
              <div className="bg-slate-200 dark:bg-slate-800 p-3 rounded-lg rounded-tl-none max-w-xs sm:max-w-sm md:max-w-md">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="text-slate-800 dark:text-slate-200 text-sm font-bold leading-tight">AI</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">10:00 AM</p>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-normal">
                  Hello! Welcome to your immersive conversation practice. How can I help you today?
                </p>
              </div>
            </div>
          </div>
          {/* Student Message */}
          <div className="flex gap-3 flex-row-reverse">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
              data-alt="Student avatar with a teal abstract pattern"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtzJXCTl0BzSC63AVfocD9fwz5iX8GeQGFdcYl6xR2OyVbErYUb3wsxwcqBGn53qkttIzlFL4AygvzGUjkLP-ug-13JgquoyVvuKT98paVktgOaG9bj92N0nbSTiWYxVvqs562X8XlkG_3Su--W0R--_fKF1U9UGAbYC3HLkIv1JVDOvolVRh_UvH62WmT8pRS_kxWA3mXaA_ZBSefJroME6Y9FJhQisn5tk7n-Ask4YLXZ627Xahlxnqp3fwP7JUl-Zk5KA2ZoGM")',
              }}
            ></div>
            <div className="flex flex-1 flex-col items-end gap-2">
              <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none max-w-xs sm:max-w-sm md:max-w-md">
                <div className="flex flex-wrap items-center gap-2 mb-1 justify-end">
                  <p className="text-slate-800 dark:text-slate-200 text-sm font-bold leading-tight">You</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">10:01 AM</p>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-normal">
                  I'd like to practice ordering food at a restaurant.
                </p>
              </div>
            </div>
          </div>
          {/* AI Message */}
          <div className="flex gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
              data-alt="AI avatar with a purple abstract pattern"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ub7D0J9fyPIqDgZMUrpdLPOoBmd3Qy2tgBponQ0eIUztyAnTTJFzhba1iZouWkoEgljBNHHSgrLRF4MCoCEidmO8SjxTaGfKjq6AjdvrxCJne4DeE0LiXZSWiYUkUjamB-4ykKa50nfD-E8sl5TQBypHXTwxOdqNxFkicBgxR2f40x1VbY6IwH2vVzrQRC8iHm1yXpsv1Jx5WdppL38GQNanKcOVrEyh1H_FrmMS25MOKgz1sHupqqrC7FBpk3XhMJv0SESQr38")',
              }}
            ></div>
            <div className="flex flex-1 flex-col items-start gap-2">
              <div className="bg-slate-200 dark:bg-slate-800 p-3 rounded-lg rounded-tl-none max-w-xs sm:max-w-sm md:max-w-md">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="text-slate-800 dark:text-slate-200 text-sm font-bold leading-tight">AI</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">10:01 AM</p>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-normal">
                  Of course! Let's begin. I'll be the waiter. "Good evening, welcome to The Grand Bistro. Do you have a
                  reservation?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer: Mic and Hint Buttons */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 p-5 pb-safe bg-gradient-to-t from-background-light dark:from-background-dark">
        <div className="relative flex items-center justify-center">
          {/* Hint Button */}
          <button className="absolute -left-2 sm:left-4 flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary hover:bg-primary/30 transition-colors">
            <span className="material-symbols-outlined text-2xl">lightbulb</span>
          </button>
          {/* Microphone Toggle Button */}
          <button className="flex size-20 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-lg transform active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-4xl">mic</span>
          </button>
        </div>
      </footer>

      {/* Confirmation Modal Overlay */}
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm hidden">
        <div className="bg-background-light dark:bg-background-dark w-full max-w-sm m-4 p-6 rounded-xl shadow-xl flex flex-col gap-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Save &amp; Exit?</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Do you want to save your progress and exit the conversation?
          </p>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 py-3 px-4 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold">
              Cancel
            </button>
            <button className="flex-1 py-3 px-4 rounded-lg bg-primary text-white font-bold">Save &amp; Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
}