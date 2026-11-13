"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const INK = "#0B1B3A";
const PAPER = "#F6F5F1";
const BOARD = "#ECEAE3";
const SUN = "#F5B921";
const BLUE = "#3D5AFE";
const RED = "#E5533D";

const TYPE = '"American Typewriter","Courier New",Courier,serif';
const EASE = [0.22, 1, 0.36, 1] as const;

const S = {
  stroke: INK,
  strokeWidth: 3.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function FilmFrame() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <rect
        x="8"
        y="12"
        width="104"
        height="76"
        rx="3"
        fill="#fff"
        {...S}
      />
      <rect x="17" y="21" width="86" height="58" fill={INK} />
      <circle cx="60" cy="50" r="18" fill={SUN} />
      <path d="M49 59L60 39L71 59Z" fill={INK} />
      <rect x="8" y="12" width="104" height="10" fill={SUN} />
      <rect x="8" y="78" width="104" height="10" fill={SUN} />
      <circle cx="15" cy="17" r="2.5" fill={INK} />
      <circle cx="105" cy="17" r="2.5" fill={INK} />
      <circle cx="15" cy="83" r="2.5" fill={INK} />
      <circle cx="105" cy="83" r="2.5" fill={INK} />
    </svg>
  );
}

function Clapper() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <rect x="17" y="35" width="86" height="54" rx="5" fill="#fff" {...S} />
      <path
        d="M13 28L100 13L104 34L17 49Z"
        fill={INK}
        {...S}
      />
      <path
        d="M30 45L39 24M53 41L62 20M76 37L85 16"
        stroke="#fff"
        strokeWidth="6"
      />
      <circle cx="48" cy="63" r="12" fill={SUN} />
      <path d="M48 56V70M41 63H55" stroke={INK} strokeWidth="3" />
      <path d="M69 64H91" stroke={INK} strokeWidth="3" />
    </svg>
  );
}

function FilmStrip() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <path
        d="M10 20H110V80H10Z"
        fill="#fff"
        {...S}
      />
      <path
        d="M10 20H110V80H10Z"
        fill="none"
        stroke={SUN}
        strokeWidth="8"
        strokeDasharray="10 7"
      />
      <path
        d="M35 20V80M60 20V80M85 20V80"
        stroke={INK}
        strokeWidth="2"
        opacity=".35"
      />
      <circle cx="47" cy="50" r="11" fill={INK} />
      <circle cx="47" cy="50" r="5" fill={SUN} />
      <path
        d="M69 40L82 50L69 60Z"
        fill={RED}
        stroke={INK}
        strokeWidth="3"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <circle
        cx="60"
        cy="50"
        r="37"
        fill={SUN}
        stroke={INK}
        strokeWidth="4"
      />
      <path
        d="M39 67L52 33L65 67"
        fill="none"
        stroke={INK}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 53H68"
        stroke={INK}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="79" cy="35" r="6" fill={BLUE} />
    </svg>
  );
}

function IdentityGrid() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <rect
        x="15"
        y="14"
        width="90"
        height="72"
        fill="#fff"
        {...S}
      />
      <path
        d="M30 14V86M45 14V86M60 14V86M75 14V86M90 14V86"
        stroke={INK}
        strokeWidth="1"
        opacity=".2"
      />
      <path
        d="M15 29H105M15 44H105M15 59H105M15 74H105"
        stroke={INK}
        strokeWidth="1"
        opacity=".2"
      />
      <circle cx="60" cy="50" r="21" fill={SUN} />
      <path
        d="M49 62L60 35L71 62"
        fill="none"
        stroke={INK}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M54 52H66"
        stroke={INK}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandWorld() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <rect
        x="18"
        y="18"
        width="84"
        height="64"
        rx="5"
        fill={INK}
      />
      <circle cx="41" cy="41" r="12" fill={SUN} />
      <rect x="59" y="31" width="29" height="6" rx="3" fill="#fff" />
      <rect x="59" y="43" width="21" height="4" rx="2" fill="#fff" opacity=".5" />
      <rect x="29" y="61" width="62" height="7" rx="3" fill={SUN} />
      <circle cx="92" cy="72" r="6" fill={RED} />
    </svg>
  );
}

function Phone() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <rect
        x="36"
        y="7"
        width="48"
        height="86"
        rx="9"
        fill="#fff"
        {...S}
      />
      <rect
        x="42"
        y="19"
        width="36"
        height="57"
        rx="3"
        fill={BLUE}
      />
      <circle cx="60" cy="39" r="10" fill={SUN} />
      <path
        d="M50 58H70"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M54 66H66"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".6"
      />
      <circle cx="60" cy="84" r="3" fill={INK} />
    </svg>
  );
}

