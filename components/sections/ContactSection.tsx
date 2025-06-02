import React from "react";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#b48a78] mb-4">
        アクセス・お問い合わせ
      </h2>
      <p className="text-base text-[#7d5a4e] mb-4">
        〒123-4567 東京都渋谷区〇〇1-2-3
        <br />
        営業時間：10:00〜19:00（不定休）
        <br />
        ご予約・お問い合わせは下記フォームよりどうぞ。
      </p>
      <a
        href="https://forms.gle/xxxxxx"
        className="inline-block bg-[#b48a78] text-white rounded px-6 py-3 font-bold shadow hover:bg-[#a07a68] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        お問い合わせフォーム
      </a>
    </section>
  );
}
