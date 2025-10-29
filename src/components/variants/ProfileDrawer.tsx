import React from 'react';

export default function ProfileDrawer() {
  return (
    <div className="relative z-20 flex h-full w-10/12 flex-col bg-background-light dark:bg-background-dark p-6 group/design-root shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-end mb-6">
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>

      {/* Student Profile Area */}
      <div className="flex flex-col items-center text-center">
        <img
          className="h-24 w-24 rounded-full object-cover mb-4"
          data-alt="Student profile avatar image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo7lTGImbmhhqH_yf6tkhqNFNuc6CC0ZcYUabGM5TJnS_bfxDhGi5_1ViyLsPOHjxGVDObCI95BelhF2OAWOpeS_F1tGwqJJed7rKsVkXlkN4qYgNmlWrhTwlIWjtgbnDXwt4tz6lMIbLkYIEQTglnpR8FZLBLw8eCrN9X0Ec_x2FuSdcMHQROuFYvmcwrlsnxI1vVwvXEU5hlV4YOpjyyJKvAx9NJlS_PpG1Wgd_HGFvW2UyGKx1W-dUyC_e6or_Gv1kcakGWu_A"
        />
        <p className="text-xl font-bold text-text-light dark:text-text-dark">Elif Yılmaz</p>
        <p className="text-sm text-text-light/70 dark:text-text-dark/70">8. Sınıf</p>
      </div>

      <hr className="my-6 border-t border-border-light dark:border-border-dark" />

      {/* School Context Area */}
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-lavender dark:bg-accent-lavender-dark text-primary dark:text-primary/80">
            <span className="material-symbols-outlined text-xl">school</span>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-text-light/70 dark:text-text-dark/70">Okul Adı</p>
            <p className="font-semibold text-text-light dark:text-text-dark">Atatürk Ortaokulu</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-lavender dark:bg-accent-lavender-dark text-primary dark:text-primary/80">
            <span className="material-symbols-outlined text-xl">person</span>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-text-light/70 dark:text-text-dark/70">Öğretmen Adı</p>
            <p className="font-semibold text-text-light dark:text-text-dark">Ayşe Kaya</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-lavender dark:bg-accent-lavender-dark text-primary dark:text-primary/80">
            <span className="material-symbols-outlined text-xl">class</span>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-text-light/70 dark:text-text-dark/70">Sınıf Adı</p>
            <p className="font-semibold text-text-light dark:text-text-dark">8-B Sınıfı</p>
          </div>
        </div>
      </div>

      <hr className="my-6 border-t border-border-light dark:border-border-dark" />

      {/* Settings Section */}
      <div className="flex flex-col gap-2">
        <p className="px-4 text-sm font-semibold text-text-light/60 dark:text-text-dark/60 mb-2">Ayarlar</p>
        <ul className="flex flex-col">
          <li className="flex h-14 cursor-pointer items-center justify-between gap-4 rounded-lg px-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-2xl text-text-light dark:text-text-dark">text_fields</span>
              <p className="text-base font-semibold text-text-light dark:text-text-dark truncate">Metin Boyutu</p>
            </div>
            <span className="material-symbols-outlined text-2xl text-text-light/50 dark:text-text-dark/50">chevron_right</span>
          </li>
          <li className="flex h-14 cursor-pointer items-center justify-between gap-4 rounded-lg px-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-2xl text-text-light dark:text-text-dark">dark_mode</span>
              <p className="text-base font-semibold text-text-light dark:text-text-dark truncate">Karanlık Mod</p>
            </div>
            <div className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <span className="inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-400 shadow ring-0 transition duration-200 ease-in-out translate-x-5 dark:translate-x-0"></span>
            </div>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-t border-border-light dark:border-border-dark" />

      {/* Actions Section */}
      <div className="flex flex-col gap-2">
        <ul className="flex flex-col">
          <li className="flex h-14 cursor-pointer items-center justify-between gap-4 rounded-lg px-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-2xl text-text-light dark:text-text-dark">help_outline</span>
              <p className="text-base font-semibold text-text-light dark:text-text-dark truncate">Yardım</p>
            </div>
          </li>
          <li className="flex h-14 cursor-pointer items-center justify-between gap-4 rounded-lg px-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-2xl text-text-light dark:text-text-dark">logout</span>
              <p className="text-base font-semibold text-text-light dark:text-text-dark truncate">Çıkış</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}