function Cursor() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <path
        d="M31 10L86 51L63 57L77 84L66 90L52 63L35 76Z"
        fill="#fff"
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="91" cy="28" r="13" fill={SUN} stroke={INK} strokeWidth="3" />
      <path
        d="M91 21V35M84 28H98"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Browser() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full">
      <rect
        x="8"
        y="16"
        width="104"
        height="68"
        rx="7"
        fill="#fff"
        {...S}
      />
      <path d="M8 34H112" {...S} />
      <circle cx="20" cy="25" r="3" fill={RED} />
      <circle cx="30" cy="25" r="3" fill={SUN} />
      <circle cx="40" cy="25" r="3" fill={BLUE} />
      <rect x="20" y="45" width="31" height="28" fill={INK} />
      <rect x="59" y="45" width="39" height="6" rx="3" fill={INK} />
      <rect x="59" y="58" width="29" height="5" rx="2" fill={INK} opacity=".25" />
      <rect x="59" y="68" width="34" height="5" rx="2" fill={SUN} />
    </svg>
  );
}

// function Flow() {
//   return (
//     <svg viewBox="0 0 120 100" className="h-full w-full">
//       <circle cx="20" cy="50" r="9" fill={SUN} stroke={INK} strokeWidth="3" />
//       <circle cx="60" cy="50" r="9" fill={INK} />
//       <circle cx="100" cy="50" r="9" fill={RED} stroke={INK} strokeWidth="3" />
//       <path
//         d="M29 50H51M69 50H91"
//         stroke={INK}
//         strokeWidth="3"
//         strokeDasharray="5 4"
//       />
//       <path
//         d="M45 43L52 50L45 57M85 43L92 50L85 57"
//         fill="none"
//         stroke={INK}
//         strokeWidth="3"
//       />
//     </svg>
//   );
// }

type Item = {
  key: string;
  group: number;
  title: string;
  description: string;
  loose: string;
  x: number;
  y: number;
  r: number;
  art: React.ReactNode;
};

const GROUPS = ["Film", "Brand", "Digital"];

const ITEMS: Item[] = [
  {
    key: "film-frame",
    group: 0,
    title: "Make the frame matter.",
    description:
      "Every frame should carry the story forward — visually, emotionally or culturally.",
    loose: "FRAME THIS.",
    x: 16,
    y: 18,
    r: -10,
    art: <FilmFrame />,
  },
  {
    key: "clapper",
    group: 0,
    title: "Story before spectacle.",
    description:
      "A campaign becomes stronger when the idea underneath it is stronger than the noise around it.",
    loose: "TAKE 47.",
    x: 73,
    y: 65,
    r: 9,
    art: <Clapper />,
  },
  {
    key: "film-strip",
    group: 0,
    title: "Turn releases into moments.",
    description:
      "A film does not stop being interesting when the credits roll. We build ideas that keep the conversation moving.",
    loose: "KEEP ROLLING.",
    x: 43,
    y: 72,
    r: -6,
    art: <FilmStrip />,
  },
  {
    key: "brand-mark",
    group: 1,
    title: "Make the name recognisable.",
    description:
      "A strong identity creates recognition before the audience even reads the name.",
    loose: "MAKE IT STICK.",
    x: 87,
    y: 18,
    r: 14,
    art: <BrandMark />,
  },
  {
    key: "identity-grid",
    group: 1,
    title: "Build a point of view.",
    description:
      "Branding is more than a logo. It is a consistent way of showing up, speaking and being remembered.",
    loose: "FIND THE SHAPE.",
    x: 29,
    y: 44,
    r: 7,
    art: <IdentityGrid />,
  },
  {
    key: "brand-world",
    group: 1,
    title: "Build a world, not a wrapper.",
    description:
      "The strongest brands have a visual world people can step into and recognise anywhere.",
    loose: "TOO MUCH?",
    x: 58,
    y: 26,
    r: -8,
    art: <BrandWorld />,
  },
  {
    key: "phone",
    group: 2,
    title: "Design for the first second.",
    description:
      "Digital attention is earned quickly. The first interaction needs a reason to continue.",
    loose: "STOP THE SCROLL.",
    x: 9,
    y: 70,
    r: -17,
    art: <Phone />,
  },
  {
    key: "cursor",
    group: 2,
    title: "Make people interact.",
    description:
      "Good digital experiences do not just explain. They invite people to explore, click and continue.",
    loose: "CLICK THIS.",
    x: 79,
    y: 44,
    r: 6,
    art: <Cursor />,
  },
  {
    key: "browser",
    group: 2,
    title: "Make complex feel simple.",
    description:
      "Behind every polished experience is a system that makes the journey feel effortless.",
    loose: "404 FEELINGS.",
    x: 51,
    y: 80,
    r: 13,
    art: <Browser />,
  },
];

const COL_X = [18, 50, 82];
const ROW_Y = [18, 45, 72];

