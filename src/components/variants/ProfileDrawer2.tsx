import React from 'react';

export default function ProfileDrawer2() {
  return (
    <div className="absolute inset-0 z-50 flex h-full group/design-root">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* Drawer Panel */}
      <div className="relative z-10 flex flex-col w-10/12 max-w-sm h-full shadow-2xl bg-[#FAF9F6] text-[#5A5A5A]">
        {/* Header with Close Button */}
        <div className="flex items-start justify-between p-4 pb-0">
          <div></div> {/* Spacer */}
          <button className="p-2 rounded-full hover:bg-gray-200/50">
            <span className="material-symbols-outlined text-[#8B8B8B]">close</span>
          </button>
        </div>
        {/* Student Profile Area */}
        <div className="flex flex-col items-center px-6 pt-2 pb-6 text-center">
          <img
            alt="Öğrenci avatarı için pastel tonlarda soyut bir resim"
            className="object-cover w-24 h-24 border-4 border-white rounded-full shadow-md"
            data-alt="Öğrenci avatarı için pastel tonlarda soyut bir resim"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9R4b1HKuvtbg1SjkBUZa_lM5yL9LP5JnMYcmHF_O7F9wcu94B1yPgJgQmo_3oVUn11taDVCokPx5-TCXTO8-kGuuT9rsTgUxIt8-_0NZrl3QTSHz77PaqjcM1L2bcq7GjYHuV1_OVME2NvrVhhx2_GZsbaB8_k_hqKozg7lpLd5iJ8Wasp9l5r4eBqV9xcOiXCGaRZSZJPqkuRpJMYl2Ozqj-3CeAFElH7Wt02B2e8N3HQsZ7lsOhsMJlKBK10gx80xdnNMRIQOs"
          />
          <p className="mt-4 text-xl font-bold text-[#5A5A5A]">Elif Yılmaz</p>
          <p className="text-sm text-[#8B8B8B]">10-B Sınıfı</p>
        </div>
        {/* Divider */}
        <div className="px-6">
          <hr className="border-t border-[#E0E0E0]" />
        </div>
        {/* School Context Area */}
        <div className="px-6 py-6 space-y-3">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#D8BFD8]">school</span>
            <p className="text-sm">Atatürk Anadolu Lisesi</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#D8BFD8]">person</span>
            <p className="text-sm">Öğretmen: Ayşe Kaya</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#D8BFD8]">book</span>
            <p className="text-sm">Ders: Biyoloji 101</p>
          </div>
        </div>
        {/* Divider */}
        <div className="px-6">
          <hr className="border-t border-[#E0E0E0]" />
        </div>
        {/* Settings Section */}
        <div className="px-6 py-6">
          <p className="mb-4 text-base font-bold text-[#5A5A5A]">Ayarlar</p>
          <ul className="space-y-2">
            <li className="flex items-center justify-between h-12 px-4 rounded-lg cursor-pointer hover:bg-gray-200/50">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#A2E4B8]">text_fields</span>
                <p className="font-medium text-[#5A5A5A]">Metin Boyutu</p>
              </div>
              <span className="material-symbols-outlined text-[#8B8B8B]">chevron_right</span>
            </li>
            <li className="flex items-center justify-between h-12 px-4 rounded-lg">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#A2E4B8]">dark_mode</span>
                <p className="font-medium text-[#5A5A5A]">Karanlık Mod</p>
              </div>
              <button
                aria-checked="false"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#A2E4B8] focus:ring-offset-2"
                role="switch"
                type="button"
              >
                <span className="sr-only">Karanlık Modu Aç/Kapat</span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                ></span>
              </button>
            </li>
          </ul>
        </div>
        {/* Divider */}
        <div className="px-6">
          <hr className="border-t border-[#E0E0E0]" />
        </div>
        {/* Actions Section */}
        <div className="flex-grow px-6 py-6">
          <ul className="space-y-2">
            <li className="flex items-center h-12 gap-4 px-4 rounded-lg cursor-pointer hover:bg-gray-200/50">
              <span className="material-symbols-outlined text-[#D8BFD8]">help_outline</span>
              <p className="font-medium text-[#5A5A5A]">Yardım</p>
            </li>
            <li className="flex items-center h-12 gap-4 px-4 rounded-lg cursor-pointer hover:bg-red-100/50">
              <span className="material-symbols-outlined text-red-400">logout</span>
              <p className="font-medium text-red-500">Çıkış</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}