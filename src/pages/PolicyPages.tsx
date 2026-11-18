
import {  ArrowUpRight } from "lucide-react";

const services = [
  ["01", "Brand Building & Positioning", "We write stories and screenplays for your brand."],
  ["02", "Creative Film Promotions", "We make your film the talk of the town before it hits the screen."],
  ["03", "Social Media Marketing", "We make your brand the one people stop scrolling for."],
  ["04", "Digital Marketing", "We put your brand wherever your audience is looking."],
  ["05", "Content Marketing", "We create content people actually want to watch, read and share."],
  ["06", "Performance Marketing", "Every rupee you spend is tracked, tested and made to work harder."],
  ["07", "Influencer Marketing", "We match your brand with voices your audience already trusts."],
  ["08", "Meme Marketing", "We make your brand part of the joke everyone’s sharing."],
  ["09", "Website Development", "We build websites that look good and get people to act."],
  ["10", "Video Production", "From script to final cut, we bring your ideas to life on screen."],
  ["11", "Promo & Trailer Cuts", "A few seconds that make people want the whole story."],
  ["12", "Poster Designing", "One design that says it all."],
];

const terms = [
  {
    title: "1. Introduction",
    content: [
      "Welcome to Vattal Studios. This website is owned and operated by VATTAL MEDIA SERVICES, operating under the brand name Vattal Studios (“Vattal”, “we”, “our” or “us”).",
      "By accessing or using our website, you agree to these Terms & Conditions. If you do not agree, please discontinue using the website.",
      "These terms apply to website visitors, prospective clients and other individuals accessing our website.",
    ],
  },
  {
    title: "2. Our Services",
    content: [
      "Vattal provides creative, media, advertising and digital marketing services. Our current service offerings are listed below.",
      "The precise scope, pricing, timelines, deliverables and project-specific conditions will be communicated separately through proposals, quotations or written agreements.",
    ],
  },
  {
    title: "3. Website Usage",
    content: [
      "You agree to use this website only for lawful purposes. You must not:",
      "(a) use the website for fraudulent, misleading or unlawful activities; (b) attempt unauthorised access to our website, servers or systems; (c) copy, reproduce or distribute website content without permission; (d) upload malicious software or harmful material; (e) misuse contact forms or submit false information; or (f) interfere with website functionality or security.",
      "We may restrict access where these terms are violated.",
    ],
  },
  {
    title: "4. Intellectual Property Rights",
    content: [
      "Unless otherwise stated, original website content—including text, graphics, photographs, videos, logos, designs, animations and creative materials—is owned by Vattal or its respective licensors.",
      "You may not reproduce, modify, distribute, publish or commercially exploit this content without prior written permission.",
      "Client projects and third-party creative assets may be subject to separate ownership, licensing and usage agreements. A portfolio display does not itself transfer intellectual property rights.",
    ],
  },
  {
    title: "5. Client Projects and Agreements",
    content: [
      "Professional engagements are subject to mutually agreed project terms.",
      "Depending on the project, these may cover scope and deliverables; pricing and payment schedules; advance payments and additional charges; timelines and milestones; revision limits and approvals; cancellation and postponement; ownership and licensing of final deliverables; and confidentiality.",
      "A proposal, quotation or contract accepted by both parties will govern the relevant engagement. If it conflicts with these website terms, the project agreement will prevail for that engagement.",
    ],
  },
  {
    title: "6. Payments and Cancellations",
    content: [
      "Project fees, payment milestones, advance payments and applicable taxes will be communicated before work begins.",
      "Cancellation, rescheduling, refund and additional-payment conditions will be set out in the applicable project agreement or written quotation.",
      "Completed work, committed expenses and third-party costs may be considered when determining amounts payable following cancellation, as agreed in the relevant project terms.",
    ],
  },
  {
    title: "7. Creative Results and Marketing Performance",
    content: [
      "We aim to deliver professional creative and marketing services, but do not guarantee specific business results, sales, audience engagement, social media reach, views, impressions, conversions or campaign performance.",
      "Outcomes may depend on factors outside our control, including platform algorithms, audience behaviour, advertising budgets, market conditions and third-party platform policies.",
    ],
  },
  {
    title: "8. Third-Party Platforms and Services",
    content: [
      "Our website or projects may refer to or link to third-party platforms, social media networks, video platforms and external websites.",
      "We do not control and are not responsible for their availability, content, privacy practices, policies or services. Your use of those services is governed by their own terms and policies.",
    ],
  },
  {
    title: "9. Website Availability",
    content: [
      "We aim to keep the website accessible and functional but do not guarantee uninterrupted availability or error-free operation.",
      "We may modify, suspend or discontinue any part of the website without prior notice.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, Vattal will not be liable for indirect, incidental or consequential losses arising from use of this website or reliance on information published on it.",
      "Nothing in these terms excludes liability that cannot legally be excluded under applicable Indian law.",
    ],
  },
  {
    title: "11. Indemnification",
    content: [
      "To the extent permitted by applicable law, you are responsible for losses, claims or expenses arising from your unlawful use of the website, violation of these terms or infringement of third-party rights.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    content: [
      "We may update these Terms & Conditions from time to time. Changes will be published on this page with an updated effective date.",
      "Continued use of the website after publication of changes constitutes acceptance of the revised terms to the extent permitted by law.",
    ],
  },
  {
    title: "13. Governing Law and Jurisdiction",
    content: [
      "These terms are governed by the laws of India.",
      "Subject to applicable law, courts of competent jurisdiction in Chennai, Tamil Nadu, shall have jurisdiction over disputes arising from use of this website.",
    ],
  },
  {
    title: "14. Contact Information",
    content: [
      "VATTAL MEDIA SERVICES",
      "Vattal Studios",
      "No. 1, First Floor, New Colony 6th Street, Adambakkam, Chennai, Tamil Nadu – 600088, India.",
      "Email: team@vattalstudios.com",
      "Website: https://www.vattalstudios.com/",
    ],
  },
];

