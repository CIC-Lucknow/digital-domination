"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import {
  Plus,
  ArrowRight,
  Instagram,
  Linkedin,
  Globe,
  Users,
  Calendar,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useGsap } from "@/lib/useGsap";
import { A } from "@/lib/assets";
import { Sec, Head } from "@/components/ui";
import { Terminal } from "@/components/Extras";
import { SPEAKERS, CATS, SPONSORS, FAQ } from "@/lib/content";
import { SITE } from "@/lib/site";
/* eslint-disable @next/next/no-img-element */
export function Speakers() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    const t = r.current!.querySelector(".sp-track") as HTMLElement;
    const dist = () => Math.max(0, t.scrollWidth - innerWidth + 96);
    gsap.to(t, {
      x: () => -dist(),
      ease: "none",
      scrollTrigger: {
        trigger: r.current,
        start: "top top",
        end: () => "+=" + dist(),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    gsap.from(".spc", {
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: { trigger: r.current, start: "top 65%", toggleActions: "play none none reverse" },
    });
  });
  return (
    <Sec id="speakers" bg={A.bgSpeakers}>
      <div ref={r} className="flex h-screen flex-col justify-center pt-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Head n="07" e="Speakers">
            Learn from the best
          </Head>
        </div>
        <div className="sp-track mt-8 flex w-max gap-6 px-5 md:px-[max(1.25rem,calc(50vw-36rem))]">
          <div className="hud spc flex h-[46vh] w-80 flex-col justify-center p-8">
            <h3 className="text-4xl">
              Meet the
              <br />
              Speakers
            </h3>
            <p className="mt-3 text-sm text-black/65">
              Expert-led technical sessions and practical learning. More
              speakers will be announced as the lineup is confirmed.
            </p>
          </div>
          {SPEAKERS.map((s) => (
            <article
              key={s.name}
              className="hud spc flex h-auto md:h-[46vh] w-[min(88vw,36rem)] flex-col md:flex-row overflow-hidden"
            >
              <div className="relative w-full md:w-2/5 shrink-0 bg-ink aspect-square md:aspect-auto order-1 md:order-1">
                <img
                  src={A[s.img]}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-lg border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md md:hidden">
                  <h3 className="text-2xl text-white">{s.name}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-5 md:p-8 order-2 md:order-2">
                <p className="eyebrow">
                  {s.session} · {s.topic}
                </p>
                <h3 className="mt-2 hidden text-4xl md:block">{s.name}</h3>
                <p className="mt-1 text-sm font-medium">
                  {s.role} · {s.org}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Sec>
  );
}
export function Ctf() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.fromTo(
      ".hk",
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: r.current, scrub: true },
      },
    );
    gsap.from(".cat", {
      scale: 0.6,
      opacity: 0,
      stagger: 0.07,
      ease: "back.out(2)",
      scrollTrigger: { trigger: ".cat", start: "top 90%", once: true },
    });
    gsap.from(".ctf-img", {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: ".ctf-img", start: "top 90%", once: true },
    });
  });
  return (
    <Sec id="ctf" bg={A.bgCtf}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <Head n="09" e="Capture the flag">
          Online CTF
        </Head>
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          <div>
            <p className="text-lg text-black/70" data-reveal>
              A 12-hour Jeopardy-style Capture The Flag with challenges across
              multiple categories. Compete individually or in teams of up to
              two.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {CATS.map((c) => (
                <div
                  key={c}
                  className="cat hud grid h-24 place-items-center p-2 text-center font-head text-lg"
                >
                  {c}
                </div>
              ))}
            </div>
            <Terminal />
          </div>
          <div className="ctf-img">
          <div className="hud relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              src={A.hacker}
              alt=""
              loading="lazy"
              className="hk absolute inset-0 h-[120%] w-full object-cover"
            />
            <p
              className="glitch absolute left-6 top-6 font-head text-5xl font-bold leading-tight text-white"
              data-t={"THINK\nHACK\nLEARN\nDOMINATE"}
            >
              THINK
              <br />
              HACK
              <br />
              LEARN
              <br />
              <span className="text-red">DOMINATE</span>
            </p>
          </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}
