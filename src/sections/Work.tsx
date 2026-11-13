
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aindhamVedham from "../assets/movies/Aindham Vedham.jpg";
import alaey from "../assets/movies/Alaey.jpg";
import aneethi from "../assets/movies/Aneethi.jpg";
import ddNextLevel from "../assets/movies/DD Next Level.jpg";
import ddReturns from "../assets/movies/DD Returns.jpg";
import demonteColony2 from "../assets/movies/Demonte Colony 2.jpg";
import janaNayagan from "../assets/movies/Jana Nayagan.jpg";
import kadaseelaBiriyani from "../assets/movies/Kadaseela Biriyani.jpg";
import kooseMunisamy from "../assets/movies/Koose Munisamy Veerappan.jpg";
import mandela from "../assets/movies/Mandela.jpg";
import nooruSaami from "../assets/movies/Nooru Saami.jpg";
import office from "../assets/movies/Office.jpg";
import parimalaCo from "../assets/movies/Parimala & Co.jpg";
import raghuThatha from "../assets/movies/Raghu Thatha.jpg";
import sakthiThirumagan from "../assets/movies/Sakthi Thirumagan.jpg";
import sn2 from "../assets/movies/SN 2.jpg";
import sn from "../assets/movies/SN.jpg";
import test from "../assets/movies/Test.jpg";
import thaaiKizhavi from "../assets/movies/Thaai Kizhavi.jpg";
import thalaikoothal from "../assets/movies/Thalaikoothal.jpg";
import thalavettiyaanPaalayam from "../assets/movies/Thalavettiyaan Paalayam.jpg";
import theVillage from "../assets/movies/The Village_.jpg";
import velumMayilum from "../assets/movies/Velum Mayilum.jpg";

const projects = [
  { title: "Nooru Saami", description: "Movie Promotion", year: "2026", image: nooruSaami },
  { title: "Aindham Vedham", description: "Movie Promotion", year: "2026", image: aindhamVedham },
  { title: "Alaey", description: "Movie Promotion", year: "2026", image: alaey },
  { title: "Aneethi", description: "Movie Promotion", year: "2026", image: aneethi },
  { title: "DD Next Level", description: "Movie Promotion", year: "2026", image: ddNextLevel },
  { title: "DD Returns", description: "Movie Promotion", year: "2026", image: ddReturns },
  { title: "Demonte Colony 2", description: "Movie Promotion", year: "2026", image: demonteColony2 },
  { title: "Jana Nayagan", description: "Movie Promotion", year: "2026", image: janaNayagan },
  { title: "Kadaseela Biriyani", description: "Movie Promotion", year: "2026", image: kadaseelaBiriyani },
  { title: "Koose Munisamy Veerappan", description: "Movie Promotion", year: "2026", image: kooseMunisamy },
  { title: "Mandela", description: "Movie Promotion", year: "2026", image: mandela },
  { title: "Office", description: "Movie Promotion", year: "2026", image: office },
  { title: "Parimala & Co.", description: "Movie Promotion", year: "2026", image: parimalaCo },
  { title: "Raghu Thatha", description: "Movie Promotion", year: "2026", image: raghuThatha },
  { title: "Sakthi Thirumagan", description: "Movie Promotion", year: "2026", image: sakthiThirumagan },
  { title: "SN 2", description: "Movie Promotion", year: "2026", image: sn2 },
  { title: "SN", description: "Movie Promotion", year: "2026", image: sn },
  { title: "Test", description: "Movie Promotion", year: "2026", image: test },
  { title: "Thaai Kizhavi", description: "Movie Promotion", year: "2026", image: thaaiKizhavi },
  { title: "Thalaikoothal", description: "Movie Promotion", year: "2026", image: thalaikoothal },
  { title: "Thalavettiyaan Paalayam", description: "Movie Promotion", year: "2026", image: thalavettiyaanPaalayam },
  { title: "The Village", description: "Movie Promotion", year: "2026", image: theVillage },
  { title: "Velum Mayilum", description: "Movie Promotion", year: "2026", image: velumMayilum },
];

