import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const SHARP = [0.76, 0, 0.24, 1] as const;

const CLOSED = 82;
const UP = 20;
const DOWN = 104;
const OPEN = CLOSED + DOWN;
const SHIFT = 12;
const SPLIT_DELAY = 0.08;
const A = Number((CLOSED * 0.68).toFixed(2));
const B = Number((CLOSED * 0.32).toFixed(2));

const TOP_CLIP = "polygon(0% 0%, 100% 0%, 100% calc(32% + 1px), 0% calc(68% + 1px))";
const BOT_CLIP = "polygon(0% 68%, 100% 32%, 100% 100%, 0% 100%)";
const GAP_SHUT = `polygon(0px ${A}px, 100% ${B}px, 100% ${B}px, 0px ${A}px)`;
const GAP_OPEN = `polygon(0px ${A - UP}px, 100% ${B - UP}px, 100% ${B + DOWN}px, 0px ${A + DOWN}px)`;

const services = [
  { number: "01", name: "Brand Building & Positioning", description: "We write stories and screenplays for your brand." },
  { number: "02", name: "Creative Film Promotions", description: "We make your film the talk of the town before it hits the screen." },
  { number: "03", name: "Social Media Marketing", description: "We make your brand the one people stop scrolling for." },
  { number: "04", name: "Digital Marketing", description: "We put your brand wherever your audience is looking." },
  { number: "05", name: "Content Marketing", description: "We create content people actually want to watch, read and share." },
  { number: "06", name: "Performance Marketing", description: "Every rupee you spend is tracked, tested and made to work harder." },
  { number: "07", name: "Influencer Marketing", description: "We match your brand with voices your audience already trusts." },
  { number: "08", name: "Meme Marketing", description: "We make your brand part of the joke everyone’s sharing." },
  { number: "09", name: "Website Development", description: "We build websites that look good and get people to act." },
  { number: "10", name: "Video Production", description: "From script to final cut, we bring your ideas to life on screen." },
  { number: "11", name: "Promo & Trailer Cuts", description: "A few seconds that make people want the whole story." },
  { number: "12", name: "Poster Designing", description: "One design that says it all." },
];

type Service = (typeof services)[number];

const loop = (reduce: boolean, duration: number, delay = 0) => ({
  duration,
  delay,
  repeat: reduce ? 0 : Infinity,
  ease: "easeInOut" as const,
});

