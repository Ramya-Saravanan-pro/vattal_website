"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Clapperboard,
  Globe,
  MapPin,
  Palette,
  Plus,
  Users,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type FloorKey = "brand" | "film" | "digital" | "culture";

const floors: {
  id: FloorKey;
  label: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
}[] = [
  {
    id: "brand",
    label: "Brand",
    subtitle: "Identity & Strategy",
    description:
      "Building identities that give brands a distinct place in people's minds.",
    tags: ["Identity", "Strategy", "Positioning"],
    icon: Palette,
  },
  {
    id: "film",
    label: "Film",
    subtitle: "Production & Stories",
    description:
      "Turning ideas into films, campaigns and visual stories that stay.",
    tags: ["Film", "Content", "Editing"],
    icon: Clapperboard,
  },
  {
    id: "digital",
    label: "Digital",
    subtitle: "Web & Performance",
    description:
      "Creating digital experiences that connect creativity with measurable impact.",
    tags: ["Web", "Performance", "Social"],
    icon: Globe,
  },
  {
    id: "culture",
    label: "Culture",
    subtitle: "Influence & Entertainment",
    description:
      "Connecting brands with people, creators and the culture around them.",
    tags: ["Creators", "Entertainment", "Influence"],
    icon: Users,
  },
];

const steps = [
  {
    no: "01",
    title: "Brief",
    text: "We start by listening. Goals, audience and the story worth telling.",
  },
  {
    no: "02",
    title: "Create",
    text: "Designers and strategists work in one room, not in silos.",
  },
  {
    no: "03",
    title: "Ship",
    text: "We launch, measure what happened and keep the work moving.",
  },
];

const locations = [
  { city: "Chennai", coords: "13° 01′ N / 80° 13′ E" },
  { city: "Tiruppur", coords: "11° 06′ N / 77° 20′ E" },
];

const bubbles: { text: string; className: string }[] = [
  {
    text: "got the brief?",
    className: "left-[5%] top-[10%] -rotate-6",
  },
  {
    text: "ship it already",
    className: "right-[5%] top-[16%] rotate-[4deg]",
  },
  {
    text: "one more round?",
    className: "left-[7%] bottom-[22%] rotate-3",
  },
  {
    text: "client loved it!",
    className: "right-[6%] bottom-[28%] -rotate-[5deg]",
  },
];

const reactions = [
  { emoji: "🎬", bg: "#0B1B3A", className: "left-[24%] top-[9%]" },
  { emoji: "💡", bg: "#F5B921", className: "right-[26%] top-[32%]" },
  { emoji: "👏", bg: "#0B1B3A", className: "right-[18%] bottom-[12%]" },
];

function Bubble({ text }: { text: string }) {
  const symbol =
    text === "got the brief?"
      ? "✦"
      : text === "ship it already"
        ? "↗"
        : text === "one more round?"
          ? "↻"
          : "✦";

  return (
    <div className="flex items-center gap-3 rounded-2xl rounded-bl-sm bg-[#0B1B3A] py-2.5 pl-3.5 pr-4 shadow-[0_12px_30px_-10px_rgba(11,27,58,0.55)]">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5B921] text-sm font-semibold text-[#0B1B3A]">
        {symbol}
      </span>
      <span className="whitespace-nowrap text-xs font-semibold lowercase tracking-tight text-[#F5F1E8] md:text-sm">
        {text}
      </span>
    </div>
  );
}

