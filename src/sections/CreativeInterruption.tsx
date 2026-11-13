"use client";

import { motion } from "framer-motion";

const YELLOW = "#F5B921";

type CreativeType =
  | "brief"
  | "deadline"
  | "logo"
  | "why"
  | "pdf"
  | "revision"
  | "moodboard"
  | "folders";

type Props = {
  variant: CreativeType;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const positions = {
  "top-left": "left-[3%] top-[18%]",
  "top-right": "right-[3%] top-[15%]",
  "bottom-left": "left-[4%] bottom-[12%]",
  "bottom-right": "right-[4%] bottom-[10%]",
};

function Brief() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ rotate: [-5, -2, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-2 top-8 h-24 w-20 border-2 border-[#0B1B3A] bg-white p-2"
      >
        <div className="h-2 w-10 bg-[#0B1B3A]/30" />
        <div className="mt-2 h-1 w-14 bg-[#0B1B3A]/20" />
        <div className="mt-1 h-1 w-10 bg-[#0B1B3A]/20" />
        <div className="mt-5 h-4 w-9 bg-[#F5B921]" />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 5, 0],
          rotate: [2, -1, 2],
        }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute right-0 top-0 h-32 w-24 bg-[#0B1B3A] p-3"
      >
        <div className="h-7 w-full bg-[#F5B921]" />
        <div className="mt-3 h-1 w-full bg-white/30" />
        <div className="mt-2 h-1 w-4/5 bg-white/20" />
        <div className="mt-5 h-8 w-8 rounded-full bg-[#E5533D]" />
      </motion.div>

      <div className="absolute left-20 top-20 text-[8px] font-mono text-[#0B1B3A]">
        somehow became this →
      </div>
    </div>
  );
}