const visuals: Record<string, (reduce: boolean) => React.ReactNode> = {
  "01": () => (
    <div className="w-40 space-y-1.5">
      <div className="text-[8px] font-bold tracking-[0.2em] text-[#F5B921]">FADE IN:</div>
      {[92, 62, 80, 44, 70].map((w, i) => (
        <m.div
          key={i}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.3, ease: EASE }}
          style={{ width: `${w}%`, transformOrigin: "left" }}
          className="h-1.5 bg-white/40"
        />
      ))}
    </div>
  ),

  "02": (r) => (
    <div className="relative h-[88px] w-[62px] overflow-hidden border border-[#F5B921]/70 bg-[#050D1C]">
      <m.div
        animate={{ x: ["-120%", "220%"] }}
        transition={loop(r, 2.2)}
        className="absolute inset-y-0 w-8 -skew-x-12 bg-gradient-to-r from-transparent via-[#F5B921]/50 to-transparent"
      />
      <div className="absolute inset-x-1 bottom-2 text-[9px] font-black leading-[0.85] tracking-[-0.04em] text-white">
        COMING
        <br />
        SOON
      </div>
    </div>
  ),

  "03": (r) => (
    <div className="flex flex-col items-start gap-2">
      <m.div
        initial={{ scale: 0.6 }}
        animate={{ scale: r ? 1 : [1, 1.12, 1] }}
        transition={loop(r, 1.4)}
        className="rounded-full bg-[#F5B921] px-3 py-1 text-xs font-black text-[#0B1B3A]"
      >
        ♥ 12.4K
      </m.div>
      {[110, 90].map((w, i) => (
        <div key={i} style={{ width: w }} className="h-1.5 bg-white/20" />
      ))}
    </div>
  ),

  "04": (r) => (
    <div className="relative h-[88px] w-[88px]">
      {[0, 1, 2].map((i) => (
        <m.div
          key={i}
          initial={{ scale: 0.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 2, delay: i * 0.65, repeat: r ? 0 : Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border border-[#F5B921]"
        />
      ))}
      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5B921]" />
      <div className="absolute left-3 top-5 h-1.5 w-1.5 rounded-full bg-white/70" />
      <div className="absolute bottom-4 right-3 h-1.5 w-1.5 rounded-full bg-white/70" />
    </div>
  ),

  "05": (r) => (
    <div className="w-40">
      <div className="flex h-[60px] items-center justify-center border border-white/25">
        <div className="ml-1 h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-[#F5B921]" />
      </div>
      <div className="mt-3 h-[3px] bg-white/15">
        <m.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={loop(r, 3)}
          className="h-full bg-[#F5B921]"
        />
      </div>
    </div>
  ),

  "06": () => (
    <div className="flex h-[88px] items-end gap-1.5">
      {[28, 44, 38, 64, 84].map((h, i) => (
        <m.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: h }}
          transition={{ delay: 0.45 + i * 0.09, duration: 0.5, ease: EASE }}
          className={`w-5 ${i === 4 ? "bg-[#F5B921]" : "bg-white/25"}`}
        />
      ))}
      <span className="ml-2 self-start text-[10px] font-black text-[#F5B921]">ROAS 4.2x</span>
    </div>
  ),

  "07": () => (
    <div className="relative flex w-44 items-center justify-between">
      <m.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-x-4 top-1/2 h-px bg-white/30"
      />
      {["", "★", ""].map((s, i) => (
        <m.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35 + i * 0.15, ease: EASE }}
          className={`relative flex h-9 w-9 items-center justify-center rounded-full border text-xs font-black ${
            i === 1
              ? "border-[#F5B921] bg-[#F5B921] text-[#0B1B3A]"
              : "border-white/40 bg-[#0B1B3A] text-white"
          }`}
        >
          {s}
        </m.div>
      ))}
    </div>
  ),

  "08": (r) => (
    <div className="flex h-[88px] w-[88px] flex-col items-center justify-between bg-white/10 py-1.5 text-center text-[8px] font-black uppercase leading-none text-white">
      <span>when it works</span>
      <m.span
        animate={r ? {} : { rotate: [-12, 12, -12] }}
        transition={loop(r, 0.9)}
        className="text-2xl"
      >
        😂
      </m.span>
      <span>share it</span>
    </div>
  ),

  "09": (r) => (
    <div className="relative w-44 border border-white/25">
      <div className="flex gap-1 border-b border-white/15 px-2 py-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`h-1 w-1 rounded-full ${i === 0 ? "bg-[#F5B921]" : "bg-white/30"}`} />
        ))}
      </div>
      <div className="space-y-1.5 p-2.5">
        <div className="h-2 w-4/5 bg-white/40" />
        <div className="h-1.5 w-3/5 bg-white/20" />
        <m.div
          animate={r ? {} : { scale: [1, 0.92, 1] }}
          transition={loop(r, 1.8, 0.8)}
          className="h-4 w-14 bg-[#F5B921]"
        />
      </div>
      <m.div
        initial={{ x: 100, y: 10 }}
        animate={{ x: r ? 40 : [100, 40, 100], y: r ? 52 : [10, 52, 10] }}
        transition={loop(r, 3.6)}
        className="absolute left-0 top-0 text-xs text-white"
      >
        ➤
      </m.div>
    </div>
  ),

  "10": (r) => (
    <div className="w-36">
      <m.div
        animate={r ? {} : { rotate: [-22, 0, 0, -22] }}
        transition={{ duration: 2.2, repeat: r ? 0 : Infinity, times: [0, 0.12, 0.6, 1] }}
        style={{ transformOrigin: "left bottom" }}
        className="h-4 bg-[repeating-linear-gradient(115deg,#F5B921_0_10px,#0B1B3A_10px_20px)] outline outline-1 outline-white/30"
      />
      <div className="mt-px space-y-2 border border-white/30 p-2.5 text-[8px] tracking-[0.15em] text-white/60">
        <div className="flex justify-between">
          <span>SCENE 12</span>
          <span>TAKE 024</span>
        </div>
        <div className="h-px bg-white/20" />
        <span className="text-[#F5B921]">ROLL · CAMERA</span>
      </div>
    </div>
  ),

  "11": (r) => (
    <div className="relative w-48">
      <div className="flex h-9 gap-[3px]">
        {[30, 18, 40, 22, 55, 26].map((v, i) => (
          <div key={i} style={{ width: `${v}%` }} className={`h-full ${i === 2 ? "bg-[#F5B921]" : "bg-white/20"}`} />
        ))}
      </div>
      <m.div
        animate={r ? {} : { left: ["0%", "100%"] }}
        transition={{ duration: 3, repeat: r ? 0 : Infinity, ease: "linear" }}
        className="absolute -top-3 bottom-[-6px] w-px bg-white"
      >
        <span className="absolute -left-1.5 -top-1 text-xs text-white">✂</span>
      </m.div>
      <div className="mt-3 flex justify-between text-[8px] tracking-[0.2em] text-white/50">
        <span>00:00</span>
        <span>00:30</span>
      </div>
    </div>
  ),

  "12": (r) => (
    <m.div
      animate={r ? {} : { rotate: [-3, 3, -3] }}
      transition={loop(r, 5)}
      className="relative h-[88px] w-[62px] bg-[#F5B921] p-1.5"
    >
      <div className="text-[18px] font-black leading-[0.8] tracking-[-0.07em] text-[#0B1B3A]">
        ONE
        <br />
        DE
        <br />
        SIGN
      </div>
      <div className="absolute inset-x-1.5 bottom-1.5 h-5 bg-[#0B1B3A]" />
    </m.div>
  ),
};

