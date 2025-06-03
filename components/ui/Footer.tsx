import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f5f2] text-[#7d5a4e] py-8 text-center text-sm">
      <div className="mb-2 font-bold tracking-widest">VIAGE NAIL SALON</div>
      <div className="mb-2">
        &copy; {new Date().getFullYear()} Viage Nail Salon. All rights reserved.
      </div>
      <div>
        <a href="#" className="underline hover:text-[#b48a78] transition">
          プライバシーポリシー
        </a>
      </div>
    </footer>
  );
}
