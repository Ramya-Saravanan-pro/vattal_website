
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clapperboard, Film } from "lucide-react";

import aindhamVedham from "../src/assets/movies/1.jpg.jpeg";
import brothers from "../src/assets/movies/Brothers.png";
import ddNextLevel from "../src/assets/movies/DD next level.png";
import demonsReturns from "../src/assets/movies/Demons Returns.png";


const EASE = [0.22, 1, 0.36, 1] as const;

const movies = [
  {
    title: "Aindham Vedham",
    image: aindhamVedham,
    category: "Film",
    number: "01",
  },
  {
    title: "Brothers",
    image: brothers,
    category: "Film",
    number: "02",
  },
  {
    title: "DD Next Level",
    image: ddNextLevel,
    category: "Film",
    number: "03",
  },
  {
    title: "Demons Returns",
    image: demonsReturns,
    category: "Film",
    number: "04",
  },
];

export default function Movie() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="movies"
      className="relative overflow-hidden bg-[#0B1B3A] py-20 text-[#F5F1E8] md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(245,185,33,0.10),transparent_32%),radial-gradient(circle_at_10%_85%,rgba(67,103,150,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduce ? 0 : 0.8,
            ease: EASE,
          }}
          className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#F5B921]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#F5B921]">
                Our filmography
              </span>
            </div>

            <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-medium uppercase leading-[0.88] tracking-[-0.06em]">
              Stories
              <br />
              <span className="text-[#F5F1E8]/35">on screen.</span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-[1.9] text-[#F5F1E8]/65 md:text-base">
              From powerful narratives to unforgettable cinematic experiences,
              we bring stories to life through the art of filmmaking.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#F5B921]">
              <Clapperboard size={17} strokeWidth={1.6} />
              <span>Made for the big screen</span>
            </div>
          </div>
        </motion.div>

        <div className="mb-6 flex items-center justify-between border-y border-[#F5F1E8]/15 py-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#F5F1E8]/55">
            Selected projects
          </span>

          <span className="flex items-center gap-2 text-xs text-[#F5F1E8]/60">
            <Film size={15} />
            {String(movies.length).padStart(2, "0")} films
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {movies.map((movie, index) => (
            <motion.article
              key={movie.title}
              initial={{
                opacity: 0,
                y: reduce ? 0 : 35,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduce ? 0 : 0.65,
                delay: reduce ? 0 : index * 0.12,
                ease: EASE,
              }}
              className="group min-w-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] border border-[#F5F1E8]/10 bg-[#13294D]">
                <img
                  src={movie.image}
                  alt={`${movie.title} movie poster`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071226]/80 via-transparent to-[#071226]/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#0B1B3A]/60 px-3 py-1.5 text-[10px] tracking-[0.18em] text-white backdrop-blur-sm">
                  FILM / {movie.number}
                </span>

                <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#F5B921] text-[#0B1B3A] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 pt-5">
                <div className="min-w-0">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-[#F5B921]">
                    {movie.category}
                  </span>

                  <h3 className="text-lg font-medium tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#F5B921] md:text-xl">
                    {movie.title}
                  </h3>
                </div>

                <span className="pt-5 text-xs text-[#F5F1E8]/35">
                  {movie.number}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col gap-4 border-t border-[#F5F1E8]/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-[#F5F1E8]/55">
            Every frame has a story to tell.
          </p>

          <span className="text-[10px] uppercase tracking-[0.25em] text-[#F5F1E8]/40">
            Film · Storytelling · Creativity
          </span>
        </motion.div>
      </div>
    </section>
  );
}