function ReactiveDoorEyes({
  x: ox,
  y: oy,
  width,
  height,
  delay = 0,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  delay?: number;
}) {
  const ref = useRef<SVGGElement>(null);
  const reduce = useReducedMotion() ?? false;
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 280, damping: 17, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 280, damping: 17, mass: 0.4 });
  const [blink, setBlink] = useState(false);
  const [squint, setSquint] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy) || 1;
      const strength = Math.min(1, Math.max(0.08, distance / 230));

      px.set((dx / distance) * strength);
      py.set((dy / distance) * strength);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [px, py]);

  useEffect(() => {
    if (reduce) return;

    let blinkTimer: ReturnType<typeof setTimeout>;
    let reopenTimer: ReturnType<typeof setTimeout>;
    let squintTimer: ReturnType<typeof setTimeout>;

    const blinkLoop = () => {
      setBlink(true);
      reopenTimer = setTimeout(() => setBlink(false), 120);
      blinkTimer = setTimeout(blinkLoop, 2200 + Math.random() * 3000);
    };

    const squintLoop = () => {
      setSquint(true);
      setTimeout(() => setSquint(false), 450);
      squintTimer = setTimeout(squintLoop, 4500 + Math.random() * 3500);
    };

    blinkTimer = setTimeout(blinkLoop, 1100 + delay * 600);
    squintTimer = setTimeout(squintLoop, 2800 + delay * 700);

    return () => {
      clearTimeout(blinkTimer);
      clearTimeout(reopenTimer);
      clearTimeout(squintTimer);
    };
  }, [delay, reduce]);

  const eyeY = oy + height / 2;
  const leftEyeX = ox + width * 0.36;
  const rightEyeX = ox + width * 0.64;

  const eyeRx = width * 0.12;
  const eyeRy = height * 0.26;
  const pupilR = eyeRx * 0.5;
  const glintR = pupilR * 0.3;
  const glintOffset = pupilR * 0.35;
  const travelX = eyeRx * 0.5;
  const travelY = eyeRy * 0.5;

  const leftPupilX = useTransform(sx, (v) => leftEyeX + v * travelX);
  const rightPupilX = useTransform(sx, (v) => rightEyeX + v * travelX);
  const pupilY = useTransform(sy, (v) => eyeY + v * travelY);

  const leftGlintX = useTransform(leftPupilX, (v) => v + glintOffset);
  const rightGlintX = useTransform(rightPupilX, (v) => v + glintOffset);
  const glintY = useTransform(pupilY, (v) => v - glintOffset);

  return (
    <g ref={ref}>
      <motion.g
        animate={{
          scaleY: blink ? 0.06 : squint ? 0.72 : 1,
          scaleX: blink ? 1.05 : 1,
        }}
        transition={{ duration: blink ? 0.1 : 0.22, ease: "easeInOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <ellipse
          cx={leftEyeX}
          cy={eyeY}
          rx={eyeRx}
          ry={eyeRy}
          fill="#F5F1E8"
          stroke="#0B1B3A"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
        <motion.circle cx={leftPupilX} cy={pupilY} r={pupilR} fill="#0B1B3A" />
        <motion.circle cx={leftGlintX} cy={glintY} r={glintR} fill="#F5F1E8" />
      </motion.g>

      <motion.g
        animate={{
          scaleY: blink ? 0.06 : squint ? 0.72 : 1,
          scaleX: blink ? 1.05 : 1,
        }}
        transition={{ duration: blink ? 0.1 : 0.22, ease: "easeInOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <ellipse
          cx={rightEyeX}
          cy={eyeY}
          rx={eyeRx}
          ry={eyeRy}
          fill="#F5F1E8"
          stroke="#0B1B3A"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
        <motion.circle cx={rightPupilX} cy={pupilY} r={pupilR} fill="#0B1B3A" />
        <motion.circle cx={rightGlintX} cy={glintY} r={glintR} fill="#F5F1E8" />
      </motion.g>
    </g>
  );
}

function MediaScreen({
  id,
  x,
  y,
  width,
  height,
}: {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}) {
  const clapH = height * 0.13;
  const clapY = y - clapH - 4;
  const stripes = 8;
  const sw = width / stripes;
  const slant = clapH * 0.6;
  const off = width * 0.08;
  const len = Math.min(width, height) * 0.09;
  const perfW = width * 0.025;
  const perfH = height * 0.055;
  const gap = perfH * 1.8;
  const perfCount = Math.floor((height - height * 0.1) / gap);
  const perfStart = y + (height - perfCount * gap + (gap - perfH)) / 2;
  const fs = height * 0.06;

  return (
    <g>
      <defs>
        <clipPath id={`clap-${id}`}>
          <rect x={x} y={clapY} width={width} height={clapH} rx="3" />
        </clipPath>
      </defs>

      <rect x={x} y={clapY} width={width} height={clapH} rx="3" fill="#0B1B3A" />
      <g clipPath={`url(#clap-${id})`}>
        {Array.from({ length: stripes }).map((_, i) =>
          i % 2 === 1 ? (
            <polygon
              key={i}
              points={`${x + i * sw},${clapY + clapH} ${x + i * sw + slant},${clapY} ${x + (i + 1) * sw + slant},${clapY} ${x + (i + 1) * sw},${clapY + clapH}`}
              fill="#F5B921"
            />
          ) : null
        )}
      </g>

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="4"
        fill="#F5F1E8"
        stroke="#0B1B3A"
        strokeWidth="4"
      />

      {Array.from({ length: perfCount }).map((_, i) => (
        <g key={i}>
          <rect
            x={x + width * 0.03}
            y={perfStart + i * gap}
            width={perfW}
            height={perfH}
            rx="1.5"
            fill="#0B1B3A"
            opacity="0.2"
          />
          <rect
            x={x + width - width * 0.03 - perfW}
            y={perfStart + i * gap}
            width={perfW}
            height={perfH}
            rx="1.5"
            fill="#0B1B3A"
            opacity="0.2"
          />
        </g>
      ))}

      <g fill="none" stroke="#F5B921" strokeWidth="3" strokeLinecap="square">
        <path d={`M ${x + off} ${y + off + len} V ${y + off} H ${x + off + len}`} />
        <path d={`M ${x + width - off - len} ${y + off} H ${x + width - off} V ${y + off + len}`} />
        <path d={`M ${x + off} ${y + height - off - len} V ${y + height - off} H ${x + off + len}`} />
        <path d={`M ${x + width - off - len} ${y + height - off} H ${x + width - off} V ${y + height - off - len}`} />
      </g>

      <circle cx={x + width / 2 - fs * 1.7} cy={y + height * 0.1} r={fs * 0.38} fill="#F5B921" />
      <text
        x={x + width / 2 - fs * 1.1}
        y={y + height * 0.1 + fs * 0.35}
        fontSize={fs}
        fontWeight="700"
        letterSpacing={fs * 0.2}
        fill="#0B1B3A"
      >
        REC
      </text>

      <text
        x={x + width / 2}
        y={y + height * 0.93}
        fontSize={fs * 0.85}
        textAnchor="middle"
        letterSpacing={fs * 0.15}
        fill="#0B1B3A"
        opacity="0.45"
      >
        00:24:12
      </text>
    </g>
  );
}

function HouseArt({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <clipPath id={`roof-${uid}`}>
          <polygon points="430,398 800,232 1170,398" />
        </clipPath>
        <clipPath id={`lp-${uid}`}>
          <rect x="496" y="486" width="98" height="140" rx="4" />
        </clipPath>
        <clipPath id={`rp-${uid}`}>
          <rect x="1010" y="470" width="84" height="118" rx="4" />
        </clipPath>
      </defs>

      <polygon points="700,660 900,660 960,700 640,700" fill="#0B1B3A" opacity="0.12" />

      <rect x="985" y="255" width="46" height="120" fill="#0B1B3A" />
      <rect x="977" y="247" width="62" height="14" rx="2" fill="#F5B921" />

      <polygon
        points="430,398 800,232 1170,398"
        fill="#e4be5d"
        stroke="#0B1B3A"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <g clipPath={`url(#roof-${uid})`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="400"
            x2="1200"
            y1={262 + i * 18}
            y2={262 + i * 18}
            stroke="#0B1B3A"
            strokeOpacity="0.22"
            strokeWidth="2"
          />
        ))}
      </g>

      {/* <circle cx="800" cy="335" r="30" fill="#F5F1E8" stroke="#0B1B3A" strokeWidth="5" /> */}
      {/* <line x1="800" y1="305" x2="800" y2="365" stroke="#0B1B3A" strokeWidth="3" /> */}
      {/* <line x1="770" y1="335" x2="830" y2="335" stroke="#0B1B3A" strokeWidth="3" /> */}

      <rect x="424" y="396" width="752" height="16" rx="3" fill="#0B1B3A" />

      <rect x="470" y="412" width="660" height="248" fill="#0B1B3A" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={i}
          x1="470"
          x2="1130"
          y1={434 + i * 22}
          y2={434 + i * 22}
          stroke="#F5F1E8"
          strokeOpacity="0.07"
          strokeWidth="2"
        />
      ))}

      <MediaScreen id={uid} x={630} y={455} width={340} height={190} />
      <ReactiveDoorEyes x={630} y={455} width={340} height={190} delay={0.4} />
      <rect x="610" y="648" width="380" height="12" rx="2" fill="#F5B921" />

      <g transform="rotate(-3 545 556)">
        <image
          href="/WOWS.jpg.jpeg"
          x="496"
          y="486"
          width="98"
          height="140"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#lp-${uid})`}
        />
        <rect x="496" y="486" width="98" height="140" rx="4" fill="none" stroke="#F5B921" strokeWidth="2" />
        <rect x="530" y="480" width="30" height="12" fill="#F5B921" opacity="0.85" />
      </g>

      <g transform="rotate(4 1052 529)">
        <image
          href="/Annamalai.jpg.jpeg"
          x="1010"
          y="470"
          width="84"
          height="118"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#rp-${uid})`}
        />
        <rect x="1010" y="470" width="84" height="118" rx="4" fill="none" stroke="#F5B921" strokeWidth="2" />
        <rect x="1036" y="464" width="30" height="12" fill="#F5B921" opacity="0.85" />
      </g>

      <circle cx="450" cy="636" r="30" fill="#0B1B3A" />
      <circle cx="418" cy="646" r="24" fill="#0B1B3A" />
      <circle cx="1150" cy="636" r="30" fill="#0B1B3A" />
      <circle cx="1182" cy="646" r="24" fill="#0B1B3A" />
      <circle cx="446" cy="626" r="7" fill="#F5B921" />
      <circle cx="1154" cy="626" r="7" fill="#F5B921" />
    </g>
  );
}