function Deadline() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1 top-4 h-28 w-44 rounded-md border-2 border-[#0B1B3A] bg-white">
        <div className="h-5 bg-[#0B1B3A]" />

        <div className="px-3 pt-4">
          <div className="h-2 w-20 bg-[#0B1B3A]/20" />
          <div className="mt-3 h-1 w-24 bg-[#0B1B3A]/15" />
          <div className="mt-2 h-1 w-16 bg-[#0B1B3A]/15" />

          <motion.div
            animate={{ width: ["20%", "80%", "20%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-5 h-2 bg-[#F5B921]"
          />
        </div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute right-0 top-8 h-20 w-20 rounded-full border-4 border-[#F5B921]"
      >
        <div className="absolute left-1/2 top-1/2 h-1 w-7 origin-left -translate-y-1/2 bg-[#0B1B3A]" />
        <div className="absolute left-1/2 top-1/2 h-1 w-5 origin-left rotate-90 bg-[#0B1B3A]" />
      </motion.div>

      <span className="absolute bottom-0 right-2 text-[8px] font-mono text-[#0B1B3A]">
        yesterday.
      </span>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-0 top-8"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0B1B3A] bg-[#F5B921] text-3xl font-black">
          V
        </div>
      </motion.div>

      <div className="absolute left-20 top-0 h-28 w-24 border-2 border-[#0B1B3A] bg-white p-3">
        <span className="text-[7px] font-bold tracking-[0.15em]">
          BRAND SYSTEM
        </span>

        <div className="mt-4 h-2 w-full bg-[#0B1B3A]" />

        <div className="mt-3 flex gap-2">
          <span className="h-5 w-5 rounded-full bg-[#F5B921]" />
          <span className="h-5 w-5 rounded-full bg-[#E5533D]" />
          <span className="h-5 w-5 rounded-full bg-[#3D5AFE]" />
        </div>
      </div>

      <span className="absolute bottom-0 left-4 text-[8px] font-mono">
        it was never just the logo.
      </span>
    </div>
  );
}

function Why() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-2 top-0 text-[110px] font-black leading-none text-[#0B1B3A]"
      >
        ?
      </motion.div>

      <div className="absolute right-0 top-5 space-y-2 text-[9px] font-mono">
        <p>why this?</p>
        <p>why now?</p>
        <p>why us?</p>
      </div>

      <svg
        viewBox="0 0 100 60"
        className="absolute left-16 top-8 h-14 w-24"
      >
        <motion.path
          d="M5 40C25 5 55 10 90 30"
          fill="none"
          stroke={YELLOW}
          strokeWidth="5"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>

      <span className="absolute bottom-0 left-2 text-[8px] font-mono">
        annoying questions.
      </span>
    </div>
  );
}

function Pdf() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ rotate: [-4, -1, -4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-0 top-3 h-28 w-20 border-2 border-[#0B1B3A] bg-white p-2"
      >
        <span className="text-[7px] font-bold">FINAL.pdf</span>
        <div className="mt-4 space-y-2">
          <div className="h-1 w-full bg-[#0B1B3A]/20" />
          <div className="h-1 w-4/5 bg-[#0B1B3A]/20" />
          <div className="h-1 w-full bg-[#0B1B3A]/20" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          x: [0, 10, 0],
          rotate: [0, 3, 0],
        }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute right-0 top-8 h-24 w-28 bg-[#0B1B3A] p-3"
      >
        <div className="h-7 w-10 bg-[#F5B921]" />
        <div className="mt-4 h-1 w-full bg-white/30" />
        <div className="mt-2 h-1 w-2/3 bg-white/20" />
      </motion.div>

      <span className="absolute bottom-0 left-8 text-[8px] font-mono">
        this could have been a PDF.
      </span>
    </div>
  );
}

function Revision() {
  return (
    <div className="relative h-full w-full">
      {[0, 1, 2].map((item) => (
        <motion.div
          key={item}
          animate={{
            rotate: [-3 + item, 2 + item, -3 + item],
            x: [0, item * 5, 0],
          }}
          transition={{
            duration: 2.5 + item * 0.3,
            repeat: Infinity,
          }}
          className="absolute h-24 w-32 border-2 border-[#0B1B3A] bg-white p-3"
          style={{
            left: item * 16,
            top: item * 13,
          }}
        >
          <div className="h-1 w-20 bg-[#0B1B3A]/20" />
          <div className="mt-3 h-1 w-16 bg-[#0B1B3A]/20" />
          <div className="mt-5 h-2 w-20 bg-[#E5533D]" />
        </motion.div>
      ))}

      <span className="absolute bottom-0 right-0 text-[8px] font-mono">
        one more.
      </span>
    </div>
  );
}

function Moodboard() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{
          rotate: [-2, 1, -2],
          y: [0, -3, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-0 top-2 h-28 w-40 border-2 border-[#0B1B3A] bg-white p-2"
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 bg-[#0B1B3A]" />
          <div className="h-10 bg-[#F5B921]" />
          <div className="h-10 bg-[#E5533D]" />
          <div className="h-10 bg-[#3D5AFE]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute right-0 top-16 h-10 w-16 border-2 border-[#0B1B3A] bg-[#F5B921]"
      />

      <span className="absolute bottom-0 right-0 text-[8px] font-mono">
        moodboard escaped.
      </span>
    </div>
  );
}

function Folders() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-0 top-8 h-24 w-40 border-2 border-[#0B1B3A] bg-[#F5B921]">
        <div className="absolute -top-3 left-0 h-4 w-14 border-2 border-b-0 border-[#0B1B3A] bg-[#F5B921]" />
      </div>

      <motion.div
        animate={{
          x: [0, 12, 0],
          rotate: [-5, 2, -5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-8 top-4 h-16 w-24 border-2 border-[#0B1B3A] bg-white"
      />

      <motion.div
        animate={{
          x: [0, -10, 0],
          rotate: [4, -2, 4],
        }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute left-24 top-16 h-16 w-24 border-2 border-[#0B1B3A] bg-[#E5533D]"
      />

      <span className="absolute bottom-0 left-0 text-[8px] font-mono">
        ideas don't arrive organized.
      </span>
    </div>
  );
}

const ART = {
  brief: <Brief />,
  deadline: <Deadline />,
  logo: <Logo />,
  why: <Why />,
  pdf: <Pdf />,
  revision: <Revision />,
  moodboard: <Moodboard />,
  folders: <Folders />,
};

export default function CreativeInterruption({
  variant,
  position = "top-right",
}: Props) {
  return (
    <div
      className={`pointer-events-none absolute z-20 hidden h-[145px] w-[225px] md:block ${positions[position]}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-full w-full"
      >
        {ART[variant]}
      </motion.div>
    </div>
  );
}