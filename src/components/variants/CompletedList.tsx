import React from 'react';

export default function CompletedList() {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[#FAF9F6] group/design-root overflow-hidden">
      {/* Top App Bar */}
      <div className="flex items-center bg-[#FAF9F6] px-4 py-3 justify-between">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User profile avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2NILQQuGbz4K6G2I7N1GQErhDoCy5Wp1kJG-2eebADaqFkVuH4p5F_eDo9aNJ7RMsaF3PkQBcuetr1n1E2khCUdTWZdyB-61VNtRssjoY7MHzj5y1krfzdQ18ZA30yFHsBdjDuZGll7prT1zyD8bkv4-ek1dNgOeMoDlthuNT1fjxOFn-oq0gZ_agtgjQb1H0x8lEnfpNgIGZsl6sdDYvWJsK9jF8uSj_HRZUUKQ5-3yVHJnnpZX8KqYt9W02f1wIvwyoV2BFBs8')",
            }}
          ></div>
        </div>
        <h1 className="text-[#4A4A4A] text-xl font-bold leading-tight tracking-tight text-center flex-1">
          Tamamlananlar
        </h1>
        <div className="flex size-12 shrink-0 items-center justify-end"></div>
      </div>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="flex flex-col gap-4">
          {/* Card 1 */}
          <div
            className="relative bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px] group"
            data-alt="Two people having a discussion in a modern office"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDb1dVopF08Si9duYRqVRvvlKPJMF0H-AQhlZszK2HLAT4JyWGubSJdS-pkTlQuTk4-HNbbPzNNaQaYZh1FBAAG3RiHV92rAcpj5BuwSpqpsEKgAaTyUwNt7BglOswyek-aLWk5qVFdFUfHpVicwFbriDlKxdgDpTOxyO_HjQqrgqYrVr6abs2g4vy9xulwYzZt9JtLLZ3bVBBNwzy-FvZq1w-JayDjHrAfyZHgP95AaN-xy2XEEbLPOYQHx8XuRNhLH4a7j7KR9mc')",
            }}
          >
            <button className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/20 text-white backdrop-blur-sm transition-all group-hover:bg-white/30">
              <span className="text-sm font-bold tracking-[0.015em]">6:23</span>
              <span className="absolute inset-0 z-10 hidden rounded-full bg-[#C8A2C8]/90 px-3 py-1.5 text-xs font-semibold text-black opacity-0 transition-opacity group-hover:flex group-hover:items-center group-hover:justify-center group-hover:opacity-100">
                6:23 konuşuldu
              </span>
            </button>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-xl font-bold leading-tight max-w-[440px]">Zorlu Müşteri Görüşmesi</p>
                <p className="text-white/90 text-sm font-medium leading-normal">📅 15 Ekim 2023 &nbsp; 🏷️ Satış Becerileri</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="relative bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px] group"
            data-alt="A person reviewing documents at a desk"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpmVbyTJkTxCWIxQrWlEnwT-x6jUA1uHzO38oEljeHKyoF4O98UMMBt6nJ07A2Wgi5MIvhetUDKSY_cLnP2a9p7I992CcrEKq967JB9KMFs3DrXvpXgPIcdVSBHlrZ2nuaIw4IzaDXI8NgrCdWRaYF8d-JwEfFRpKaNMo4IdRn1VEH4UH02IfZQemVaGXLxBTwG62d7I7qJstDs47TaztQ-KpNAh45sOtdBkgViYGpSOJElbA6PCUjtVRk3W0A_oHyxGDxjFYhYtI')",
            }}
          >
            <button className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/20 text-white backdrop-blur-sm transition-all group-hover:bg-white/30">
              <span className="text-sm font-bold tracking-[0.015em]">8:45</span>
              <span className="absolute inset-0 z-10 hidden rounded-full bg-[#C8A2C8]/90 px-3 py-1.5 text-xs font-semibold text-black opacity-0 transition-opacity group-hover:flex group-hover:items-center group-hover:justify-center group-hover:opacity-100">
                8:45 konuşuldu
              </span>
            </button>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-xl font-bold leading-tight max-w-[440px]">
                  Yıllık Performans Değerlendirmesi
                </p>
                <p className="text-white/90 text-sm font-medium leading-normal">📅 12 Ekim 2023 &nbsp; 🏷️ İnsan Kaynakları</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px] group"
            data-alt="A team collaborating in front of a whiteboard"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgqHWq1H-nCnbAq9o5Cggn9Q2CZiXyOgGXrhbW8880ATp8XO8O_Gpb744PYhRkzb1jI_bIXz-OXXAVvZqI1ia5CymJL3hv1U_zduslO1qiZWVhUepU-DXxGBAHyHpXpv7bBRgQAa8jpN8RDhN1xPZWA4vKix_SV9WjySJBtl_qn1dUsGg-VbRmKgdEoE7LWwaKV5iFlaZekzi1DtOxMKY-JUq9HT0wtE-E8CrpyMgLHtQ5ebC38XlECTVswpcZzCVPMXJEF6xx8CU')",
            }}
          >
            <button className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/20 text-white backdrop-blur-sm transition-all group-hover:bg-white/30">
              <span className="text-sm font-bold tracking-[0.015em]">4:12</span>
              <span className="absolute inset-0 z-10 hidden rounded-full bg-[#C8A2C8]/90 px-3 py-1.5 text-xs font-semibold text-black opacity-0 transition-opacity group-hover:flex group-hover:items-center group-hover:justify-center group-hover:opacity-100">
                4:12 konuşuldu
              </span>
            </button>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-xl font-bold leading-tight max-w-[440px]">Proje Sunumu</p>
                <p className="text-white/90 text-sm font-medium leading-normal">📅 05 Ekim 2023 &nbsp; 🏷️ Sunum Becerileri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div className="mt-auto border-t border-gray-200 bg-[#FAF9F6]/80 backdrop-blur-sm">
        <div className="flex items-center justify-around px-2 pb-3 pt-2">
          <a className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-500" href="#">
            <span className="material-symbols-outlined text-2xl">home</span>
            <p className="text-xs font-medium leading-normal tracking-wide">Ana Sayfa</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center gap-1 text-[#C8A2C8]" href="#">
            <span className="material-symbols-outlined text-2xl fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>
              task_alt
            </span>
            <p className="text-xs font-bold leading-normal tracking-wide">Tamamlananlar</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-500" href="#">
            <span className="material-symbols-outlined text-2xl">leaderboard</span>
            <p className="text-xs font-medium leading-normal tracking-wide">İlerleme</p>
          </a>
        </div>
      </div>
    </div>
  );
}