function IdeaBoard() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const [sorted, setSorted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const touched = useRef(false);

  useEffect(() => {
    if (!inView || touched.current) return;

    const timeout = setTimeout(() => {
      if (!touched.current) setSorted(true);
    }, reduce ? 0 : 1900);

    return () => clearTimeout(timeout);
  }, [inView, reduce]);

  const choose = (value: boolean) => {
    touched.current = true;
    setSorted(value);
    setSelected(null);
  };

  const getRow = (group: number, key: string) =>
    ITEMS.filter((item) => item.group === group).findIndex(
      (item) => item.key === key
    );

  return (
    <div ref={ref}>
      <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0B1B3A]/40">
            The Vattal idea archive
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em]">
            From loose thoughts to clear directions.
          </h2>
        </div>

        <div
          className="flex w-fit rounded-full p-1"
          style={{
            background: BOARD,
            border: `1.5px solid ${INK}`,
          }}
        >
          {[false, true].map((value) => (
            <button
              key={String(value)}
              type="button"
              onClick={() => choose(value)}
              className="relative z-10 rounded-full px-5 py-2 text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{
                color: sorted === value ? PAPER : INK,
              }}
            >
              {sorted === value && (
                <motion.span
                  layoutId="archive-pill"
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{ background: INK }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {value ? "Sorted" : "Chaos"}
            </button>
          ))}
        </div>
      </div>

      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] md:aspect-[10/7]"
        style={{
          background: BOARD,
          border: `1.5px solid ${INK}`,
          backgroundImage: `linear-gradient(${INK}0D 1px,transparent 1px),linear-gradient(90deg,${INK}0D 1px,transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      >
        {GROUPS.map((group, index) => (
          <motion.div
            key={group}
            className="pointer-events-none absolute bottom-[3%] top-[3%]"
            style={{
              left: `${COL_X[index] - 15}%`,
              width: "30%",
              border: `1px dashed ${INK}42`,
              borderRadius: "1rem",
            }}
            animate={{
              opacity: sorted ? 1 : 0,
            }}
            transition={{
              duration: 0.45,
              delay: sorted ? index * 0.08 : 0,
            }}
          >
            <div className="absolute left-4 top-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5B921]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                {group}
              </span>
            </div>
          </motion.div>
        ))}

        {ITEMS.map((item, index) => {
          const targetX = sorted ? COL_X[item.group] : item.x;
          const targetY = sorted
            ? ROW_Y[getRow(item.group, item.key)]
            : item.y;

          const active = selected === item.key;

          return (
            <motion.div
              key={item.key}
              className="absolute -ml-[13%] w-[26%] md:-ml-[7%] md:w-[14%]"
              animate={{
                left: `${targetX}%`,
                top: `${targetY}%`,
                rotate: sorted ? 0 : item.r,
                scale: active ? 1.13 : 1,
                zIndex: active ? 30 : 1,
              }}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 75,
                      damping: 14,
                      delay: sorted ? index * 0.07 : index * 0.025,
                    }
              }
            >
              <motion.button
                type="button"
                onClick={() =>
                  setSelected(active ? null : item.key)
                }
                whileHover={
                  reduce
                    ? undefined
                    : {
                        scale: 1.06,
                      }
                }
                className="block w-full outline-none"
              >
                <motion.div
                  animate={
                    reduce || sorted
                      ? { y: 0 }
                      : { y: [0, -4, 0] }
                  }
                  transition={{
                    duration: 2.4 + (index % 4) * 0.45,
                    repeat: sorted ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.art}
                </motion.div>

                <div
                  className="mx-auto mt-1 w-fit max-w-[150px] px-2 py-1 text-center"
                  style={{
                    background: sorted ? INK : PAPER,
                    color: sorted ? PAPER : INK,
                    border: `1px solid ${INK}`,
                    borderRadius: 999,
                  }}
                >
                  <span
                    className="block text-[clamp(.55rem,1.05vw,.7rem)] leading-tight"
                    style={{ fontFamily: TYPE }}
                  >
                    {sorted ? item.title : item.loose}
                  </span>
                </div>
              </motion.button>

              {active && sorted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 top-full z-50 mt-3 w-[210px] -translate-x-1/2 bg-[#0B1B3A] p-4 text-left text-[#F6F5F1] shadow-xl"
                >
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#F5B921]">
                    {GROUPS[item.group]}
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-tight">
                    {item.title}
                  </p>

                  <p
                    className="mt-3 text-xs leading-[1.7] text-white/55"
                    style={{ fontFamily: TYPE }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-between gap-6">
        <p
          className="max-w-2xl text-xs leading-[1.7] text-[#0B1B3A]/65"
          style={{ fontFamily: TYPE }}
        >
          {sorted
            ? "The point is not to remove the weirdness. It is to give every idea a clear job."
            : "The first stage is allowed to be messy. That is where unexpected connections usually appear."}
        </p>
      </div>
    </div>
  );
}

// const PRINCIPLES = [
//   {
//     number: "01",
//     title: "Find the thought.",
//     description:
//       "Before we choose a format, we find the idea. What are we actually trying to make people think, feel or do?",
//   },
//   {
//     number: "02",
//     title: "Give it a point of view.",
//     description:
//       "The work should sound and look like something only this brand could have made.",
//   },
//   {
//     number: "03",
//     title: "Make attention useful.",
//     description:
//       "A beautiful interruption is not enough. The creative has to lead somewhere — into a story, a conversation or an action.",
//   },
//   {
//     number: "04",
//     title: "Make it work in the real world.",
//     description:
//       "Ideas eventually become films, campaigns, posts, products and experiences. We design with that reality in mind.",
//   },
// ];

export default function CreativeIdeas() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: PAPER,
        color: INK,
      }}
    >
      <section className="px-5 pb-14 pt-28 sm:px-8 md:px-12 md:pt-36">
        <div className="mx-auto max-w-[1300px]">
          <motion.div
            initial={{
              opacity: 0,
              y: reduce ? 0 : 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduce ? 0 : 0.9,
              ease: EASE,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#F5B921]" />
            </div>

            <h1 className="mt-8 max-w-[1100px] text-[clamp(3.6rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.065em]">
              Wild ideas.
              <br />
              <span className="text-[#0B1B3A]/25">
                Filed properly.
              </span>
            </h1>

            <div className="mt-9 grid gap-10 md:grid-cols-[1fr_310px] md:items-end">
              <p
                className="max-w-2xl text-base leading-[1.75] md:text-lg"
                style={{ fontFamily: TYPE }}
              >
                We start with the unexpected, then give it a purpose. From
                film and brand stories to digital experiences, our ideas are
                built to be noticed — and built to work.
              </p>

              <div className="border-l border-[#0B1B3A]/20 pl-5">
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#0B1B3A]/35">
                  Our bias
                </p>

                <p className="mt-3 text-xl font-bold leading-[1.05] tracking-[-0.03em]">
                  Unexpected
                  <br />
                  thinking.
                  <br />
                  Clear
                  <br />
                  execution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1300px]">
          <IdeaBoard />
        </div>
      </section>

      {/* <section className="border-t border-[#0B1B3A]/15 px-5 py-24 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0B1B3A]/40">
                How we work
              </p>

              <h2 className="mt-7 text-[clamp(3rem,6vw,6rem)] font-black leading-[0.82] tracking-[-0.065em]">
                CREATIVE
                <br />
                WITH
                <br />
                <span className="text-[#0B1B3A]/20">
                  PURPOSE.
                </span>
              </h2>
            </div>

            <div className="border-t border-[#0B1B3A]/15">
              {PRINCIPLES.map((item) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: reduce ? 0 : 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: reduce ? 0 : 0.6,
                    ease: EASE,
                  }}
                  className="grid gap-5 border-b border-[#0B1B3A]/15 py-7 md:grid-cols-[50px_1fr_1fr]"
                >
                  <span className="text-[9px] font-bold text-[#F5B921]">
                    {item.number}
                  </span>

                  <h3 className="text-xl font-bold leading-tight tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p
                    className="text-sm leading-[1.75] text-[#0B1B3A]/55"
                    style={{ fontFamily: TYPE }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="px-5 pb-24 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1300px]">
          <div className="relative overflow-hidden bg-[#0B1B3A] px-6 py-14 text-[#F6F5F1] md:px-14 md:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(#F6F5F1 1px,transparent 1px),linear-gradient(90deg,#F6F5F1 1px,transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#F5B921]">
                  Have one?
                </p>

                <h2 className="mt-6 max-w-[850px] text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.78] tracking-[-0.065em]">
                  Bring the
                  <br />
                  unfinished
                  <br />
                  <span className="text-white/25">
                    idea.
                  </span>
                </h2>

                <p
                  className="mt-8 max-w-xl text-sm leading-[1.8] text-white/50"
                  style={{ fontFamily: TYPE }}
                >
                  The half-written thought. The strange reference. The
                  idea that is not ready for a presentation yet. Start
                  there.
                </p>
              </div>

              <a
                href="#contact"
                className="group flex w-fit items-center gap-4 rounded-full bg-[#F5B921] py-2 pl-7 pr-2 text-[#0B1B3A] transition-transform duration-300 hover:scale-[1.03]"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Start something
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1B3A] text-[#F5B921] transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between text-[8px] uppercase tracking-[0.25em] text-[#0B1B3A]/30">
            <span>Vattal Studios</span>
            <span>Film / Brand / Digital</span>
          </div>
        </div>
      </section> */}
    </main>
  );
}