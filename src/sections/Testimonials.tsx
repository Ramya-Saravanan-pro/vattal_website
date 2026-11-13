"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: "01",
    quote:
      "I am highly impressed with Vattal's approach to any of our project, bringing in innovative ideas that truly stand out. Nivitha and Vignesh's team excel in ideation and flawless execution and their editing skills are mind-blowing. Their remarkable turnaround time and last-minute problem-solving abilities are commendable. What sets them apart is their cost-effectiveness, making them one of the best agencies I've worked with. I highly recommend Vattal Studios for their exceptional creativity, efficiency, and budget-friendly services.",
    name: "Pradeep",
    role: "Marketing Manager",
    company: "ZEE5 ENTERTAINMENT",
  },
  {
    id: "02",
    quote:
      "We were truly impressed with Vattal! Their social media marketing work is excellent. All the deliverables reached us on time. The marketing produced definitive and solid results. Everything was organized to perfection and delivered very systematically. The team was always on hand to support us in case of emergencies and Nivitha and Vignesh personally saw the project through. The leadership really keeps the team on track and inspires them to give their best. We cannot wait to work with them on other projects.",
    name: "D Naresh",
    role: "Content Marketing Manager",
    company: "Aha Tamil",
  },
  {
    id: "03",
    quote:
      "Team Vattal ably led by Vignesh & Nivitha is extremely professional. It is seen from their punctuality to the final output quality. It has been an absolute pleasure to work with them. I would happily recommend their services to anyone who is looking for a professional video/social media team.",
    name: "Deepika Arun",
    role: "Language Manager",
    company: "Storytel Tamil",
  },
  {
    id: "04",
    quote:
      "Vignesh & Nivitha's team at Vattal is impressively professional, evident in their punctuality, absorbent to feedback and deliver top-notch output quality. Working with them has been a delight, and I wholeheartedly recommend their services for video production and social media strategy!",
    name: "Pranav",
    role: "Head of Operations & Marketing",
    company: "YNOT Studios & Night Shift Studios",
  },
  {
    id: "05",
    quote:
      "Partnering with Vattal Media over the past year has been a game-changer for our brand. When we started working together, our social media presence was modest at just 200 followers. Within just 12 months, their team driven by exceptional creativity, strategic insight, and relentless execution scaled our community to over 16,000 engaged followers.",
    continuation:
      "Vattal Media consistently delivers top-tier media and social media management. Their work on our latest 2026 collections was nothing short of remarkable—bringing fresh, original concepts to life and perfectly capturing our brand’s identity.",
    closing:
      "They are far more than an agency; they are an invaluable extended team. If you are looking for a team that delivers tangible growth, stunning creative direction, and seamless collaboration, we cannot recommend Vattal Media highly enough.",
    name: "Aswathh Krishnan",
    role: "Founder",
    company: "Ladyo Premium Innerwear",
  },
  {
    id: "06",
    quote:
      "Fast. Creative. They translate my vision into content that drives real engagement. Result? Sri Sakthi's brand visibility jumped significantly. Vattal Studios repositioned us in the market.",
    name: "Karthikeyan S",
    role: "Managing Director",
    company: "Sri Sakthi Cinemas",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const desktopScatter = [
  { x: -24, y: -30, rotate: -3 },
  { x: 24, y: -22, rotate: 2.5 },
  { x: -18, y: 0, rotate: -1.5 },
  { x: 18, y: 5, rotate: 1.8 },
  { x: -24, y: 27, rotate: -2 },
  { x: 22, y: 30, rotate: 2.2 },
];

function SmallHeart() {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
      viewport={{ once: true }}
      animate={
        reduce
          ? undefined
          : {
              y: [0, -4, 0],
              rotate: [-6, -3, -6],
            }
      }
      transition={{
        duration: 0.8,
        ease: EASE,
        repeat: reduce ? 0 : Infinity,
        repeatType: "mirror",
      }}
      className="ml-3 w-9 shrink-0 sm:ml-5 sm:w-11 lg:w-13"
    >
      <svg
        viewBox="0 0 80 70"
        className="h-auto w-full"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 63C36 59 10 42 10 22C10 12 17 7 25 7C32 7 37 11 40 17C43 11 48 7 55 7C63 7 70 12 70 22C70 42 44 59 40 63Z"
          stroke="#F5B921"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 56C36 52 17 39 17 24C17 18 21 14 27 14C33 14 37 18 40 23C43 18 47 14 53 14C59 14 63 18 63 24C63 39 44 52 40 56Z"
          stroke="#F5F1E8"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const scatter = desktopScatter[index];

  return (
    <motion.article
      initial={{
        opacity: 0,
        scale: 0.55,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: scatter.x,
        y: scatter.y,
        rotate: scatter.rotate,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1.15,
        delay: index * 0.08,
        ease: EASE,
      }}
      className="group relative w-full self-start"
    >
      <div className="relative overflow-hidden border border-white/10 bg-[#0D2144] p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#F5B921]/35 sm:p-8 lg:p-9">
        <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#F5B921] transition-all duration-700 group-hover:w-full" />

        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-[#F5B921]/[0.018] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative">
          <div className="mb-8 flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5B921]/15 bg-[#F5B921]/[0.04] transition-all duration-500 group-hover:border-[#F5B921]/35 group-hover:bg-[#F5B921]/[0.08]">
              <Quote
                className="h-4 w-4 text-[#F5B921]/50 transition-colors duration-500 group-hover:text-[#F5B921]"
                strokeWidth={1.4}
              />
            </div>

            <span className="text-[9px] font-black tracking-[0.3em] text-white/15">
              {testimonial.id}
            </span>
          </div>

          <p className="text-[0.98rem] font-medium leading-[1.7] tracking-[-0.012em] text-[#F5F1E8] sm:text-[1.04rem] lg:text-[1.08rem]">
            {testimonial.quote}
          </p>

          {testimonial.continuation && (
            <p className="mt-6 text-sm leading-7 text-white/40">
              {testimonial.continuation}
            </p>
          )}

          {testimonial.closing && (
            <p className="mt-5 text-sm leading-7 text-white/40">
              {testimonial.closing}
            </p>
          )}

          <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
            <div>
              <p className="text-sm font-bold text-[#F5B921]">
                {testimonial.name}
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                {testimonial.role}
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/20">
                {testimonial.company}
              </p>
            </div>

            <ArrowUpRight
              className="h-5 w-5 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F5B921]"
              strokeWidth={1.4}
            />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute bottom-0 right-0 h-px w-10 bg-[#F5B921]/40" />
          <div className="absolute bottom-0 right-0 h-10 w-px bg-[#F5B921]/40" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0B1B3A] text-[#F5F1E8]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(245,241,232,0.7) 1px, transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -left-48 top-[18%] h-[500px] w-[500px] rounded-full bg-[#F5B921]/[0.045] blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-[8%] h-[500px] w-[500px] rounded-full bg-[#F5B921]/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        <motion.div
          initial={{
            opacity: 0,
            y: reduce ? 0 : 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduce ? 0 : 0.8,
            ease: EASE,
          }}
          className="relative mb-20 lg:mb-24"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#F5B921]" />

                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/35">
                  Words from our partners
                </span>
              </div>

              <div className="flex items-center">
                <h2 className="text-[clamp(4rem,8vw,8rem)] font-black leading-[0.78] tracking-[-0.09em]">
                  FROM OUR
                  <br />
                  <span className="text-[#F5B921]">PEOPLE.</span>
                </h2>

                <SmallHeart />
              </div>
            </div>

            <div className="max-w-sm pb-2 lg:max-w-md">
              <p className="text-base leading-7 text-white/40 md:text-lg">
                A few words from the people and brands we've had the pleasure
                of creating with.
              </p>
            </div>
          </div>

          <div className="mt-14 h-px w-full bg-white/10" />
        </motion.div>

        <div className="relative mx-auto max-w-[1120px]">
          <div className="relative">
            <div className="relative z-10 grid items-start gap-4 md:grid-cols-2 lg:gap-5">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduce ? 0 : 1,
            ease: EASE,
          }}
          className="mt-20 flex origin-center items-center justify-center gap-5"
        >
          <span className="h-px w-20 bg-white/10" />

          <div className="h-2 w-2 rounded-full bg-[#F5B921]" />

          <span className="h-px w-20 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}