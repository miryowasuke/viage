import React from "react";

const navLinks = [
  { href: "#", label: "ホーム" },
  { href: "#services", label: "サービス" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold text-[#b48a78] text-lg tracking-widest">
          VIAGE NAIL SALON
        </div>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#7d5a4e] font-semibold hover:text-[#b48a78] transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* モバイル用メニューは必要に応じて追加可 */}
      </div>
    </header>
  );
}
