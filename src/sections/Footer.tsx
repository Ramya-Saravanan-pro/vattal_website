
"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const EMAIL = "team@vattalstudios.com";
const PHONE = "+917338984294";
const ADDRESS =
  "1, 6th St, V V Colony, New Colony, Adambakkam, Chennai, Tamil Nadu 600088";

const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

const careersUrl = `${emailUrl}&su=${encodeURIComponent(
  "Career Application - Vattal Studios"
)}`;

// const navyButton =
  // "group inline-flex items-center justify-center gap-3 bg-[#0B1B3A] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#18315D] hover:shadow-lg hover:shadow-[#0B1B3A]/15";

const yellowButton =
  "group inline-flex items-center justify-center gap-3 bg-[#F5B921] px-6 py-4 text-sm font-semibold text-[#0B1B3A] transition-all duration-300 hover:bg-[#FFD05A] hover:shadow-lg hover:shadow-[#F5B921]/20";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.2,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      ease: EASE,
    },
  };

  return (
    <div id="top" className="w-full overflow-hidden">
      {/* HAVE AN IDEA — WHITE BACKGROUND */}
      <section className="bg-white px-5 py-20 text-[#0B1B3A] sm:px-8 sm:py-28">
        <motion.div {...reveal} className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">
            Have an idea?
          </p>

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
                Great ideas deserve
                <br />
                to be{" "}
                <span className="relative inline-block">
                  seen.
                  <span className="absolute -bottom-1 left-0 h-1 w-full bg-[#F5B921] sm:-bottom-2 sm:h-1.5" />
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#667085] sm:text-lg">
                From brand stories to creative campaigns, we turn
                your vision into work that connects with people.
                Tell us what you have in mind. Let&apos;s make it
                happen.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CAREERS — WHITE BACKGROUND */}
      <section className="border-t border-[#0B1B3A]/10 bg-white px-5 py-16 text-[#0B1B3A] sm:px-8 sm:py-20">
        <motion.div
          {...reveal}
          className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">
              Careers at Vattal
            </p>

            <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Bring your ideas.
              <br />
              Make an impact.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-7 text-[#667085] sm:text-lg">
              We believe great work begins with curious minds and
              fresh perspectives. If you love creativity, storytelling,
              and solving problems, we&apos;d love to hear from you.
              Tell us about yourself and how you could contribute
              to our team.
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={careersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={yellowButton}
              >
                Send your application
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-sm text-[#667085] underline decoration-[#0B1B3A]/20 underline-offset-4 transition-colors hover:text-[#0B1B3A] hover:decoration-[#F5B921]"
              >
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER — NAVY BLUE BACKGROUND */}
      <footer className="bg-[#0B1B3A] px-5 pb-7 pt-14 text-[#F5F1E8] sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
            {/* BRAND */}
            <div>
              <a
                href="/"
                aria-label="Vattal Studios home"
                className="inline-flex items-baseline text-3xl font-semibold tracking-tight"
              >
                vattal<span className="text-[#F5B921]">.</span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/65 sm:text-base">
                Stories that connect. Ideas that move people.
                Creativity that makes a difference.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/vattalstudios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-[#F5B921] hover:bg-[#F5B921] hover:text-[#0B1B3A]"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/company/vattalstudios/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-[#F5B921] hover:bg-[#F5B921] hover:text-[#0B1B3A]"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="https://x.com/vattalstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-[#F5B921] hover:bg-[#F5B921] hover:text-[#0B1B3A]"
                >
                  <FaXTwitter size={17} />
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5B921]">
                Let&apos;s connect
              </h3>

              <div className="space-y-5">
                <a
                  href={`tel:${PHONE}`}
                  className="group flex items-start gap-3 text-sm leading-6 text-white/75 transition-colors hover:text-[#F5B921]"
                >
                  <Phone
                    size={17}
                    className="mt-1 shrink-0 text-[#F5B921]"
                  />
                  <span>733 898 4294</span>
                </a>

                <a
                  href={emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 break-all text-sm leading-6 text-white/75 transition-colors hover:text-[#F5B921]"
                >
                  <Mail
                    size={17}
                    className="mt-1 shrink-0 text-[#F5B921]"
                  />
                  <span>{EMAIL}</span>
                </a>

                <a
                  href={emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#F5B921] hover:bg-[#F5B921] hover:text-[#0B1B3A]"
                >
                  Get in touch
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5B921]">
                Find us
              </h3>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  ADDRESS
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm leading-7 text-white/75 transition-colors hover:text-white"
              >
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#F5B921]"
                />

                <span>
                  1, 6th St, V V Colony,
                  <br />
                  New Colony, Adambakkam,
                  <br />
                  Chennai, Tamil Nadu 600088
                  <br />
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#F5B921]">
                    Get Directions
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col gap-5 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Vattal Studios. All rights
              reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/terms-and-conditions"
                className="transition-colors hover:text-white"
              >
                Terms &amp; Conditions
              </a>

              <a
                href="#top"
                className="group inline-flex items-center gap-2 transition-colors hover:text-[#F5B921]"
              >
                Back to top
                <ArrowUpRight
                  size={14}
                  className="-rotate-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