const TAU = Math.PI * 2;
const TOTAL = projects.length;
const STEP = TAU / TOTAL;
const SPEED = 0.12;
const LIFT = 90;

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export default function Work() {
  const reduce = useReducedMotion() ?? false;

  const stageRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef(-Math.PI * 0.9);
  const targetRef = useRef<number | null>(null);

  const [rot, setRot] = useState(rotRef.current);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const update = () => setWidth(el.clientWidth);

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (targetRef.current !== null) {
        const diff = targetRef.current - rotRef.current;
        const ease = 1 - Math.exp(-dt * 7);

        rotRef.current += diff * ease;

        if (Math.abs(diff) < 0.001) {
          rotRef.current = targetRef.current;
          targetRef.current = null;
        }
      } else if (!reduce && TOTAL > 1) {
        rotRef.current += dt * SPEED;
      }

      setRot(rotRef.current);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const active =
    ((Math.round(rot / STEP) % TOTAL) + TOTAL) % TOTAL;

  const rotateTo = (index: number) => {
    if (TOTAL <= 1) return;

    const wanted = index * STEP;

    let delta = (wanted - rotRef.current) % TAU;

    if (delta > Math.PI) delta -= TAU;
    if (delta < -Math.PI) delta += TAU;

    targetRef.current = rotRef.current + delta;
  };

  const mobile = width < 640;

  const cardW = mobile
    ? 180
    : width < 1024
      ? 250
      : 290;

  const cardH = Math.round((cardW * 4) / 3);

  const radius = mobile
    ? width * 0.34
    : Math.min(width * 0.4, 500);

  const stageH = cardH + LIFT + 70;

  return (
    <section
      id="work"
      className="relative min-h-screen overflow-hidden bg-[#060F22] px-5 py-24 text-[#F5F1E8] sm:px-8 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[48%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A77A20]/[0.08] blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A77A20]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A77A20]/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-10">
          <h2 className="font-['Instrument_Serif'] text-[clamp(4rem,9vw,9rem)] leading-[0.8] tracking-[-0.05em]">
            Made to
            <br />
            <span className="text-[#F5F1E8]/35">be seen.</span>
          </h2>
        </div>

        <motion.div
          ref={stageRef}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduce ? 0 : 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[1200px]"
          style={{
            height: stageH,
            perspective: 1600,
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 rounded-[50%] border border-[#A77A20]/25"
            style={{
              width: radius * 2,
              height: LIFT,
              transform: `translate(-50%, calc(-50% - ${LIFT / 2}px))`,
              boxShadow:
                "0 0 80px rgba(167,122,32,0.05), inset 0 0 30px rgba(167,122,32,0.03)",
            }}
          />

          {projects.map((project, i) => {
            const theta = i * STEP - rot;

            const depth = Math.cos(theta);
            const near = (depth + 1) / 2;

            const x = Math.sin(theta) * radius;
            const y = -(1 - near) * LIFT;

            const scale =
              0.34 + 0.66 * Math.pow(near, 1.15);

            const tilt = -Math.sin(theta) * 32;

            const opacity =
              0.22 + 0.78 * near;

            const blur =
              (1 - near) * 7;

            const label =
              clamp((depth - 0.7) / 0.3, 0, 1);

            const front = i === active;

            return (
              <button
                key={project.title}
                onClick={() => rotateTo(i)}
                aria-label={`Show ${project.title}`}
                className="absolute left-1/2 top-1/2 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#A77A20]"
                style={{
                  width: cardW,
                  height: cardH,
                  zIndex: Math.round(near * 100),
                  opacity,
                  filter: `blur(${blur}px)`,
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateY(${tilt}deg)`,
                  willChange: "transform, opacity, filter",
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className={`group relative h-full w-full overflow-hidden rounded-[5px] bg-[#0B1B3A] ${
                    front
                      ? "shadow-[0_30px_100px_rgba(0,0,0,0.65),0_0_45px_rgba(167,122,32,0.12)]"
                      : "shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 z-20 rounded-[5px] ${
                      front
                        ? "border border-[#C69A3B]/75"
                        : "border border-[#F5F1E8]/[0.10]"
                    }`}
                  />

                  {front && (
                    <>
                      <div className="pointer-events-none absolute inset-[5px] z-20 rounded-[3px] border border-[#C69A3B]/25" />

                      <span className="absolute left-0 top-0 z-30 h-5 w-px bg-[#C69A3B]" />
                      <span className="absolute left-0 top-0 z-30 h-px w-5 bg-[#C69A3B]" />

                      <span className="absolute right-0 top-0 z-30 h-5 w-px bg-[#C69A3B]" />
                      <span className="absolute right-0 top-0 z-30 h-px w-5 bg-[#C69A3B]" />

                      <span className="absolute bottom-0 left-0 z-30 h-5 w-px bg-[#C69A3B]" />
                      <span className="absolute bottom-0 left-0 z-30 h-px w-5 bg-[#C69A3B]" />

                      <span className="absolute bottom-0 right-0 z-30 h-5 w-px bg-[#C69A3B]" />
                      <span className="absolute bottom-0 right-0 z-30 h-px w-5 bg-[#C69A3B]" />
                    </>
                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                    draggable={false}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060F22]/90 via-[#060F22]/10 to-transparent" />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-500"
                    style={{ opacity: label }}
                  >
                    <div className="mb-1 font-[Manrope] text-xs text-[#F5F1E8]/65">
                      {project.description}
                    </div>

                    <div className="font-['Instrument_Serif'] text-3xl leading-none">
                      {project.title}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>

        <div className="mx-auto mt-4 max-w-[1200px]">
          <div className="flex flex-col gap-7 border-t border-[#A77A20]/20 pt-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[650px]">
              <motion.div
                key={projects[active].description}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mb-3 font-[Manrope] text-sm text-[#C69A3B]"
              >
                {projects[active].description}
              </motion.div>

              <motion.h3
                key={projects[active].title}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-['Instrument_Serif'] text-4xl leading-none tracking-[-0.02em] sm:text-5xl"
              >
                {projects[active].title}
              </motion.h3>
            </div>

            <div className="flex items-center gap-8">
              <div className="font-[Manrope] text-sm tabular-nums text-[#F5F1E8]/40">
                {String(active + 1).padStart(2, "0")}
                <span className="mx-2 text-[#F5F1E8]/20">/</span>
                {String(TOTAL).padStart(2, "0")}
              </div>

              <div className="font-[Manrope] text-sm text-[#F5F1E8]/45">
                {projects[active].year}
              </div>

              <div className="relative hidden h-11 w-11 items-center justify-center rounded-full border border-[#A77A20]/40 text-[#C69A3B] sm:flex">
                <span className="absolute inset-[3px] rounded-full border border-[#A77A20]/15" />
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 border-t border-[#A77A20]/15 sm:grid-cols-3 lg:grid-cols-5">
            {projects.map((project, index) => {
              const selected = index === active;

              return (
                <button
                  key={project.title}
                  onClick={() => rotateTo(index)}
                  className="group relative border-b border-r border-[#F5F1E8]/[0.07] px-3 py-4 text-left outline-none transition-all duration-500 hover:bg-[#A77A20]/[0.035] focus-visible:bg-[#F5F1E8]/5 sm:px-4"
                >
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#A77A20] via-[#D1A94B] to-transparent transition-all duration-700 ${
                      selected ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />

                  <span
                    className={`absolute left-0 top-0 h-0 w-px bg-[#A77A20] transition-all duration-700 ${
                      selected ? "h-4" : "group-hover:h-3"
                    }`}
                  />

                  <div
                    className={`mb-1 font-[Manrope] text-[10px] tabular-nums transition-colors duration-500 ${
                      selected
                        ? "text-[#C69A3B]"
                        : "text-[#F5F1E8]/25 group-hover:text-[#F5F1E8]/45"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div
                    className={`font-[Manrope] text-[11px] transition-colors duration-500 sm:text-xs ${
                      selected
                        ? "text-[#F5F1E8]"
                        : "text-[#F5F1E8]/40 group-hover:text-[#F5F1E8]/75"
                    }`}
                  >
                    {project.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
