"use client";

import React, { useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Globe,
  Palette,
  Play,
  Users,
} from "lucide-react";

type WorldKey = "brand" | "film" | "digital" | "culture";

type World = {
  id: WorldKey;
  label: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  accent: string;
};

const worlds: World[] = [
  {
    id: "brand",
    label: "BRAND",
    subtitle: "Identity & Strategy",
    description:
      "Building identities that give brands a distinct place in people's minds.",
    icon: Palette,
    accent: "#F5B921",
  },
  {
    id: "film",
    label: "FILM",
    subtitle: "Production & Stories",
    description:
      "Turning ideas into films, campaigns and visual stories that stay.",
    icon: Clapperboard,
    accent: "#E7DCCB",
  },
  {
    id: "digital",
    label: "DIGITAL",
    subtitle: "Web & Performance",
    description:
      "Creating digital experiences that connect creativity with measurable impact.",
    icon: Globe,
    accent: "#B9CBE0",
  },
  {
    id: "culture",
    label: "CULTURE",
    subtitle: "Influence & Entertainment",
    description:
      "Connecting brands with people, creators and the culture around them.",
    icon: Users,
    accent: "#D7B4A5",
  },
];

const capabilityItems = [
  "BRANDING",
  "PERFORMANCE",
  "WEB",
  "PRODUCTION",
  "EDITING",
  "INFLUENCE",
];

const stagePositions: Record<WorldKey, string> = {
  brand: "left-0 top-0",
  digital: "right-0 top-0",
  culture: "bottom-0 left-0",
  film: "bottom-0 right-0",
};

const connectors: { id: WorldKey; d: string; x: number; y: number }[] = [
  { id: "brand", d: "M444 301 Q 520 301 600 350", x: 444, y: 301 },
  { id: "digital", d: "M756 301 Q 680 301 600 350", x: 756, y: 301 },
  { id: "culture", d: "M444 399 Q 520 399 600 350", x: 444, y: 399 },
  { id: "film", d: "M756 399 Q 680 399 600 350", x: 756, y: 399 },
];

