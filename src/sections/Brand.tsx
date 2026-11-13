"use client";

import { motion } from "framer-motion";

import aha from "../assets/brands/Aha_logo_14.png";
import classicPolo from "../assets/brands/Classic Polo_Logo_12.png";
import gcc from "../assets/brands/Gcc_Logo_17.png";
import jio from "../assets/brands/JioHotstar_Logo_10.png";
import kavithalaya from "../assets/brands/Kavithalayaa_Logo_18.png";
import ladyo from "../assets/brands/Ladyo_Logo_11.png";
import mizaj from "../assets/brands/MIZAJ_Logo_09.png";
import nightShift from "../assets/brands/Night shift Studio_Logo_02.png";
import park from "../assets/brands/Park College_Logo_06.png";
import prime from "../assets/brands/Prime Video_Logo_20.png";
import saj from "../assets/brands/SAJ.png";
import silverLeaf from "../assets/brands/Silver Leaf_Logo_08.png";
import sk from "../assets/brands/SK Production_Logo_16.png";
import ssc from "../assets/brands/SSC_Logo_04.png";
import storytel from "../assets/brands/Storytel_logo_01.png";
import sunNext from "../assets/brands/SUN NXT_Logo_19.png";
import supreme from "../assets/brands/SuPreme_Logo_22.png";
import thangamayil from "../assets/brands/Thangamayil_Logo_21.png";
import universal from "../assets/brands/Universal_Logo_03.png";
import vels from "../assets/brands/VELS Film International_Logo_07.png";
import vafx from "../assets/brands/Vijay Antony Film Corporation_Logo_23.png";
import vijayTv from "../assets/brands/Vijay TV_Logo_05.png";
import ynot from "../assets/brands/YNOT Studios_Logo_13.png";
import z5 from "../assets/brands/Zee5_Logo_15.png";

const partners = [
  { name: "Aha", logo: aha },
  { name: "Classic Polo", logo: classicPolo },
  { name: "GCC", logo: gcc },
  { name: "JioHotstar", logo: jio },
  { name: "Kavithalayaa", logo: kavithalaya },
  { name: "Ladyo", logo: ladyo },
  { name: "Mizaj", logo: mizaj },
  { name: "Night Shift Studio", logo: nightShift },
  { name: "Park College", logo: park },
  { name: "Prime Video", logo: prime },
  { name: "Sri Amman Jewellers", logo: saj },
  { name: "Silver Leaf", logo: silverLeaf },
  { name: "SK Production", logo: sk },
  { name: "SSC", logo: ssc },
  { name: "Storytel", logo: storytel },
  { name: "Sun NXT", logo: sunNext },
  { name: "SuPreme", logo: supreme },
  { name: "Thangamayil", logo: thangamayil },
  { name: "Universal", logo: universal },
  { name: "VELS Film International", logo: vels },
  { name: "Vijay Antony Film Corporation", logo: vafx },
  { name: "Vijay TV", logo: vijayTv },
  { name: "YNOT Studios", logo: ynot },
  { name: "Zee5", logo: z5 },
];

const row1 = partners.slice(0, 12);
const row2 = partners.slice(12);

function ConnectionVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pointer-events-none absolute right-0 top-0 z-10 hidden w-36 overflow-hidden sm:w-40 md:block lg:right-2 lg:w-48"
    >
      {/* <video
  src={connectionVideo}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="block h-auto w-full object-contain mix-blend-multiply"
/> */}
    </motion.div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  duration = 35,
}: {
  items: typeof partners;
  direction?: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent sm:w-12 lg:w-20" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent sm:w-12 lg:w-20" />

      <motion.div
        className="flex w-max items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((partner) => (
              <div
                key={`${copy}-${partner.name}`}
                className="flex h-16 w-[100px] shrink-0 items-center justify-center px-3 sm:h-20 sm:w-[140px] sm:px-5 lg:h-24 lg:w-[170px] lg:px-6"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  draggable={false}
                  className="pointer-events-none block max-h-10 max-w-full select-none object-contain sm:max-h-12 lg:max-h-14"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Brand() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-white py-16 text-[#0B1B3A] sm:py-20 md:py-24"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,27,58,0.035) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      {/* Ambient yellow glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#F5B921]/[0.10] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F5B921]/[0.08] blur-[130px]" />

      {/* Heading and corner video */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mb-10 text-center sm:mb-12 md:mb-16"
        >
          <ConnectionVideo />

          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#F5B921] sm:w-14" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B1B3A]/60 sm:text-xs sm:tracking-[0.3em]">
              Trusted By Industry Leaders
            </span>

            <span className="h-px w-10 bg-[#F5B921] sm:w-14" />
          </div>

          <h2 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.065em]">
            <span className="block">WE CREATE</span>
            <span className="block">WITH</span>
            <span className="relative inline-block">
              <span className="absolute bottom-[0.06em] left-[-2%] h-[26%] w-[104%] -rotate-[1deg] bg-[#F5B921]" />
              <span className="relative">BRANDS.</span>
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm font-medium leading-relaxed text-[#0B1B3A]/60 sm:text-base md:text-lg">
            From ambitious startups to culture-shaping entertainment
            platforms, we build work designed to be seen and remembered.
          </p>
        </motion.div>
      </div>

      {/* Brand logo marquees */}
      <div className="relative w-full">
        <MarqueeRow items={row1} direction="left" duration={35} />

        <div className="mx-auto h-px w-[75%] bg-[#0B1B3A]/10" />

        <MarqueeRow items={row2} direction="right" duration={35} />
      </div>

      {/* Footer */}
      <div className="relative mx-auto mt-8 flex max-w-[1400px] items-center justify-center gap-4 px-5 sm:mt-10 sm:gap-8 sm:px-8 lg:px-12">
        <div className="h-px flex-1 bg-[#0B1B3A]/10" />

        <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0B1B3A]/50 sm:text-xs sm:tracking-[0.25em]">
          {partners.length} Partners · Countless Stories
        </span>

        <div className="h-px flex-1 bg-[#0B1B3A]/10" />
      </div>
    </section>
  );
}