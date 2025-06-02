import React from "react";

export default function StorySection() {
  return (
    <section className="relative w-full">
      {/* テキスト中心のセクション */}
      <div className="relative z-10 bg-[#f8faf7] py-20 px-4 flex flex-col items-center text-center border-b border-[#e5e5e5]">
        <div className="max-w-2xl mx-auto">
          <div className="text-xs tracking-widest text-[#b48a78] font-bold mb-2">
            VIAGE NAIL SALON
          </div>
          <div className="text-lg font-semibold text-[#b48a78] mb-2">
            サロンの想い
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-4">
            指先から、毎日に彩りと癒しを
          </h2>
          <p className="text-base text-[#7d5a4e] mb-6 leading-relaxed">
            Viageは「ネイルを通じて笑顔を広げる」を大切にしています。
            <br />
            サロン品質のネイルを、もっと身近に。
            <br />
            お客様一人ひとりの「らしさ」を引き出すお手伝いを、心を込めて行っています。
          </p>
          <a
            href="#"
            className="text-[#b48a78] underline font-bold text-sm hover:text-[#a07a68] transition"
          >
            もっと見る
          </a>
        </div>
      </div>
      {/* パララックス風の背景画像 */}
      <div
        className="w-full h-[350px] md:h-[500px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/story.jpg')" }}
      />
    </section>
  );
}
