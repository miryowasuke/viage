import React from "react";

const services = [
  {
    title: "ジェルネイル",
    image: "/images/gel-nail.jpg",
    desc: "肌なじみの良いナチュラルカラーで、上品な指先を演出します。",
  },
  {
    title: "ネイルケア",
    image: "/images/care.jpg",
    desc: "オーガニックオイルで爪と手肌をやさしくケア。初心者の方も安心です。",
  },
  {
    title: "ネイルアート",
    image: "/images/art.jpg",
    desc: "季節ごとのトレンドや、あなただけのデザインもご提案します。",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f9f5f2] py-16 px-4">
      <h2 className="text-2xl font-semibold text-[#b48a78] mb-8 text-center">
        サービス
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
          >
            <img
              src={s.image}
              alt={s.title}
              className="rounded mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-lg font-bold text-[#b48a78] mb-2">{s.title}</h3>
            <p className="text-sm text-[#7d5a4e] text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