function BuildingFacade() {
  return (
    <>
      <svg
        viewBox="0 0 1600 700"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 hidden h-full w-full sm:block"
      >
        <rect width="1600" height="700" fill="#F5F1E8" />

        <circle cx="1390" cy="190" r="84" fill="#F5B921" opacity="0.92" />
        <circle cx="1390" cy="190" r="120" fill="none" stroke="#F5B921" strokeOpacity="0.35" />
        <circle cx="1390" cy="190" r="160" fill="none" stroke="#F5B921" strokeOpacity="0.18" />

        <g fill="#FFFFFF" opacity="0.75">
          <ellipse cx="330" cy="120" rx="70" ry="20" />
          <ellipse cx="380" cy="104" rx="50" ry="22" />
          <ellipse cx="1140" cy="110" rx="60" ry="17" />
          <ellipse cx="1180" cy="96" rx="40" ry="18" />
        </g>

        <rect y="660" width="1600" height="40" fill="#0B1B3A" opacity="0.08" />

        <g opacity="0.95">
          <rect x="232" y="420" width="16" height="240" fill="#0B1B3A" />
          <circle cx="210" cy="350" r="84" fill="#0B1B3A" />
          <circle cx="285" cy="320" r="96" fill="#0B1B3A" />
          <circle cx="145" cy="330" r="62" fill="#0B1B3A" />
          <circle cx="235" cy="260" r="64" fill="#F5B921" opacity="0.7" />
        </g>

        <g fill="#0B1B3A" opacity="0.85">
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={`l${i}`} x={60 + i * 28} y="602" width="14" height="58" rx="3" />
          ))}
          <rect x="52" y="618" width="308" height="6" />
          <rect x="52" y="640" width="308" height="6" />
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={`r${i}`} x={1240 + i * 28} y="602" width="14" height="58" rx="3" />
          ))}
          <rect x="1232" y="618" width="308" height="6" />
          <rect x="1232" y="640" width="308" height="6" />
        </g>

        <HouseArt uid="d" />
      </svg>

      <svg
        viewBox="0 0 520 700"
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-0 h-full w-full sm:hidden"
      >
        <rect width="520" height="700" fill="#F5F1E8" />

        <circle cx="425" cy="150" r="50" fill="#F5B921" opacity="0.92" />
        <circle cx="425" cy="150" r="76" fill="none" stroke="#F5B921" strokeOpacity="0.35" />
        <circle cx="425" cy="150" r="104" fill="none" stroke="#F5B921" strokeOpacity="0.18" />

        <g fill="#FFFFFF" opacity="0.75">
          <ellipse cx="90" cy="130" rx="50" ry="14" />
          <ellipse cx="122" cy="118" rx="34" ry="15" />
          <ellipse cx="300" cy="300" rx="44" ry="12" />
          <ellipse cx="328" cy="290" rx="28" ry="13" />
        </g>

        <rect y="660" width="520" height="40" fill="#0B1B3A" opacity="0.08" />

        <g transform="translate(-284 211) scale(0.68)">
          <HouseArt uid="m" />
        </g>
      </svg>
    </>
  );
}

