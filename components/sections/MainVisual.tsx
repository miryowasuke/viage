import React from "react";

export default function MainVisual() {
  return (
    <section className="relative w-screen h-screen min-h-[500px] flex items-center justify-center bg-[#eaf6f0] overflow-hidden">
      {/* 背景画像 */}
      <img
        src="/images/hero-nail.jpg"
        alt="メインビジュアル"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: "brightness(0.85)" }}
      />
      {/* ロゴ・ナビゲーション */}

      {/* 縦書きテキスト（左） */}
      <div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <div
          className="text-white text-sm tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          ネイル本来の美しさを引き出す、心地よいサロン体験
        </div>
      </div>
      {/* 縦書きテキスト（右） */}
      <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <div
          className="text-white text-sm tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          東京都渋谷区〇〇1-2-3
        </div>
      </div>
      {/* メインキャッチ */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="bg-white/90 rounded px-4 py-2 mb-2 inline-block text-xs font-bold tracking-widest text-[#7d5a4e]">
          指先からはじまる
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#222] bg-white/90 rounded px-4 py-2 mb-2 inline-block drop-shadow-lg">
          私らしい美しさ
        </h1>
        <div className="text-xs text-[#7d5a4e] bg-white/80 rounded px-3 py-1 inline-block">
          VIAGE NAIL SALON
        </div>
      </div>
    </section>
  );
}