function WorldVisual({
  world,
  active,
}: {
  world: World;
  active: boolean;
}) {
  if (world.id === "brand") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#E7E0D4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(245,185,33,0.25),transparent_40%)]" />

        <div className="absolute left-[8%] top-[9%] text-[10px] uppercase tracking-[0.3em] text-[#101A2C]/50">
          Brand
        </div>

        <motion.div
          animate={{ rotate: active ? -2 : 0, scale: active ? 1.03 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[8%] top-[24%] origin-left"
        >
          <span className="block text-[clamp(2.2rem,15cqw,6rem)] font-normal uppercase leading-[0.82] tracking-[-0.06em] text-[#101A2C]">
            Brand
          </span>

          <span className="block text-[clamp(2.2rem,15cqw,6rem)] font-normal uppercase leading-[0.82] tracking-[-0.06em] text-[#101A2C]/25">
            Identity
          </span>
        </motion.div>

        <motion.div
          animate={{ x: active ? 10 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-[9%] left-[8%] flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#101A2C]/40" />

          <span className="text-[10px] uppercase tracking-[0.22em] text-[#101A2C]/60">
            Strategy · Identity · Positioning
          </span>
        </motion.div>

        <div className="absolute right-[7%] top-[12%] h-[22%] w-[14%] border border-[#101A2C]/15" />

        <motion.div
          animate={{ rotate: active ? 90 : 45 }}
          transition={{ duration: 0.7 }}
          className="absolute right-[10%] top-[16%] h-[12%] w-[8%] border border-[#F5B921]"
        />

        <motion.div
          animate={{ scale: active ? 1.15 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-[10%] right-[9%] h-[22%] w-[14%] rounded-full border border-[#101A2C]/20"
        />
      </div>
    );
  }

  if (world.id === "film") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#101A2C]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,185,33,0.22),transparent_28%),linear-gradient(145deg,#1D304A,#08152B)]" />

        <motion.div
          animate={{ scale: active ? 1.04 : 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-[8%] top-[14%] h-[66%] w-[84%] overflow-hidden rounded-[14px] border border-[#F5F1E8]/10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#2C3B49,#827B6C,#172638)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,210,110,0.32),transparent_24%)]" />

          <div className="absolute left-0 right-0 top-0 h-[10%] bg-[#08152B]/70" />
          <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-[#08152B]/70" />

          <div className="absolute bottom-[16%] left-[5%]">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#F5F1E8]/60">
              Scene 02
            </span>
          </div>

          <motion.div
            animate={{ x: active ? "320%" : "-120%" }}
            transition={{ duration: active ? 1.2 : 0, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
          />
        </motion.div>

        <motion.div
          animate={{ scale: active ? 1.12 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute right-[6%] top-[7%] flex h-10 w-10 items-center justify-center rounded-full border border-[#F5B921]/60 bg-[#08152B]/70"
        >
          <Play size={12} fill="#F5B921" className="ml-0.5 text-[#F5B921]" />
        </motion.div>

        <div className="absolute bottom-[4%] left-[8%] text-[10px] uppercase tracking-[0.22em] text-[#F5F1E8]/45">
          Film · Content · Editing
        </div>
      </div>
    );
  }

  if (world.id === "digital") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#DCE3E6]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.9),transparent_35%)]" />

        <motion.div
          animate={{ y: active ? -6 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[9%] top-[10%] h-[74%] w-[82%] rounded-[16px] border border-[#101A2C]/15 bg-[#F7F5EF] p-[2.5%] shadow-[0_30px_70px_rgba(16,26,44,0.18)]"
        >
          <div className="flex h-full flex-col overflow-hidden rounded-[10px] bg-[#101A2C]">
            <div className="flex items-center justify-between border-b border-[#F5F1E8]/10 px-4 py-2">
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5F1E8]/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5F1E8]/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5B921]" />
              </div>

              <span className="text-[9px] uppercase tracking-[0.24em] text-[#F5F1E8]/45">
                vattal.studio
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between px-4 py-3">
              <div>
                <div className="h-1 w-12 bg-[#F5B921]/70" />

                <div className="mt-3 text-[clamp(1.2rem,8cqw,2.6rem)] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-[#F5F1E8]">
                  Digital
                  <br />
                  Experiences
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <span className="h-[clamp(14px,5cqw,28px)] rounded bg-[#F5F1E8]/10" />
                <motion.span
                  animate={{ opacity: active ? [0.2, 0.55, 0.2] : 0.2 }}
                  transition={{ duration: 1.6, repeat: active ? Infinity : 0 }}
                  className="h-[clamp(14px,5cqw,28px)] rounded bg-[#F5B921]"
                />
                <span className="h-[clamp(14px,5cqw,28px)] rounded bg-[#F5F1E8]/10" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-[3%] right-[9%] text-[10px] uppercase tracking-[0.22em] text-[#101A2C]/50">
          Web · Performance · Social
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#D6C4B9]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.65),transparent_28%),linear-gradient(135deg,#D8C8BE,#B79583)]" />

      <motion.div
        animate={{ x: active ? 6 : 0, y: active ? -6 : 0, rotate: active ? -1.5 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-[9%] top-[9%] h-[78%] w-[82%]"
      >
        <div className="absolute left-0 top-0 h-[68%] w-[56%] overflow-hidden rounded-[12px] bg-[#182A47] shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#2B4468,#111D32)]" />

          <div className="absolute right-3 top-3 h-6 w-6 rounded-full border border-[#F5B921]/60" />

          <div className="absolute bottom-3 left-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#F5F1E8]/60">
              Culture
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-[62%] w-[60%] overflow-hidden rounded-[12px] border border-white/30 bg-white/30 p-[2.5%] shadow-xl backdrop-blur-sm">
          <div className="flex h-full flex-col justify-between rounded-[8px] bg-[#F2ECE3] p-3">
            <span className="text-[9px] uppercase tracking-[0.24em] text-[#182A47]/55">
              Influence
            </span>

            <span className="text-[clamp(1.2rem,8cqw,2.8rem)] font-normal uppercase leading-[0.84] tracking-[-0.05em] text-[#182A47]">
              People
              <br />
              Matter.
            </span>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[#182A47]/50">
              Creators · Entertainment
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function WorldCard({
  world,
  active,
  dimmed,
  stacked,
  onEnter,
  onLeave,
}: {
  world: World;
  active: boolean;
  dimmed: boolean;
  stacked: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = world.icon;

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`${world.label}: ${world.subtitle}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={() => (active ? onLeave() : onEnter())}
      animate={{
        opacity: dimmed ? 0.55 : 1,
        scale: active ? 1.015 : 1,
        borderColor: active ? "rgba(245,185,33,0.55)" : "rgba(245,241,232,0.1)",
      }}
      transition={{ duration: 0.4 }}
      className={`flex cursor-pointer flex-col overflow-hidden rounded-[24px] border bg-[#0F2347] outline-none focus-visible:ring-2 focus-visible:ring-[#F5B921] ${
        stacked ? "" : "absolute inset-0"
      }`}
    >
      <div
        className={`relative [container-type:inline-size] ${
          stacked ? "aspect-[4/3]" : "min-h-0 flex-1"
        }`}
      >
        <WorldVisual world={world} active={active} />

        {!stacked && (
          <motion.div
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 14 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-x-3 bottom-3 z-20 rounded-[14px] border border-[#F5F1E8]/10 bg-[#0B1B3A]/90 px-4 py-3 backdrop-blur-md"
          >
            <p className="text-xs leading-relaxed text-[#F5F1E8]/85">
              {world.description}
            </p>
          </motion.div>
        )}
      </div>

      <div className="flex items-start gap-3 border-t border-[#F5F1E8]/10 px-4 py-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
          style={{ borderColor: `${world.accent}66`, color: world.accent }}
        >
          <Icon size={15} strokeWidth={1.5} />
        </div>

        <div className="min-w-0 flex-1">
          <span className="block text-xs tracking-[0.22em] text-[#F5F1E8]">
            {world.label}
          </span>

          <span className="mt-0.5 block text-[11px] text-[#F5F1E8]/55">
            {world.subtitle}
          </span>

          {stacked && (
            <p className="mt-2 text-xs leading-relaxed text-[#F5F1E8]/65">
              {world.description}
            </p>
          )}
        </div>

        <motion.span
          animate={{ rotate: active ? 45 : 0, opacity: active ? 1 : 0.4 }}
          className="mt-1 text-[#F5B921]"
        >
          <ArrowUpRight size={16} />
        </motion.span>
      </div>
    </motion.div>
  );
}

function ConnectorLines({ active }: { active: WorldKey | null }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
      fill="none"
    >
      {connectors.map((line) => {
        const on = active === line.id;

        return (
          <g key={line.id}>
            <motion.path
              d={line.d}
              vectorEffect="non-scaling-stroke"
              stroke={on ? "#F5B921" : "#F5F1E8"}
              strokeOpacity={on ? 0.8 : 0.16}
              strokeWidth={on ? 1.6 : 1}
              strokeDasharray={on ? "0" : "4 6"}
              animate={{ pathLength: on ? 1 : 0.8 }}
              transition={{ duration: 0.5 }}
            />

            <circle
              cx={line.x}
              cy={line.y}
              r="4"
              fill={on ? "#F5B921" : "#F5F1E8"}
              fillOpacity={on ? 1 : 0.35}
            />
          </g>
        );
      })}
    </svg>
  );
}

function CenterEmblem({
  active,
  reduce,
}: {
  active: WorldKey | null;
  reduce: boolean;
}) {
  const current = worlds.find((world) => world.id === active);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-1/2 z-30 flex h-[clamp(150px,17vw,235px)] w-[clamp(150px,17vw,235px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
    >
      <motion.svg
        viewBox="0 0 200 200"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <path
            id="emblem-ring"
            d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0"
          />
        </defs>

        <text
          fill="#F5B921"
          fillOpacity="0.75"
          fontSize="9"
          letterSpacing="5"
        >
          <textPath href="#emblem-ring">
            BRAND · FILM · DIGITAL · CULTURE · BRAND · FILM · DIGITAL · CULTURE ·
          </textPath>
        </text>
      </motion.svg>

      <motion.div
        animate={{ scale: active ? 1.06 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-[13%] rounded-full border border-[#F5B921]/40 bg-[#0B1B3A]/95 shadow-[0_0_60px_rgba(245,185,33,0.18)] backdrop-blur-md"
      />

      <div className="relative text-center">
        <span className="block text-[clamp(1.4rem,2.6vw,2.6rem)] font-normal uppercase leading-none tracking-[-0.06em]">
          Vattal
        </span>

        <motion.span
          key={current?.id ?? "idle"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 block text-[9px] uppercase tracking-[0.3em] text-[#F5B921]"
        >
          {current ? current.label : "Studio"}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [active, setActive] = useState<WorldKey | null>(null);
  const reduce = !!useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const bgX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const bgY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const visualX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const visualY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const spotX = useTransform(smoothX, [-1, 1], [0, 100]);
  const spotY = useTransform(smoothY, [-1, 1], [0, 100]);

  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${spotX}% ${spotY}%, rgba(245,185,33,0.11), transparent 65%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const headlineLines = ["One studio.", "Four creative worlds."];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="relative min-h-screen overflow-hidden bg-[#0B1B3A] text-[#F5F1E8]"
    >
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="pointer-events-none absolute -inset-4"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,33,0.06),transparent_30%),radial-gradient(circle_at_15%_20%,rgba(67,103,150,0.2),transparent_30%),radial-gradient(circle_at_90%_85%,rgba(67,103,150,0.14),transparent_30%)]" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="90"
              height="90"
              patternUnits="userSpaceOnUse"
            >
              <path d="M90 0H0V90" fill="none" stroke="#F5F1E8" strokeWidth="1" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </motion.div>

      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06] mix-blend-overlay">
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" />
        </filter>

        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#F5F1E8]/15 sm:left-8 sm:top-8" />
      <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#F5F1E8]/15 sm:right-8 sm:top-8" />
      <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[#F5F1E8]/15 sm:bottom-8 sm:left-8" />
      <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#F5F1E8]/15 sm:bottom-8 sm:right-8" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1550px] flex-col px-6 pb-8 pt-10 sm:px-10 sm:pt-12 lg:px-14">
        <header className="flex items-center justify-between border-b border-[#F5F1E8]/10 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="text-base font-medium tracking-[-0.02em]">
              VATTAL
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B921]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F5F1E8]/55">
              Studios
            </span>
          </motion.div>

          <div className="flex items-center gap-8">
            <span className="hidden text-[10px] uppercase tracking-[0.26em] text-[#F5F1E8]/40 lg:block">
              Brands · Entertainment · Culture
            </span>

            <a
              href="#contact"
              className="rounded-full border border-[#F5F1E8]/20 px-5 py-2 text-[10px] uppercase tracking-[0.24em] text-[#F5F1E8]/80 transition-colors duration-300 hover:border-[#F5B921] hover:bg-[#F5B921] hover:text-[#0B1B3A]"
            >
              Let&apos;s talk
            </a>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center pb-10 pt-14 sm:pt-16 lg:pb-12 lg:pt-20">
          <div className="grid items-end gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#F5B921]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#F5B921]">
                  Creative Partner
                </span>
              </motion.div>

              <h1 className="text-[clamp(2.4rem,5.2vw,4.8rem)] font-normal uppercase leading-[0.95] tracking-[-0.05em]">
                {headlineLines.map((line, index) => (
                  <span key={line} className="block overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.35 + index * 0.15,
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`block ${index === 1 ? "text-[#F5F1E8]/35" : ""}`}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="max-w-md lg:justify-self-end"
            >
              <p className="text-sm leading-relaxed text-[#F5F1E8]/65 sm:text-base">
                Brand, film, digital and culture under one roof. One team that
                builds the identity, shoots the story, launches the site and
                brings the people.
              </p>

              {/* <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group flex items-center gap-3 rounded-full bg-[#F5B921] py-2 pl-6 pr-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0B1B3A] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Start a project

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1B3A] text-[#F5B921]">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </a>

                <a
                  href="#services"
                  className="text-[11px] uppercase tracking-[0.2em] text-[#F5F1E8]/65 underline decoration-[#F5F1E8]/20 underline-offset-8 transition-colors hover:text-[#F5B921] hover:decoration-[#F5B921]"
                >
                  View capabilities
                </a>
              </div> */}
            </motion.div>
          </div>

          <div className="mb-5 mt-14 flex items-center justify-between lg:mt-16">
            {/* <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[10px] uppercase tracking-[0.24em] text-[#F5F1E8]/45"
            >
              Hover a world to explore
            </motion.span> */}

            {/* <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[10px] uppercase tracking-[0.24em] text-[#F5F1E8]/45"
            >
              04 Worlds / 01 Studio
            </motion.span> */}
          </div>

          <div className="relative mx-auto hidden aspect-[1.55/1] w-full max-w-[1250px] lg:block">
            <ConnectorLines active={active} />

            <motion.div
              style={{ x: visualX, y: visualY }}
              className="absolute inset-0"
            >
              {worlds.map((world) => (
                <div
                  key={world.id}
                  className={`absolute h-[43%] w-[37%] ${stagePositions[world.id]}`}
                >
                  <WorldCard
                    world={world}
                    stacked={false}
                    active={active === world.id}
                    dimmed={active !== null && active !== world.id}
                    onEnter={() => setActive(world.id)}
                    onLeave={() => setActive(null)}
                  />
                </div>
              ))}
            </motion.div>

            <CenterEmblem active={active} reduce={reduce} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
            {worlds.map((world) => (
              <WorldCard
                key={world.id}
                world={world}
                stacked
                active={active === world.id}
                dimmed={false}
                onEnter={() => setActive(world.id)}
                onLeave={() => setActive(null)}
              />
            ))}
          </div>
        </main>

        <footer
          id="services"
          className="overflow-hidden border-t border-[#F5F1E8]/10 pt-5"
        >
          <div className="[mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <motion.div
              animate={reduce ? undefined : { x: ["0%", "-50%"] }}
              transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              className="flex w-max"
            >
              {[0, 1].map((group) => (
                <div key={group} className="flex shrink-0 items-center">
                  {capabilityItems.map((item) => (
                    <div key={`${group}-${item}`} className="flex items-center">
                      <span className="px-8 text-xs tracking-[0.3em] text-[#F5F1E8]/50 transition-colors hover:text-[#F5B921]">
                        {item}
                      </span>

                      <span className="h-1.5 w-1.5 rotate-45 bg-[#F5B921]/60" />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </footer>
      </div>
    </section>
  );
}