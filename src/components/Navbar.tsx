"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import vattalLogo from "../assets/Vattal Studios.png";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
];

const notices = [
  "GOOD IDEAS. CURRENTLY IN MOTION.",
  "VATTAL IS UP TO SOMETHING",
  "NO BORING BRANDS. EVER.",
  "MAKING ORDINARY LESS ORDINARY.",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
<header
        className={`fixed left-0 top-0 z-[100] hidden w-full transition-all duration-500 ease-in-out lg:block ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="relative h-[32px] overflow-hidden bg-[#0B1B3A]">
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...notices, ...notices].map((notice, i) => (
                <div key={i} className="flex items-center px-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white">
                    {notice}
                  </span>
                  <span className="ml-4 text-[#F5B921]">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex h-[90px] items-center justify-between border-b-4 border-[#F5B921] bg-white px-8">
          <div className="flex items-center gap-4">
            <img src={vattalLogo} alt="Vattal" className="h-10 w-auto brightness-0" />
            <div className="h-8 w-px bg-[#0B1B3A]/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B1B3A]">
              Chennai · Tiruppur
            </span>
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-black lowercase tracking-tight text-[#0B1B3A]">
            vattal, totally.
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B1B3A]">
              We create · We impact
            </span>

</div>
        </div>
      </header>
<nav
        className={`fixed left-1/2 top-6 z-[110] hidden -translate-x-1/2 transition-all duration-500 lg:block ${
          scrolled ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-[60px] items-center gap-2 rounded-full bg-white px-3 shadow-2xl shadow-[#0B1B3A]/20 ring-1 ring-[#0B1B3A]/5">
<a href="#hero" className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#0B1B3A] transition-transform hover:scale-105">
            <img src={vattalLogo} alt="Vattal" className="h-6 w-auto brightness-0 invert" />
          </a>
<div className="h-6 w-px bg-[#0B1B3A]/10" />
<div className="flex items-center gap-1">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all hover:bg-[#0B1B3A]/5"
              >
                <span className="text-[10px] font-black tabular-nums text-[#0B1B3A]/40 transition-colors group-hover:text-[#F5B921]">
                  0{idx + 1}
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0B1B3A] transition-colors group-hover:text-[#F5B921]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
<a
            href="#contact"
            className="group ml-2 flex h-[48px] items-center gap-3 rounded-full bg-[#F5B921] px-6 transition-all hover:bg-[#0B1B3A]"
          >
            <span className="text-[11px] font-black uppercase tracking-wider text-[#0B1B3A] transition-colors group-hover:text-[#F5B921]">
              CONTACT
            </span>
            <ArrowUpRight
              size={16}
              strokeWidth={3}
              className="text-[#0B1B3A] transition-all group-hover:rotate-45 group-hover:text-[#F5B921]"
            />
          </a>
        </div>
      </nav>
<header
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 lg:hidden ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="relative h-[28px] overflow-hidden bg-[#0B1B3A]">
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-marquee-mobile whitespace-nowrap">
              {[...notices, ...notices].map((notice, i) => (
                <div key={i} className="flex items-center px-4">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white">{notice}</span>
                  <span className="ml-2 text-[#F5B921]">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-[70px] items-center justify-between border-b-4 border-[#F5B921] bg-white px-5">
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            <img src={vattalLogo} alt="Vattal" className="h-8 w-auto brightness-0" />
          </a>
          <button type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5B921] text-[#0B1B3A]">
            <Menu size={22} strokeWidth={3} />
          </button>
        </div>
      </header>

      <div className={`fixed left-1/2 top-4 z-[110] w-[calc(100%-32px)] -translate-x-1/2 transition-all duration-500 lg:hidden ${
        scrolled ? "translate-y-0 opacity-100" : "-translate-y-20 pointer-events-none opacity-0"
      }`}>
        <div className="flex h-12 items-center justify-between rounded-full bg-white px-2 shadow-xl ring-1 ring-[#0B1B3A]/5">
          <a href="#hero" onClick={() => setMenuOpen(false)} aria-label="Vattal home" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1B3A]">
            <img src={vattalLogo} alt="Vattal" className="h-4 w-auto brightness-0 invert" />
          </a>
          <button type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5B921] text-[#0B1B3A]">
            <Menu size={19} strokeWidth={3} />
          </button>
        </div>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[200] flex min-h-[100dvh] flex-col overflow-y-auto bg-[#0B1B3A] text-white transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] lg:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-6">
          <img src={vattalLogo} alt="Vattal" className="h-8 w-auto brightness-0 invert" />
          <button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5B921] text-[#F5B921]">
            <X size={21} />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col px-6 pt-5 pb-8 sm:pt-8">
          {navItems.map((item, idx) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="group flex min-h-[62px] items-center border-b border-white/10 py-4 sm:min-h-[72px]">
              <span className="mr-5 text-[11px] font-black text-[#F5B921]">0{idx + 1}</span>
              <span className="text-2xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-[#F5B921] sm:text-4xl">{item.label}</span>
              <ArrowUpRight size={22} className="ml-auto text-[#F5B921] opacity-70 transition-all group-hover:translate-x-2 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="mt-auto shrink-0 border-t border-white/10 p-6">
          <a href="#contact" onClick={() => setMenuOpen(false)} className="flex w-full items-center justify-between rounded-full bg-[#F5B921] px-6 py-4 text-[#0B1B3A]">
            <span className="text-sm font-black uppercase tracking-widest">Start a project</span>
            <ArrowUpRight size={20} strokeWidth={3} />
          </a>
          <div className="mt-6 flex justify-between text-[9px] font-black uppercase tracking-[0.25em] text-white/40">
            <span>Chennai · Tiruppur</span>
            <span>© 2026 Vattal</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee-mobile { animation: marquee 15s linear infinite; }
      `}</style>
    </>
  );
}