const privacy = [
  {
    title: "1. Introduction",
    content: [
      "Vattal Studios respects your privacy and is committed to protecting personal information.",
      "This Privacy Policy explains how VATTAL MEDIA SERVICES, operating under the brand name Vattal Studios (“Vattal”, “we”, “our” or “us”), collects, uses, stores and shares information when you visit our website or contact us about our services.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "Personal information: When you contact us through our website, email or other communication channels, we may collect your name, email address, phone number (if provided), company or organisation name (if provided), project requirements, enquiry details and other information you choose to share.",
      "Technical information: When you visit our website, certain information may be collected automatically, such as IP address, browser type and version, device information, operating system, pages visited, visit date and time, referring website or source, and website usage or interaction data.",
      "Cookies and similar technologies: Our website may use cookies and similar technologies for website functionality, visitor understanding and performance measurement. You may manage or disable cookies through browser settings, although some features may be affected. Where required, consent will be obtained before non-essential cookies or tracking technologies are used.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We may use information to respond to enquiries and contact requests; understand project requirements; communicate about services and potential collaborations; prepare proposals and quotations; improve website functionality and user experience; analyse website traffic and performance; maintain security and prevent misuse; and comply with legal and regulatory obligations.",
      "We will use personal information for lawful purposes relevant to the reason it was collected.",
    ],
  },
  {
    title: "4. Sharing of Information",
    content: [
      "Vattal does not sell personal information to third parties.",
      "We may share relevant information with trusted service providers where reasonably necessary for business operations, including website hosting and maintenance providers, analytics providers, email and communication providers, IT support providers, professional advisers and legal authorities where required.",
      "Sharing will be limited to what is reasonably necessary and subject to applicable legal requirements.",
    ],
  },
  {
    title: "5. Data Storage and Security",
    content: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss or misuse.",
      "Information may be stored using hosting environments, business communication systems and third-party service providers.",
      "No electronic transmission or storage method is completely secure, so absolute security cannot be guaranteed.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain personal information only for as long as reasonably necessary to respond to enquiries, manage business communications, provide agreed services, fulfil contractual obligations, maintain appropriate business records and meet legal or regulatory requirements.",
      "When information is no longer required, we will take reasonable steps to delete or anonymise it, subject to applicable retention obligations.",
    ],
  },
  {
    title: "7. Your Privacy Rights",
    content: [
      "Subject to applicable law, you may have the right to request information about personal data we hold; request correction of inaccurate or incomplete information; request deletion where applicable; withdraw consent where processing is based on consent; raise concerns or complaints; and exercise other rights available under applicable data protection laws.",
      "Contact us using the details below. We may need to verify your identity before processing certain requests.",
    ],
  },
  {
    title: "8. Third-Party Websites and Embedded Content",
    content: [
      "Our website may contain links, videos, social media integrations or embedded content from third-party platforms.",
      "Those platforms may collect information about your interaction in accordance with their own privacy policies. Vattal does not control external platforms’ privacy practices. Please review their policies before interacting with their services.",
    ],
  },
  {
    title: "9. Children’s Privacy",
    content: [
      "Our website and services are not specifically directed towards children.",
      "We do not knowingly seek to collect children’s personal information through our website for purposes unrelated to our services. If you believe a child has provided personal information without necessary authorisation, contact us so we can review the matter and take appropriate action.",
    ],
  },
  {
    title: "10. Marketing Communications",
    content: [
      "We may contact you about our services or business updates where legally permitted.",
      "You may ask us to stop sending promotional communications at any time by contacting us or using an applicable unsubscribe option.",
    ],
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy to reflect changes in our business practices, website functionality, technology or applicable laws.",
      "Updates will be published on this page with a revised effective date. We encourage visitors to review this page periodically.",
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      "For questions, requests or concerns about this Privacy Policy or our handling of personal information, contact:",
      "VATTAL MEDIA SERVICES",
      "Vattal Studios",
      "No. 1, First Floor, New Colony 6th Street, Adambakkam, Chennai, Tamil Nadu – 600088, India.",
      "Email: team@vattalstudios.com",
      "Website: https://www.vattalstudios.com/",
    ],
  },
];