const SPONSOR_LOGOS: Record<string, { src: string; name: string }> = {
  "Title Sponsor": { src: A.sponsorInmobi, name: "InMobi" },
  "Gold Sponsor": { src: A.sponsorProdigy, name: "Prodigy" },
};
const OTHER_SPONSORS = [
  { src: A.sponsorOsen, name: "OSEN" },
  { src: A.sponsorCodevirus, name: "Codevirus" },
  { src: A.sponsorXyz, name: "XYZ", scale: "scale-75" },
];
export function Sponsors() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.from(".sp", {
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: { trigger: r.current, start: "top 95%", once: true },
    });
  });
  return (
    <Sec id="sponsors" bg={A.bgSponsors}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <Head small n="11" e="Sponsors & supporters">
          Organizations supporting the experience
        </Head>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {SPONSORS.map((t) => (
            <div
              key={t}
              className="sp hud group flex h-52 flex-col justify-between p-4 md:h-56"
            >
              {SPONSOR_LOGOS[t] ? (
                <div className="grid min-h-0 flex-1 place-items-center border border-black/10 bg-white/70 p-4 backdrop-blur">
                  <img
                    src={SPONSOR_LOGOS[t].src}
                    alt={SPONSOR_LOGOS[t].name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="grid flex-1 place-items-center border border-dashed border-black/20 bg-white/40 font-head text-2xl text-black/30 backdrop-blur">
                  LOGO
                </div>
              )}
              <p className="mt-3 inline-flex w-fit items-center gap-2 self-center bg-ink/90 px-4 py-1.5 font-head text-xs uppercase tracking-[.18em] text-white shadow-[0_10px_24px_-12px_rgba(17,19,21,.7)] backdrop-blur transition-colors duration-300 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] group-hover:bg-red">
                <i className="h-1.5 w-1.5 rotate-45 bg-red transition-colors duration-300 group-hover:bg-white" />
                {t}
              </p>
            </div>
          ))}
          {OTHER_SPONSORS.map(({ src, name, scale }) => (
            <div
              key={name}
              className="sp hud flex h-52 flex-col justify-center p-4 md:h-56"
            >
              <div className="grid min-h-0 flex-1 place-items-center border border-black/10 bg-white/70 p-4 backdrop-blur">
                <img
                  src={src}
                  alt={name}
                  loading="lazy"
                  className={`max-h-full max-w-full object-contain ${scale ?? ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}
export function Faq() {
  const [o, s] = useState(0);
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.utils.toArray<HTMLElement>(".fq").forEach((e) =>
      gsap.from(e, {
        y: 24,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: e, start: "top 98%", once: true },
      }),
    );
  });
  return (
    <Sec id="faq" bg={A.bgFaq}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <Head n="12" e="FAQ">
          Frequently asked questions
        </Head>
        <div className="mt-10 space-y-4">
          {FAQ.map(([q, a], i) => (
            <div key={q} className="fq">
            <div className="hud w-full">
              <button
                aria-expanded={o === i}
                onClick={() => s(o === i ? -1 : i)}
                className="flex w-full items-center gap-5 p-6 text-left"
              >
                <span className="font-head text-3xl text-red/60">0{i + 1}</span>
                <span className="flex-1 font-head text-2xl md:text-3xl">
                  {q}
                </span>
                <Plus
                  className={`text-red transition ${o === i ? "rotate-45" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ${o === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pl-[4.5rem] text-black/70">{a}</p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        <div className="fq mt-8">
        <div className="hud flex flex-wrap items-center justify-between gap-4 p-8">
          <div>
            <h3 className="text-3xl">Still have questions?</h3>
            <p className="text-black/65">Reach out to the CIC Lucknow team.</p>
          </div>
          <a href="https://ciclucknow.in" className="btn bg-red text-white">
            Contact us <ArrowRight size={16} />
          </a>
        </div>
        </div>
      </div>
    </Sec>
  );
}
export function Footer() {
  const r = useRef<HTMLElement>(null);
  useGsap(r, () => {
    gsap.from(".ft", {
      y: 24,
      opacity: 0,
      stagger: 0.06,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: { trigger: r.current, start: "top 100%", once: true },
    });
  });
  const L = [
    ["About CIC", "about"],
    ["Schedule", "agenda"],
    ["Speakers", "speakers"],
    ["Audience", "audience"],
    ["Supporters", "sponsors"],
  ];
  const S: [typeof Globe, string, string][] = [
    [Instagram, "Instagram", "https://www.instagram.com/cic_lucknow/"],
    [
      Linkedin,
      "LinkedIn",
      "https://www.linkedin.com/company/cyber-intelligence-community-lucknow/",
    ],
    [Users, "Commudle", "https://www.commudle.com/communities/cic-lucknow"],
    [Globe, "CIC Lucknow website", "https://ciclucknow.in"],
  ];
  const E: [typeof Calendar, string][] = [
    [Calendar, "5 Oct 2026 · Online CTF"],
    [Calendar, "10 Oct 2026 · Offline Summit"],
    [MapPin, "Lucknow, Uttar Pradesh"],
  ];
  return (
    <footer
      ref={r}
      className="relative isolate overflow-hidden border-t border-white/70"
    >
      <img
        src={A.bgFooter}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 " />
      <div className="mx-auto max-w-6xl px-5 pb-6 pt-10 md:pt-12">
        <div className="ft hud grid gap-10 p-7 md:grid-cols-[1.7fr_1fr_1.2fr] md:p-10">
          <div>
            <p className="eyebrow">Cyber Intelligence Community / Lucknow</p>
            <p className="mt-3 font-head text-5xl font-bold uppercase leading-[.9] md:text-6xl">
              Digital <span className="text-red">Domination 2.0</span>
            </p>
            <p className="mt-4 max-w-md text-sm text-black/65">
              CIC Lucknow's flagship cybersecurity and technology event,
              bringing together competition, practical learning, industry
              interaction and community networking.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {E.map(([I, t]) => (
                <li key={t} className="flex items-center gap-2">
                  <I size={16} className="text-red" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={SITE.register}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 bg-red text-white"
            >
              Register Now <ArrowRight size={16} />
            </a>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-3 text-sm">
              {L.map(([l, id]) => (
                <li key={id}>
                  <a
                    className="inline-block transition hover:translate-x-1 hover:text-red"
                    href={`#${id}`}
                  >
                    <span className="mr-2 text-red">//</span>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 space-y-3 text-sm">
              {S.map(([I, l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex items-center gap-3 transition hover:text-red"
                  >
                    <span className="grid h-10 w-10 place-items-center border border-white/80 bg-white/50 backdrop-blur transition group-hover:bg-red group-hover:text-white">
                      <I size={18} />
                    </span>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ft mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-black/55">
          <p>
            Cyber Intelligence Community Lucknow · Digital Domination 2.0 · ©
            2026 CIC. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition hover:text-red"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
