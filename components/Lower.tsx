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
} from "lucide-react";
import { useGsap } from "@/lib/useGsap";
import { A } from "@/lib/assets";
import { Sec, Head } from "@/components/ui";
import { Terminal } from "@/components/Extras";
import { SPEAKERS, CATS, SPONSORS, FAQ } from "@/lib/content";
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
      scrollTrigger: { trigger: r.current, start: "top 70%", once: true },
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
              Expert-led technical sessions and practical learning. Speakers
              will be announced as the lineup is confirmed.
            </p>
          </div>
          {SPEAKERS.map((role, i) => (
            <article
              key={i}
              className="hud spc flex h-[46vh] w-[min(88vw,36rem)] overflow-hidden"
            >
              <div className="w-2/5 shrink-0 bg-ink">
                <img
                  src={A.person}
                  alt="Speaker to be announced"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="eyebrow">{role}</p>
                <h3 className="mt-2 text-3xl md:text-4xl">Speaker Name</h3>
                <p className="mt-1 text-sm font-medium">
                  Designation · Organization
                </p>
                <p className="mt-3 text-sm text-black/60">
                  Session topic and a short bio will appear here once the
                  speaker is confirmed.
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-2 border border-red/40 bg-white/50 px-3 py-1 text-xs backdrop-blur">
                  <Linkedin size={14} /> Profile soon
                </span>
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
  });
  return (
    <Sec id="ctf" bg={A.bgCtf}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-24">
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
          <div className="hud relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              src={A.hacker}
              alt=""
              loading="lazy"
              className="hk absolute inset-0 h-[120%] w-full object-cover"
            />
            <p
              className="glitch absolute left-6 top-6 font-head text-5xl font-bold leading-tight text-white"
              data-t="THINK HACK LEARN DOMINATE"
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
    </Sec>
  );
}
export function Venue() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.fromTo(
      ".vn",
      { clipPath: "inset(18% 22% 18% 22%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: r.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      },
    );
  });
  return (
    <Sec id="lucknow">
      <div ref={r} className="mx-auto max-w-6xl px-5 py-24">
        <p className="eyebrow" data-reveal>
          The city of Nawabs
        </p>
        <h2 data-split className="mt-3 text-6xl uppercase md:text-8xl">
          Lucknow
        </h2>
        <div className="vn mt-8 aspect-[21/9] overflow-hidden">
          <img
            src={A.venue}
            alt="Lucknow heritage skyline"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Sec>
  );
}
export function Sponsors() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.from(".sp", {
      y: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: r.current, start: "top 80%", once: true },
    });
  });
  return (
    <Sec id="sponsors" bg={A.bgSponsors}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-24">
        <Head n="11" e="Sponsors & supporters">
          Organizations supporting the experience
        </Head>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SPONSORS.map((t) => (
            <div
              key={t}
              className="sp hud flex h-72 flex-col justify-between p-6"
            >
              <div className="grid flex-1 place-items-center border border-dashed border-black/20 bg-white/40 font-head text-2xl text-black/30 backdrop-blur">
                LOGO
              </div>
              <p className="mt-4 w-fit self-center rounded-full bg-red px-5 py-1.5 font-head text-base text-white">
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}
export function Faq() {
  const [o, s] = useState(0);
  return (
    <Sec id="faq" bg={A.bgFaq}>
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Head n="12" e="FAQ">
          Frequently asked questions
        </Head>
        <div className="mt-10 space-y-4">
          {FAQ.map(([q, a], i) => (
            <div key={q} className="hud w-full">
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
          ))}
        </div>
        <div className="hud mt-8 flex flex-wrap items-center justify-between gap-4 p-8">
          <div>
            <h3 className="text-3xl">Still have questions?</h3>
            <p className="text-black/65">Reach out to the CIC Lucknow team.</p>
          </div>
          <a href="https://ciclucknow.in" className="btn bg-red text-white">
            Contact us <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </Sec>
  );
}
export function Footer() {
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
  return (
    <footer className="relative isolate mt-10 overflow-hidden border-t border-white/70">
      <img
        src={A.bgFooter}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-white/50 backdrop-blur-2xl" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.5fr_1fr_auto]">
        <div>
          <p className="eyebrow">Cyber Intelligence Community / Lucknow</p>
          <p className="mt-3 font-head text-5xl font-bold uppercase leading-[.9] md:text-7xl">
            Digital <span className="text-red">Domination 2.0</span>
          </p>
          <p className="mt-4 max-w-md text-sm text-black/65">
            CIC Lucknow's flagship cybersecurity and technology event, bringing
            together competition, practical learning, industry interaction and
            community networking.
          </p>
          <a href="#register" className="btn mt-6 bg-red text-white">
            Register Now <ArrowRight size={16} />
          </a>
        </div>
        <ul className="space-y-3 text-sm">
          {L.map(([l, id]) => (
            <li key={id}>
              <a
                className="transition hover:translate-x-1 hover:text-red"
                href={`#${id}`}
              >
                <span className="mr-2 text-red">//</span>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 md:flex-col">
          {S.map(([I, l, h]) => (
            <a
              key={l}
              href={h}
              target="_blank"
              rel="noopener"
              aria-label={l}
              className="grid h-11 w-11 place-items-center border border-white/80 bg-white/50 backdrop-blur transition hover:bg-red hover:text-white"
            >
              <I size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-black/10 py-5 text-center text-xs text-black/50">
        Cyber Intelligence Community Lucknow · Digital Domination 2.0 · © 2026
        CIC. All rights reserved.
      </p>
    </footer>
  );
}
