import React from 'react';

export default function ConversationReplay() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      {/* Top App Bar & Progress Bar (Sticky Header) */}
      <div className="sticky top-0 z-10 bg-background-light dark:bg-background-dark shadow-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button className="text-text-main dark:text-white flex size-10 shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <h1 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Konuşma Tekrarı
          </h1>
          <div className="w-10 shrink-0"></div> {/* Spacer */}
        </div>
        <div className="flex flex-col gap-2 px-4 pt-2 pb-4">
          <div className="rounded-full bg-black/10 dark:bg-white/10 h-1.5">
            <div className="h-1.5 rounded-full bg-accent" style={{ width: '35%' }}></div>
          </div>
          <p className="text-text-muted dark:text-gray-400 text-sm font-normal leading-normal text-center">
            2:15 / 6:23
          </p>
        </div>
      </div>
      {/* Chat Interface */}
      <main className="flex flex-col gap-4 p-4 pb-8 flex-1">
        {/* AI Message Bubble */}
        <div className="flex items-end gap-3 self-start max-w-[85%]">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            data-alt="AI assistant's profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRRJjTEgMBPMCH4hXtxy_5QDQj43U1s4JfQeBDnMOvjcdK93yFao5EsIMuoCOD4PuWfD9bBMV8nZV79LzRyn7lFPwT_pVgY5gVvUIokO-Aa_2-BIARd6kny2s5aaZ8hDiZUgIyj0mQj1aAqZVfibV1OTb7FVP4vN4xPdYaGkRaSL10Bk1X2yl0zwnDmMB4GEgaGAMOo-56L-sICIjfM8I5h5hL-yupybbQmmdb3e1vImcAE-N8PnXkBtCgq7ABmfCnaHUns6X3hgw")',
            }}
          ></div>
          <div className="flex flex-1 flex-col gap-2 items-start">
            <p className="text-text-muted text-[13px] font-medium leading-normal">AI Assistant</p>
            <div className="text-base font-normal leading-relaxed flex flex-col gap-2 w-full rounded-xl rounded-bl-none px-4 py-3 bg-ai-bubble text-text-main">
              <p>Merhaba! Rezervasyonunuz hakkında size nasıl yardımcı olabilirim?</p>
              <div className="flex items-center gap-2 border-t border-black/10 pt-2">
                <button className="flex items-center justify-center size-7 rounded-full text-accent hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined text-lg">play_arrow</span>
                </button>
                <button className="flex items-center justify-center size-7 rounded-full text-accent hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined text-lg">translate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Student Message Bubble */}
        <div className="flex items-end gap-3 self-end max-w-[85%]">
          <div className="flex flex-1 flex-col gap-2 items-end">
            <p className="text-text-muted text-[13px] font-medium leading-normal text-right">Öğrenci</p>
            <div className="text-base font-normal leading-relaxed flex items-center gap-2 max-w-full rounded-xl rounded-br-none px-4 py-3 bg-student-bubble text-text-main">
              <p>Evet, yarın akşam için iki kişilik bir masa ayırtmak istiyorum.</p>
              <button className="flex items-center justify-center size-7 rounded-full text-accent hover:bg-accent/20 transition-colors shrink-0">
                <span className="material-symbols-outlined text-lg">play_arrow</span>
              </button>
            </div>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            data-alt="Student's profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDduGR9AcqYkbXJXtzNeLcTKd5MxH6us8fFsmxQyDUO4MgpRF4tCN8-QfBEBKIWik93lTGwGGo6W8xhpZWLp9tt9397akx5czmbmpLnz3hneHAggxj7wLw3AjEjT-KGIrbVFPujDkeCgTfeykUoRm8NzKSy86NdPD9dORfznryWV3yFGFE6L0f3hT1sUoLRjd-E8ICnt6DG1RdKWWSgZ8rndSBse1RflXHefDw3hWBzvZesq2MakeWYFIIG9q-frSYjI85jHofYOkw")',
            }}
          ></div>
        </div>
        {/* AI Message Bubble with Translation visible */}
        <div className="flex items-end gap-3 self-start max-w-[85%]">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            data-alt="AI assistant's profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgDydt2fMGQkwNKckuGhytwSyTRFjo-_LnqtLuqUQYb5FM8StJ388BhrrglgfxfhbfPQzTvGCC1Qq2QbFXHu-96b7Y5GR0-ou1wUbnOF3vr67sPDzecEvjAXPpuA6lYloOuQ4kQsQg3GCB7RVzbLWkkEKBIWGlccfyqCreNzMARCp6eTyVmeXwR5TPKkBAVY_H-bET176WBL4OP8T7zed_T30j1yoggC8KCTfhxPBX2GYs-IEl1HeejrG_mTiw9lG91H1F84P09UA")',
            }}
          ></div>
          <div className="flex flex-1 flex-col gap-2 items-start">
            <p className="text-text-muted text-[13px] font-medium leading-normal">AI Assistant</p>
            <div className="text-base font-normal leading-relaxed flex flex-col gap-2 w-full rounded-xl rounded-bl-none px-4 py-3 bg-ai-bubble text-text-main">
              <p>Harika! Saat kaç için rezervasyon yapmak istersiniz?</p>
              <div className="flex items-center gap-2 border-t border-black/10 pt-2">
                <button className="flex items-center justify-center size-7 rounded-full text-accent hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined text-lg">pause</span>
                </button>
                <button className="flex items-center justify-center size-7 rounded-full text-accent bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined text-lg">translate</span>
                </button>
              </div>
              <div className="border-t border-accent/50 pt-2 mt-1">
                <p className="text-sm text-text-muted italic">
                  Great! What time would you like to make the reservation for?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Student Message Bubble */}
        <div className="flex items-end gap-3 self-end max-w-[85%]">
          <div className="flex flex-1 flex-col gap-2 items-end">
            <p className="text-text-muted text-[13px] font-medium leading-normal text-right">Öğrenci</p>
            <div className="text-base font-normal leading-relaxed flex items-center gap-2 max-w-full rounded-xl rounded-br-none px-4 py-3 bg-student-bubble text-text-main">
              <p>Akşam 8 uygun olur.</p>
              <button className="flex items-center justify-center size-7 rounded-full text-accent hover:bg-accent/20 transition-colors shrink-0">
                <span className="material-symbols-outlined text-lg">play_arrow</span>
              </button>
            </div>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            data-alt="Student's profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEpxT3si5DZu_19rFm7C0sw7tQYQHhVuDV8aH54sdroSklKanGqbemL4wuELz-FfJJ4J3IfGNYr9wDFFuVQGXKmrDA-vobmhQjKuhwmNcC4m9JEyBJ_7x61KpIfqDkC7y_lyQc1wqOR6U_T-8bJI__FJICGKXRbLbkmmMyBI6PVA0Ux56DThjup1iTFhv_MtuHnSunxClr58v1rOswltJvRreXOA8T-QkH9-lt-_VOhqdvN6yJYb9A322ZSAVkAT9kUUCK_aneIUY")',
            }}
          ></div>
        </div>
        {/* AI Message Bubble */}
        <div className="flex items-end gap-3 self-start max-w-[85%]">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            data-alt="AI assistant's profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbTwUpO0-JYdqTRvOLMenUbsTT83TC1MQJmBDwwPa85N-2w8EEmd4KTVTcUa82E78Wgd2eitsdsphLVJgt2_Qwkc34Vbv0-nkgUCmE6B66bwW127LsJigFTchvdtGGMbkyVLE3IFJtKwmSTb-RL4l62LyWRgWDV155_XhWwI_NGTxYkYkCzI3xrsEPRj_8ciOpIpGcN6cdNLoAqtHNCewZsiE0_U6LSvwsfdrC2Pw3vp-_u-jvzZninvP4DjXzry5j-WMcjW3ZWTk")',
            }}
          ></div>
          <div className="flex flex-1 flex-col gap-2 items-start">
            <p className="text-text-muted text-[13px] font-medium leading-normal">AI Assistant</p>
            <div className="text-base font-normal leading-relaxed flex flex-col gap-2 w-full rounded-xl rounded-bl-none px-4 py-3 bg-ai-bubble text-text-main">
              <p>Anlaşıldı. Yarın akşam saat 8'de iki kişilik rezervasyonunuzu onaylıyorum. Başka bir konuda yardımcı olabilir miyim?</p>
              <div className="flex items-center gap-2 border-t border-black/10 pt-2">
                <button className="flex items-center justify-center size-7 rounded-full text-accent hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined text-lg">play_arrow</span>
                </button>
                <button className="flex items-center justify-center size-7 rounded-full text-accent hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined text-lg">translate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}