const TitleStrip = ({
  service,
  active,
  reduce,
  hidden,
}: {
  service: Service;
  active: boolean;
  reduce: boolean;
  hidden?: boolean;
}) => (
  <div
    className="flex w-full items-center px-3 md:px-5"
    style={{ height: CLOSED }}
    aria-hidden={hidden}
  >
    <m.span
      animate={{ color: active ? "#0B1B3A" : "rgba(11,27,58,0.35)" }}
      transition={{ duration: reduce ? 0 : 0.2 }}
      className="w-7 shrink-0 text-[9px] font-bold tracking-[0.2em]"
    >
      {service.number}
    </m.span>
    <h3 className="whitespace-nowrap text-[clamp(1rem,2.05vw,1.85rem)] font-black leading-none tracking-[-0.045em] text-[#0B1B3A]">
      {service.name}
    </h3>
  </div>
);

const ServiceRow = ({
  service,
  active,
  reduce,
  onActivate,
  onToggle,
}: {
  service: Service;
  active: boolean;
  reduce: boolean;
  onActivate: () => void;
  onToggle: () => void;
}) => {
  const d = (s: number) => (reduce ? 0 : s);
  const t = active
    ? { duration: d(0.32), delay: d(SPLIT_DELAY), ease: SHARP }
    : { duration: d(0.2), delay: 0, ease: SHARP };

  return (
    <m.li
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: d(0.35), ease: EASE }}
      onMouseEnter={onActivate}
      className="border-t border-[#0B1B3A]/15 last:border-b"
    >
      <m.div
        initial={false}
        animate={{ height: active ? OPEN : CLOSED }}
        transition={t}
        className="relative overflow-hidden"
      >
        <m.div
          initial={false}
          animate={{ clipPath: active ? GAP_OPEN : GAP_SHUT }}
          transition={t}
          className="absolute inset-x-0 top-0 z-0 bg-[#0B1B3A]"
          style={{ height: OPEN }}
        >
          <AnimatePresence>
            {active && (
              <m.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.08 } }}
                transition={{ delay: d(0.22), duration: d(0.25) }}
                className="absolute inset-x-0 flex items-center justify-between gap-6 px-3 pl-[calc(0.75rem+1.75rem)] md:px-5 md:pl-[calc(1.25rem+1.75rem)]"
                style={{ top: 40, height: 90 }}
              >
                <p className="max-w-[340px] text-sm leading-relaxed text-white/85 md:text-base">
                  {service.description}
                </p>
                <div className="hidden shrink-0 origin-center scale-[0.85] items-center justify-center border-l border-white/15 pl-6 sm:flex">
                  {visuals[service.number](reduce)}
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>

        <m.div
          initial={false}
          animate={{ y: active ? -UP : 0, x: active ? -SHIFT : 0 }}
          transition={t}
          className="absolute inset-x-0 top-0 z-10"
          style={{ height: CLOSED, clipPath: TOP_CLIP, WebkitClipPath: TOP_CLIP }}
        >
          <TitleStrip service={service} active={active} reduce={reduce} />
        </m.div>

        <m.div
          initial={false}
          animate={{ y: active ? DOWN : 0, x: active ? SHIFT : 0 }}
          transition={t}
          className="absolute inset-x-0 top-0 z-10"
          style={{ height: CLOSED, clipPath: BOT_CLIP, WebkitClipPath: BOT_CLIP }}
        >
          <TitleStrip service={service} active={active} reduce={reduce} hidden />
        </m.div>

        {!reduce && (
          <svg
            className="pointer-events-none absolute left-0 top-0 z-20 w-full"
            style={{ height: OPEN }}
            viewBox={`0 0 100 ${OPEN}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            <m.line
              x1="0"
              y1={A}
              x2="100"
              y2={B}
              stroke="#0B1B3A"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              initial={false}
              animate={
                active
                  ? { pathLength: [0, 1, 1], opacity: [1, 1, 0], transition: { duration: 0.28, times: [0, 0.35, 1], ease: "linear" } }
                  : { pathLength: 0, opacity: 0, transition: { duration: 0 } }
              }
            />
          </svg>
        )}

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={active}
          aria-label={service.name}
          className="absolute left-0 top-0 z-40 w-full outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0B1B3A]"
          style={{ height: CLOSED }}
        />
      </m.div>
    </m.li>
  );
};

const S = 56;
const HALF = S / 2;
const MOVE_MS = 520;
const HOLD_MS = 2600;
const DROP_MS = 950;
const STAGGER_MS = 34;
const INTRO_MS = DROP_MS + 27 * STAGGER_MS + 200;

type Vec = [number, number, number];
type Mat = number[][];
type Cell = [string, string];
type Move = { axis: 0 | 1 | 2; layer: -1 | 0 | 1; dir: 1 | -1 };
type Step = { kind: "wait"; ms: number } | { kind: "move"; mv: Move };

const IDENTITY: Mat = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
const AXES = ["X", "Y", "Z"] as const;

const rot = (axis: number, a: number): Mat => {
  const c = Math.round(Math.cos(a));
  const s = Math.round(Math.sin(a));
  if (axis === 0) return [[1, 0, 0], [0, c, -s], [0, s, c]];
  if (axis === 1) return [[c, 0, s], [0, 1, 0], [-s, 0, c]];
  return [[c, -s, 0], [s, c, 0], [0, 0, 1]];
};

const mul = (a: Mat, b: Mat): Mat =>
  a.map((row) => [0, 1, 2].map((j) => row[0] * b[0][j] + row[1] * b[1][j] + row[2] * b[2][j]));

const apply = (m: Mat, v: Vec): Vec =>
  [0, 1, 2].map((i) => Math.round(m[i][0] * v[0] + m[i][1] * v[1] + m[i][2] * v[2]) + 0) as Vec;

const css3d = (m: Mat) =>
  `matrix3d(${m[0][0]},${m[1][0]},${m[2][0]},0,${m[0][1]},${m[1][1]},${m[2][1]},0,${m[0][2]},${m[1][2]},${m[2][2]},0,0,0,0,1)`;

const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

const bounce = (p: number) => {
  const n = 7.5625;
  const d = 2.75;
  if (p < 1 / d) return n * p * p;
  if (p < 2 / d) return n * (p -= 1.5 / d) * p + 0.75;
  if (p < 2.5 / d) return n * (p -= 2.25 / d) * p + 0.9375;
  return n * (p -= 2.625 / d) * p + 0.984375;
};

const FACES = [
  { tab: "Offer", title: "What we offer", pose: [-16, -22] },
  { tab: "Craft", title: "How we make it", pose: [-16, -68] },
  { tab: "Results", title: "What you get", pose: [-64, -12] },
  { tab: "Clients", title: "Who we work with", pose: [-16, 158] },
  { tab: "Channels", title: "Where we show up", pose: [-16, 112] },
  { tab: "Process", title: "How we work", pose: [64, -12] },
];

const FRONT: Cell[][] = [
  [["✦", "Brand"], ["▶", "Film"], ["♥", "Social"]],
  [["◎", "Digital"], ["✎", "Content"], ["↗", "Ads"]],
  [["★", "Creators"], ["☺", "Memes"], ["⌘", "Web"]],
];
const RIGHT: Cell[][] = [
  [["¶", "Script"], ["◉", "Shoot"], ["✂", "Edit"]],
  [["▷", "Trailer"], ["✺", "Story"], ["▤", "Poster"]],
  [["◐", "Design"], ["♪", "Sound"], ["➚", "Launch"]],
];
const TOP: Cell[][] = [
  [["◌", "Reach"], ["◔", "Views"], ["➜", "Leads"]],
  [["₹", "Sales"], ["✓", "Trust"], ["✹", "Buzz"]],
  [["↑", "Growth"], ["♦", "Loyalty"], ["♥", "Fans"]],
];
const BACK: Cell[][] = [
  [["❖", "Films"], ["↗", "Startups"], ["▦", "Retail"]],
  [["✿", "Food"], ["♛", "Fashion"], ["⌂", "Property"]],
  [["✎", "Schools"], ["♫", "Music"], ["★", "Events"]],
];
const LEFT: Cell[][] = [
  [["◎", "Insta"], ["▶", "YouTube"], ["↻", "Reels"]],
  [["G", "Google"], ["⌘", "Web"], ["▭", "TV"]],
  [["▤", "Print"], ["⌖", "Outdoor"], ["✉", "WhatsApp"]],
];
const BOTTOM: Cell[][] = [
  [["◧", "Brief"], ["▥", "Plan"], ["✦", "Create"]],
  [["◑", "Review"], ["➚", "Publish"], ["◔", "Track"]],
  [["⚙", "Tweak"], ["⇧", "Scale"], ["↻", "Repeat"]],
];

const START: Vec[] = [];
for (let y = -1; y <= 1; y++)
  for (let x = -1; x <= 1; x++)
    for (let z = -1; z <= 1; z++) START.push([x, y, z]);

const faceDefs = (x: number, y: number, z: number) => {
  const f = z === 1 ? FRONT[y + 1][x + 1] : null;
  const b = z === -1 ? BACK[y + 1][1 - x] : null;
  const r = x === 1 ? RIGHT[y + 1][1 - z] : null;
  const l = x === -1 ? LEFT[y + 1][z + 1] : null;
  const u = y === -1 ? TOP[z + 1][x + 1] : null;
  const d = y === 1 ? BOTTOM[1 - z][x + 1] : null;
  const gold = "#F5B921";
  const navy = "#0B1B3A";
  return [
    { k: "f", t: `translateZ(${HALF}px)`, cell: f, bg: f ? (x === 0 && y === 0 ? gold : "#EEEAE0") : "", fg: navy },
    { k: "b", t: `rotateY(180deg) translateZ(${HALF}px)`, cell: b, bg: b ? (x === 0 && y === 0 ? gold : "#E4572E") : "", fg: x === 0 && y === 0 ? navy : "#ffffff" },
    { k: "r", t: `rotateY(90deg) translateZ(${HALF}px)`, cell: r, bg: r ? (y === 0 && z === 0 ? gold : "#213E6B") : "", fg: y === 0 && z === 0 ? navy : "#ffffff" },
    { k: "l", t: `rotateY(-90deg) translateZ(${HALF}px)`, cell: l, bg: l ? (y === 0 && z === 0 ? gold : "#ffffff") : "", fg: navy },
    { k: "u", t: `rotateX(90deg) translateZ(${HALF}px)`, cell: u, bg: u ? (x === 0 && z === 0 ? "#EEEAE0" : gold) : "", fg: navy },
    { k: "d", t: `rotateX(-90deg) translateZ(${HALF}px)`, cell: d, bg: d ? (x === 0 && z === 0 ? gold : "#EEEAE0") : "", fg: navy },
  ];
};

const buildCycle = (): Step[] => {
  const seq: Move[] = [];
  let last = -1;
  while (seq.length < 4) {
    const axis = Math.floor(Math.random() * 3) as 0 | 1 | 2;
    if (axis === last) continue;
    last = axis;
    const layers = [-1, 0, 1] as const;
    seq.push({ axis, layer: layers[Math.floor(Math.random() * 3)], dir: Math.random() < 0.5 ? 1 : -1 });
  }
  return [
    { kind: "wait", ms: 900 },
    ...seq.map((mv): Step => ({ kind: "move", mv })),
    { kind: "wait", ms: 650 },
    ...[...seq].reverse().map((mv): Step => ({ kind: "move", mv: { ...mv, dir: (mv.dir * -1) as 1 | -1 } })),
  ];
};

const VattalCube = ({ reduce }: { reduce: boolean }) => {
  const stage = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const els = useRef<(HTMLDivElement | null)[]>([]);
  const faceRef = useRef(0);
  const autoRef = useRef(true);
  const cmd = useRef<"manual" | "auto" | null>(null);
  const [face, setFace] = useState(0);
  const [auto, setAuto] = useState(true);
  const [k, setK] = useState(1);

  useEffect(() => {
    const fit = () => {
      const wide = window.innerWidth >= 1024;
      setK(wide ? Math.max(0.6, Math.min(1, (window.innerHeight - 520) / 300)) : 1);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const pick = (i: number) => {
    faceRef.current = i;
    autoRef.current = false;
    cmd.current = "manual";
    setFace(i);
    setAuto(false);
  };

  const resume = () => {
    autoRef.current = true;
    cmd.current = "auto";
    setAuto(true);
  };

  useEffect(() => {
    const state = START.map((p) => ({ pos: [...p] as Vec, m: IDENTITY }));
    const delays = START.map(([x, y, z]) => ((1 - y) * 9 + (x + 1) * 3 + (z + 1)) * STAGGER_MS);

    const place = (mv?: Move, deg = 0, introT: number | null = null) => {
      state.forEach((c, i) => {
        const el = els.current[i];
        if (!el) return;
        let drop = "";
        let op = 1;
        if (introT !== null) {
          const p = Math.min(1, Math.max(0, (introT - delays[i]) / DROP_MS));
          drop = `translate3d(0,${-760 * (1 - bounce(p))}px,0) `;
          op = Math.min(1, p * 4);
        }
        const spin = mv && c.pos[mv.axis] === mv.layer ? `rotate${AXES[mv.axis]}(${deg}deg) ` : "";
        el.style.opacity = String(op);
        el.style.transform = `${drop}${spin}translate3d(${c.pos[0] * S}px,${c.pos[1] * S}px,${c.pos[2] * S}px) ${css3d(c.m)}`;
      });
    };

    const commit = (mv: Move) => {
      const R = rot(mv.axis, (mv.dir * Math.PI) / 2);
      state.forEach((c) => {
        if (c.pos[mv.axis] === mv.layer) {
          c.pos = apply(R, c.pos);
          c.m = mul(R, c.m);
        }
      });
    };

    const cur = { rx: FACES[0].pose[0], ry: FACES[0].pose[1] };
    const applyPose = (now: number) => {
      if (!group.current) return;
      const rx = cur.rx + (reduce ? 0 : 2.5 * Math.sin(now / 2300));
      const ry = cur.ry + (reduce ? 0 : 5 * Math.sin(now / 1900));
      group.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    type Phase = "intro" | "tour" | "scramble" | "idle";
    let phase: Phase = reduce ? "idle" : "intro";
    let phaseStart = performance.now();
    let last = phaseStart;
    let steps: Step[] = [];
    let idx = 0;
    let stepStart = 0;
    let raf = 0;
    let visible = reduce;
    let restart = false;

    place(undefined, 0, reduce ? null : -1);
    applyPose(0);

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !visible) restart = true;
      visible = e.isIntersecting;
    }, { threshold: 0.35 });
    if (stage.current && !reduce) io.observe(stage.current);

    const finishScramble = () => {
      for (let k = idx; k < steps.length; k++) {
        const st = steps[k];
        if (st.kind === "move") commit(st.mv);
      }
      place();
    };

    const setTourFace = (i: number) => {
      faceRef.current = i;
      setFace(i);
    };

    const tick = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;

      if (!visible) {
        phaseStart += dt;
        stepStart += dt;
        raf = requestAnimationFrame(tick);
        return;
      }

      if (restart && !reduce) {
        restart = false;
        if (phase === "scramble") finishScramble();
        phase = "intro";
        phaseStart = now;
      }

      if (cmd.current) {
        if (phase === "scramble") finishScramble();
        if (phase === "intro") place();
        if (cmd.current === "manual") phase = "idle";
        if (cmd.current === "auto" && !reduce) {
          phase = "tour";
          phaseStart = now;
        }
        cmd.current = null;
      }

      if (!reduce) {
        if (phase === "intro") {
          const t = now - phaseStart;
          if (t >= INTRO_MS) {
            place();
            phase = autoRef.current ? "tour" : "idle";
            phaseStart = now;
          } else {
            place(undefined, 0, t);
          }
        } else if (phase === "tour") {
          if (now - phaseStart >= HOLD_MS) {
            phaseStart = now;
            if (faceRef.current >= FACES.length - 1) {
              setTourFace(0);
              steps = buildCycle();
              idx = 0;
              stepStart = now;
              phase = "scramble";
            } else {
              setTourFace(faceRef.current + 1);
            }
          }
        } else if (phase === "scramble") {
          const st = steps[idx];
          const el = now - stepStart;
          const advance = () => {
            idx += 1;
            stepStart = now;
            if (idx >= steps.length) {
              phase = autoRef.current ? "tour" : "idle";
              phaseStart = now;
              setTourFace(0);
            }
          };
          if (st.kind === "wait") {
            if (el >= st.ms) advance();
          } else {
            const p = Math.min(1, el / MOVE_MS);
            place(st.mv, st.mv.dir * 90 * easeInOut(p));
            if (p >= 1) {
              commit(st.mv);
              place();
              advance();
            }
          }
        }
      }

      const [tx0, base] = FACES[faceRef.current].pose;
      const ty = base + 360 * Math.round((cur.ry - base) / 360);
      const k = reduce ? 1 : 1 - Math.exp(-dt / 150);
      cur.rx += (tx0 - cur.rx) * k;
      cur.ry += (ty - cur.ry) * k;
      applyPose(now);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [reduce]);

  const next = () => pick((faceRef.current + 1) % FACES.length);

  const chip = (on: boolean, gold?: boolean) =>
    `px-2.5 py-1 text-[11px] font-bold transition-colors ${
      on
        ? gold
          ? "bg-[#F5B921] text-[#0B1B3A]"
          : "bg-[#0B1B3A] text-white"
        : "bg-[#0B1B3A]/[0.06] text-[#0B1B3A]/70 hover:bg-[#0B1B3A]/15"
    }`;

  return (
    <div ref={stage} className="mt-6 flex flex-col items-center select-none">
      <div
        className="relative cursor-pointer"
        style={{ width: 260 * k, height: 260 * k }}
        onClick={next}
        role="img"
        aria-label="Rubik cube of Vattal services. Click to see the next side."
      >
        <div className="absolute left-0 top-0 h-[260px] w-[260px]" style={{ transform: `scale(${k})`, transformOrigin: "top left" }}>
        <div className="absolute inset-x-8 bottom-1 h-5 rounded-[50%] bg-[#0B1B3A]/15 blur-md" />
        <div className="absolute inset-0" style={{ perspective: 900 }}>
          <div ref={group} className="absolute left-1/2 top-1/2" style={{ transformStyle: "preserve-3d" }}>
            {START.map(([x, y, z], i) => (
              <div
                key={i}
                ref={(el) => {
                  els.current[i] = el;
                }}
                className="absolute"
                style={{ width: S, height: S, left: -HALF, top: -HALF, transformStyle: "preserve-3d" }}
              >
                {faceDefs(x, y, z).map((f) => (
                  <div
                    key={f.k}
                    className="absolute inset-0 bg-[#050D1C]"
                    style={{ transform: f.t, backfaceVisibility: "hidden" }}
                  >
                    {f.bg && (
                      <div
                        className="absolute inset-[3px] flex flex-col items-center justify-center gap-[4px] rounded-[5px] leading-none"
                        style={{ background: f.bg, color: f.fg }}
                      >
                        {f.cell && (
                          <>
                            <span className="text-[18px] font-black">{f.cell[0]}</span>
                            <span className="text-[7.5px] font-bold tracking-[0.04em]">{f.cell[1]}</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <p className="mt-2 text-sm font-bold text-[#0B1B3A]">{FACES[face].title}</p>

      <div className="mt-3 flex max-w-[330px] flex-wrap justify-center gap-1.5">
        {FACES.map((f, i) => (
          <button key={f.tab} type="button" onClick={() => pick(i)} aria-pressed={face === i} className={chip(face === i)}>
            {f.tab}
          </button>
        ))}
        <button type="button" onClick={auto ? undefined : resume} aria-pressed={auto} className={chip(auto, true)}>
          Auto
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion() ?? false;

  return (
    <LazyMotion features={domAnimation}>
      <section id="services" className="relative bg-white text-[#0B1B3A]" style={{ overflow: "clip" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(11,27,58,0.035) 1px, transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#F5B921]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <m.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduce ? 0 : 0.55, ease: EASE }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <h2 className="text-[clamp(2.6rem,min(6.2vw,10.5vh),6.2rem)] font-black leading-[0.84] tracking-[-0.085em]">
                WE MAKE
                <br />
                THINGS
                <br />
                <span className="relative inline-block">
                  <span className="absolute bottom-[0.06em] left-[-2%] h-[26%] w-[104%] -rotate-[1deg] bg-[#F5B921]" />
                  <span className="relative">MOVE.</span>
                </span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-[#0B1B3A]/60 md:text-lg">
                Film, brands, digital and everything between the idea and the audience.
              </p>
              <m.div
                animate={{ width: active !== null ? 90 : 60 }}
                transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
                className="mt-5 h-[3px] bg-[#F5B921]"
              />

              <VattalCube reduce={reduce} />
            </m.div>

            <ul className="min-w-0 w-full" onMouseLeave={() => setActive(null)}>
              {services.map((service, index) => (
                <ServiceRow
                  key={service.number}
                  service={service}
                  active={active === index}
                  reduce={reduce}
                  onActivate={() => setActive(index)}
                  onToggle={() => setActive(active === index ? null : index)}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="h-20 bg-[#0B1B3A]" />
      </section>
    </LazyMotion>
  );
};

export default Services;