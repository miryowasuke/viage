import React from "react";

export default function ServicesSection() {
  return (
    <section className="bg-[#f9f5f2] py-16 px-4 space-y-20">
      {/* サービス紹介1 */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-10">
        <div className="flex-1">
          <img
            src="/images/gel-nail.jpg"
            alt="サービスイメージ1"
            className="rounded-lg shadow w-full object-cover"
            style={{ aspectRatio: "4/3" }}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-xs tracking-widest text-[#b48a78] font-bold mb-2">
            THE SERVICE
          </div>
          <h3 className="text-xl font-bold text-[#222] mb-2">
            ネイル本来の美しさを引き出す
            <br />
            安心・安全な施術
          </h3>
          <p className="text-base text-[#7d5a4e] mb-4">
            Viageでは、肌なじみの良いナチュラルカラーや、季節ごとのトレンドデザインなど、
            <br />
            お客様一人ひとりに合わせた施術をご提案しています。
            <br />
            高品質な商材と丁寧なカウンセリングで、初めての方も安心してご利用いただけます。
          </p>
          <a
            href="#"
            className="text-[#b48a78] underline font-bold text-sm hover:text-[#a07a68] transition"
          >
            もっと見る
          </a>
        </div>
      </div>
      {/* サービス紹介2（代表挨拶風） */}
      <div className="flex flex-col md:flex-row-reverse items-center max-w-5xl mx-auto gap-10">
        <div className="flex-1">
          <img
            src="/images/care.jpg"
            alt="スタッフ紹介"
            className="rounded-lg shadow w-full object-cover"
            style={{ aspectRatio: "4/3" }}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-xs tracking-widest text-[#b48a78] font-bold mb-2">
            Greetings / スタッフ紹介
          </div>
          <h3 className="text-xl font-bold text-[#222] mb-2">
            自然な笑顔と
            <br />
            お客様の満足をお届け
          </h3>
          <p className="text-base text-[#7d5a4e] mb-4">
            Viageでは、スタッフ一同「お客様の毎日が少しでも明るくなるよう」
            <br />
            心を込めて施術しています。
            <br />
            丁寧なカウンセリングと確かな技術で、安心・安全なネイル体験をお届けします。
          </p>
          <a
            href="#"
            className="text-[#b48a78] underline font-bold text-sm hover:text-[#a07a68] transition"
          >
            もっと見る
          </a>
        </div>
      </div>
    </section>
  );
}