function FloorStack({
  active,
  onActivate,
  reduce,
}: {
  active: FloorKey;
  onActivate: (id: FloorKey) => void;
  reduce: boolean;
}) {
  return (
    <ul className="overflow-hidden rounded-[20px] border border-[#F5F1E8]/12 bg-[#F5F1E8]/[0.03]">
      {floors.map((floor) => {
        const isActive = active === floor.id;
        const Icon = floor.icon;

        return (
          <li
            key={floor.id}
            className="relative border-b border-[#F5F1E8]/10 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => onActivate(floor.id)}
              onMouseEnter={() => onActivate(floor.id)}
              onFocus={() => onActivate(floor.id)}
              aria-expanded={isActive}
              className="relative block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F5B921]"
            >
              {isActive && (
                <>
                  <motion.span
                    aria-hidden
                    layoutId="floor-highlight"
                    transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                    className="absolute inset-0 bg-[#F5B921]/[0.08]"
                  />
                  <motion.span
                    aria-hidden
                    layoutId="floor-bar"
                    transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                    className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#F5B921]"
                  />
                </>
              )}

              <div className="relative px-4 py-4 sm:px-6 sm:py-5">
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                      isActive
                        ? "border-[#F5B921] bg-[#F5B921] text-[#0B1B3A]"
                        : "border-[#F5F1E8]/20 text-[#F5F1E8]/70"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-xl font-medium leading-tight tracking-[-0.025em] transition-colors duration-300 sm:text-2xl ${
                        isActive ? "text-[#F5F1E8]" : "text-[#F5F1E8]/65"
                      }`}
                    >
                      {floor.label}
                    </p>
                    <p className="mt-0.5 text-xs text-[#F5F1E8]/45">
                      {floor.subtitle}
                    </p>
                  </div>

                  <motion.span
                    aria-hidden
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                      isActive
                        ? "border-[#F5B921]/60 text-[#F5B921]"
                        : "border-[#F5F1E8]/15 text-[#F5F1E8]/40"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={1.8} />
                  </motion.span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pl-[60px] pt-4">
                    <p className="max-w-md text-sm leading-relaxed text-[#F5F1E8]/65">
                      {floor.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 pt-4">
                      {floor.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-[#F5B921]/40 px-3 py-1 text-xs text-[#F5B921]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function FloorStackHome({
  active,
  onActivate,
  reduce,
}: {
  active: FloorKey;
  onActivate: (id: FloorKey) => void;
  reduce: boolean;
}) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
        className="block h-14 w-full"
      >
        <path d="M 0 60 L 200 4 L 400 60 Z" fill="#F5B921" />
        <path d="M 40 60 L 200 16 L 360 60" fill="none" stroke="#0B1B3A" strokeOpacity="0.25" />
      </svg>

      <ul className="border-x border-[#F5F1E8]/15 bg-[#0F2347]/70 backdrop-blur-sm">
        {floors.map((floor) => {
          const isActive = active === floor.id;
          const Icon = floor.icon;

          return (
            <li key={floor.id} className="border-b border-[#F5F1E8]/10">
              <button
                type="button"
                onClick={() => onActivate(floor.id)}
                onMouseEnter={() => onActivate(floor.id)}
                onFocus={() => onActivate(floor.id)}
                aria-pressed={isActive}
                className="relative block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F5B921]"
              >
                {isActive && (
                  <motion.span
                    aria-hidden
                    layoutId="floor-highlight-home"
                    transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                    className="absolute inset-0 bg-[#F5B921]/[0.09]"
                  />
                )}

                <div className="relative flex items-start gap-5 px-6 py-5">
                  <div
                    className={`relative mt-0.5 h-12 w-14 shrink-0 rounded-[4px] border transition-colors duration-500 ${
                      isActive
                        ? "border-[#F5B921] bg-[#F5B921]"
                        : "border-[#F5F1E8]/25 bg-[#F5F1E8]/[0.04]"
                    }`}
                  >
                    <span
                      className={`absolute left-1/2 top-0 h-full w-px ${
                        isActive ? "bg-[#0B1B3A]/40" : "bg-[#F5F1E8]/20"
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-1/2 h-px w-full ${
                        isActive ? "bg-[#0B1B3A]/40" : "bg-[#F5F1E8]/20"
                      }`}
                    />
                    <Icon
                      className={`absolute inset-0 m-auto h-5 w-5 rounded-sm p-0.5 transition-colors duration-500 ${
                        isActive
                          ? "bg-[#F5B921] text-[#0B1B3A]"
                          : "bg-[#0F2347] text-[#F5F1E8]/70"
                      }`}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <span
                        className={`text-xl font-medium tracking-[-0.02em] transition-colors duration-300 ${
                          isActive ? "text-[#F5F1E8]" : "text-[#F5F1E8]/65"
                        }`}
                      >
                        {floor.label}
                      </span>

                      <span className="text-xs text-[#F5F1E8]/45">
                        {floor.subtitle}
                      </span>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-md pt-3 text-sm leading-relaxed text-[#F5F1E8]/65">
                        {floor.description}
                      </p>

                      <ul className="flex flex-wrap gap-2 pt-4">
                        {floor.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-[#F5B921]/40 px-3 py-1 text-xs text-[#F5B921]"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex h-8 items-end justify-center border-x border-[#F5F1E8]/15 bg-[#0F2347]/70">
        <span className="mb-0 h-6 w-12 rounded-t-sm border border-b-0 border-[#F5B921]/60" />
      </div>

      <div className="h-px w-[110%] -translate-x-[4.5%] bg-[#F5F1E8]/30" />
    </div>
  );
}

function ProjectTimeline({ reduce }: { reduce: boolean }) {
  const timelineRef = useRef<HTMLOListElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.25,
  });
  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <ol ref={timelineRef} className="relative">
      <span className="absolute bottom-6 left-[19px] top-6 w-px bg-[#F5F1E8]/15" />
      <motion.span
        aria-hidden="true"
        className="absolute left-[19px] top-6 w-px origin-top bg-[#F5B921]"
        style={{ height: "calc(100% - 3rem)", scaleY: reduce ? 1 : lineScale }}
      />

      {steps.map((step, index) => (
        <motion.li
          key={step.no}
          initial={reduce ? false : { opacity: 0, x: 24, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.45, margin: "0px 0px -8% 0px" }}
          transition={{
            duration: reduce ? 0 : 0.65,
            delay: reduce ? 0 : index * 0.08,
            ease: EASE,
          }}
          className="relative flex gap-5 pb-8 last:pb-0"
        >
          <motion.span
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-[#0B1B3A] text-xs font-medium tabular-nums"
            initial={false}
            whileInView={{
              borderColor: "rgba(245,185,33,0.9)",
              color: "#F5B921",
              boxShadow: "0 0 0 5px rgba(245,185,33,0.07)",
            }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: reduce ? 0 : 0.35, delay: reduce ? 0 : index * 0.08 }}
            style={{ borderColor: "rgba(245,241,232,0.2)", color: "rgba(245,241,232,0.5)" }}
          >
            {step.no}
          </motion.span>

          <div className="pt-1.5">
            <h4 className="text-lg font-medium tracking-[-0.02em]">{step.title}</h4>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-[#F5F1E8]/60">
              {step.text}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export default function Office() {
  const [active, setActive] = useState<FloorKey>("brand");
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="studio"
      className="relative w-full overflow-hidden bg-[#0B1B3A] py-20 text-[#F5F1E8] md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(245,185,33,0.1),transparent_32%),radial-gradient(circle_at_10%_60%,rgba(67,103,150,0.2),transparent_34%)]" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="office-minor" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#F5F1E8" strokeOpacity="0.5" strokeWidth="0.5" />
          </pattern>

          <pattern id="office-major" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="url(#office-minor)" />
            <path d="M200 0H0V200" fill="none" stroke="#F5F1E8" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#office-major)" />
      </svg>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
          className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#F5B921]" />

              <span className="text-[11px] uppercase tracking-[0.3em] text-[#F5B921]">
                Inside the studio
              </span>
            </div>

            <h2 className="text-[clamp(2.6rem,5.8vw,5.6rem)] font-medium uppercase leading-[0.92] tracking-[-0.055em]">
              One studio.
              <br />
              <span className="text-[#F5F1E8]/35">Every discipline.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-[1.8] text-[#F5F1E8]/65 md:text-base lg:justify-self-end">
            Every brand has a story.
            <br />
            Every story needs a spark.
            <br />
            We add the cinematic touch, with ideas, design and strategy made together under one roof.
          </p>
        </motion.div>

        <div className="relative h-[min(78vh,680px)] min-h-[520px] overflow-hidden rounded-[18px] border border-[#F5F1E8]/15 bg-[#F5F1E8] sm:h-[64vh] sm:min-h-[500px] sm:rounded-[22px] md:h-[70vh]">
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduce ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <BuildingFacade />
          </motion.div>

          <div className="absolute left-3 top-3 z-20 rounded-lg bg-[#F5F1E8] px-2.5 py-1.5 shadow-sm sm:left-8 sm:top-7 sm:rounded-xl sm:px-3.5 sm:py-2">
            <p className="text-[9px] font-semibold tracking-[0.12em] text-[#0B1B3A] sm:text-[11px] sm:tracking-[0.24em]">
              VATTAL STUDIOS
            </p>

            <p className="mt-1 text-[8px] tracking-[0.08em] text-[#0B1B3A]/60 sm:text-[11px] sm:tracking-[0.2em]">
              STUDIO / 001
            </p>
          </div>

          <div className="absolute right-3 top-3 z-20 rounded-lg bg-[#F5F1E8] px-2.5 py-1.5 text-right shadow-sm sm:right-8 sm:top-7 sm:rounded-xl sm:px-3.5 sm:py-2">
            <p className="text-[9px] font-semibold tracking-[0.12em] text-[#0B1B3A] sm:text-[11px] sm:tracking-[0.24em]">
              CHENNAI · INDIA
            </p>

            <p className="mt-1 text-[8px] tracking-[0.08em] text-[#0B1B3A]/60 sm:text-[11px] sm:tracking-[0.2em]">
              13° 01′ N / 80° 13′ E
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: reduce ? 0 : 0.7 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-[17%] z-20 w-full -translate-x-1/2 -translate-y-1/2 px-3 text-center sm:top-[18%]"
          >
            <p className="text-[8px] tracking-[0.28em] text-[#0B1B3A]/65 sm:text-[10px] sm:tracking-[0.5em] md:text-xs">
              THIS IS WHERE
            </p>

            <h3 className="mt-2 text-[clamp(3rem,8.5vw,7.5rem)] font-black leading-[0.8] tracking-[-0.06em] text-[#0B1B3A]">
              vattal
            </h3>

            <p className="mt-3 text-[10px] tracking-[0.4em] text-[#0B1B3A]/60 md:text-xs">
              IDEAS BECOME IMPACT
            </p>
          </motion.div>

          {bubbles.map((bubble, index) => (
            <div key={bubble.text} className={`absolute z-30 hidden sm:block ${bubble.className}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.15,
                  duration: reduce ? 0 : 0.5,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={reduce ? undefined : { y: [0, -6, 0] }}
                  transition={{
                    duration: 3.5 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  <Bubble text={bubble.text} />
                </motion.div>
              </motion.div>
            </div>
          ))}

          <div className="hidden sm:block">
            {reactions.map((reaction, index) => (
              <div
                key={reaction.emoji}
                className={`absolute z-30 ${reaction.className}`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.9 + index * 0.1,
                    duration: reduce ? 0 : 0.4,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.25,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-lg shadow-md md:h-12 md:w-12"
                    style={{ backgroundColor: reaction.bg }}
                  >
                    {reaction.emoji}
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3 rounded-full bg-[#0B1B3A] px-4 py-2 md:bottom-7 md:left-8"> */}
            {/* <span className="h-px w-8 bg-[#F5B921]" /> */}

            {/* <span className="text-[11px] tracking-[0.26em] text-[#F5F1E8]">
              LOOK CLOSER
            </span> */}
          {/* </div> */}

          {/* <div className="absolute bottom-5 right-5 z-20 hidden rounded-full bg-[#0B1B3A] px-4 py-2 sm:block md:bottom-7 md:right-8"> */}
            {/* <p className="text-[11px] tracking-[0.26em] text-[#F5F1E8]">
              OPEN · FILM · BRAND · DIGITAL
            </p> */}
          {/* </div> */}
        </div>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
          >
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                Floor guide
              </h3>

              <span className="text-[11px] text-[#F5F1E8]/50 sm:text-xs">
                <span className="lg:hidden">Tap a floor to look inside</span>
                <span className="hidden lg:inline">Hover a floor to look inside</span>
              </span>
            </div>

            <div className="lg:hidden">
              <FloorStack active={active} onActivate={setActive} reduce={reduce} />
            </div>

            <div className="hidden lg:block">
              <FloorStackHome active={active} onActivate={setActive} reduce={reduce} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: reduce ? 0 : 0.8, delay: 0.1, ease: EASE }}
            className="flex flex-col"
          >
            <h3 className="mb-6 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              How a project moves through the building
            </h3>

            <ProjectTimeline reduce={reduce} />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="rounded-[16px] border border-[#F5F1E8]/12 bg-[#F5F1E8]/[0.04] p-5"
                >
                  <div className="flex items-center gap-2 text-[#F5B921]">
                    <MapPin className="h-4 w-4" strokeWidth={1.8} />

                    <span className="text-sm font-medium text-[#F5F1E8]">
                      {location.city}
                    </span>
                  </div>

                  <p className="mt-3 text-xs tracking-[0.12em] text-[#F5F1E8]/50">
                    {location.coords}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-[#F5F1E8]/10 pt-6 text-xs text-[#F5F1E8]/45 md:flex-row md:items-center md:justify-between">
          <span></span>
          <span>Film · Brand · Digital · Culture</span>
          <span></span>
        </div>
      </div>
    </section>
  );
}