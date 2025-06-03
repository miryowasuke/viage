import React from "react";

export default function ContactSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center bg-[#f8faf7] overflow-hidden">
      {/* 背景画像 */}
      <img
        src="/images/gel-nail.jpg"
        alt="お問い合わせ背景"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: "brightness(0.7)" }}
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      {/* 中央テキスト＆ボタン */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
          お問い合わせ
        </h2>
        <p className="text-base md:text-lg text-white mb-8 drop-shadow-lg max-w-xl mx-auto">
          Viageにご興味を持っていただきありがとうございます。
          <br />
          サービスに関するご質問やご予約は、お気軽にお問い合わせください。
        </p>
        <a
          href="https://forms.gle/xxxxxx"
          className="inline-block bg-white text-[#b48a78] rounded-full px-12 py-4 font-bold text-lg shadow-lg hover:bg-[#f9f5f2] hover:text-[#a07a68] transition flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせ
          <span className="text-xl">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