export default function PolicyPages() {
  const isTerms =
    window.location.pathname.replace(/\/$/, "") ===
    "/terms-and-conditions";

  const sections = isTerms ? terms : privacy;
  // const title = isTerms ? "Terms & Conditions" : "Privacy Policy";
  const subtitle = isTerms
    ? "The terms that govern your use of our website and engagement with Vattal Studios."
    : "How we collect, use and protect information when you interact with Vattal Studios.";

  const documentLabel = isTerms ? "LEGAL DOCUMENT" : "LEGAL DOCUMENT";

  const sectionId = (index: number) => `policy-section-${index}`;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F1E8] text-[#0B1B3A]">
      <div className="h-1.5 w-full bg-[#F5B921]" />

      <header className="border-b border-[#0B1B3A]/15 px-5 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
          <a
            href="/"
            aria-label="Vattal Studios home"
            className="text-3xl font-semibold tracking-[-0.08em] text-[#0B1B3A]"
          >
            vattal<span className="text-[#D7A719]">.</span>
          </a>

          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#0B1B3A]/45 sm:text-[10px]">
              Vattal Media Services
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#0B1B3A] sm:text-xs">
              Legal & Policies
            </p>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0B1B3A] px-5 py-20 text-[#F5F1E8] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="pointer-events-none absolute -right-32 -top-36 h-[480px] w-[480px] rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -right-12 -top-16 h-[320px] w-[320px] rounded-full border border-[#F5B921]/20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#F5B921]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5B921]">
              {documentLabel}
            </p>
          </div>

          <h1 className="mt-8 max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.98] tracking-[-0.065em]">
            {isTerms ? (
              <>
                Terms &
                <br />
                <span className="text-[#F5B921]">Conditions.</span>
              </>
            ) : (
              <>
                Privacy
                <br />
                <span className="text-[#F5B921]">Policy.</span>
              </>
            )}
          </h1>

          <div className="mt-12 grid gap-8 border-t border-white/20 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              {subtitle}
            </p>

            <div className="sm:text-right">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                Effective date
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-[#F5F1E8]">
                11 November 2026
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={isTerms ? "/privacy-policy" : "/terms-and-conditions"}
              className="inline-flex items-center gap-3 border border-white/25 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#F5B921] hover:bg-[#F5B921] hover:text-[#0B1B3A]"
            >
              Read {isTerms ? "Privacy Policy" : "Terms & Conditions"}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20">
            <aside className="h-fit lg:sticky lg:top-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-6 bg-[#D7A719]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B1B3A]/55">
                  On this page
                </p>
              </div>

              <nav
                aria-label="Policy sections"
                className="flex gap-2 overflow-x-auto pb-3 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0"
              >
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#${sectionId(index)}`}
                    className="group flex shrink-0 items-center gap-3 border border-[#0B1B3A]/10 px-4 py-3 text-xs transition-all duration-200 hover:border-[#D7A719] hover:bg-white lg:border-x-0 lg:border-b lg:border-t-0 lg:px-0 lg:py-3"
                  >
                    <span className="text-[10px] font-bold tabular-nums text-[#B28A24]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="whitespace-nowrap text-[#0B1B3A]/65 transition-colors group-hover:text-[#0B1B3A] lg:whitespace-normal">
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="mt-8 hidden border-t border-[#0B1B3A]/15 pt-6 lg:block">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0B1B3A]/40">
                  Published by
                </p>
                <p className="mt-2 text-sm font-semibold">
                  VATTAL MEDIA SERVICES
                </p>
                <p className="mt-1 text-xs text-[#0B1B3A]/50">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="mb-12 max-w-3xl border-l-[3px] border-[#F5B921] pl-6 sm:mb-16 sm:pl-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B28A24]">
                  {isTerms ? "Our terms of use" : "Your information matters"}
                </p>
                <p className="mt-4 text-base leading-8 text-[#0B1B3A]/65 sm:text-lg sm:leading-9">
                  {isTerms
                    ? "Please read these terms carefully before using the Vattal Studios website. They explain the conditions applicable to visitors and prospective clients."
                    : "We believe in being transparent about the information we collect and how it is handled. This policy explains our approach to privacy and data protection."}
                </p>
              </div>

              {isTerms && (
                <section className="mb-16 border-y border-[#0B1B3A]/20 py-9 sm:py-12">
                  <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B28A24]">
                        What we do
                      </p>
                      <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        Our Services
                      </h2>
                    </div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#0B1B3A]/40">
                      12 creative capabilities
                    </p>
                  </div>

                  <div className="grid gap-x-12 sm:grid-cols-2">
                    {services.map(([number, name, description]) => (
                      <div
                        key={number}
                        className="group border-t border-[#0B1B3A]/15 py-6 transition-colors hover:border-[#D7A719]"
                      >
                        <div className="flex items-start gap-4">
                          <span className="pt-1 text-xs font-semibold text-[#B28A24]">
                            {number}
                          </span>
                          <div>
                            <h3 className="text-base font-semibold tracking-tight">
                              {name}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-[#0B1B3A]/55">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-7 max-w-3xl text-sm leading-7 text-[#0B1B3A]/55">
                    Project scope, deliverables, fees, timelines, usage rights
                    and other engagement-specific conditions should be
                    confirmed separately in a written proposal, quotation or
                    agreement.
                  </p>
                </section>
              )}

              <div>
                {sections.map((section, index) => (
                  <section
                    key={section.title}
                    id={sectionId(index)}
                    className="scroll-mt-10 border-t border-[#0B1B3A]/20 py-9 sm:py-12"
                  >
                    <div className="grid gap-4 sm:grid-cols-[65px_minmax(0,1fr)] sm:gap-7">
                      <p className="text-sm font-semibold tabular-nums text-[#B28A24]">
                        {String(index + 1).padStart(2, "0")}
                        <span className="ml-1 text-[#0B1B3A]/30">/</span>
                        <span className="ml-1 text-[#0B1B3A]/35">
                          {String(sections.length).padStart(2, "0")}
                        </span>
                      </p>

                      <div className="min-w-0">
                        <h2 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                          {section.title.replace(/^\d+\.\s*/, "")}
                        </h2>

                        <div className="mt-6 max-w-3xl space-y-5">
                          {section.content.map((paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className="whitespace-pre-line break-words text-sm leading-8 text-[#0B1B3A]/65 sm:text-[15px] sm:leading-9"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-8 border-y border-[#0B1B3A]/20 py-8 sm:py-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B28A24]">
                  Questions or enquiries
                </p>
                <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                  Get in touch.
                </h2>
                <a
                  href="mailto:team@vattalstudios.com"
                  className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#0B1B3A] underline decoration-[#D7A719] underline-offset-8 transition-colors hover:text-[#A17A16]"
                >
                  team@vattalstudios.com
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={isTerms ? "/privacy-policy" : "/terms-and-conditions"}
                  className="group inline-flex items-center gap-3 text-sm font-semibold transition-colors hover:text-[#A17A16]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1B3A]/20 transition-all group-hover:border-[#D7A719] group-hover:bg-[#F5B921]">
                    <ArrowUpRight size={17} />
                  </span>
                  Read {isTerms ? "Privacy Policy" : "Terms & Conditions"}
                </a>

                <a
                  href="/"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B1B3A]/50 transition-colors hover:text-[#0B1B3A]"
                >
                  Back to Vattal Studios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1.5 w-full bg-[#0B1B3A]" />
    </main>
  );
}

