"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Calendar,
  Trophy,
  Flag,
  Settings,
  Network,
  FileText,
  GraduationCap,
  Code2,
  Briefcase,
  Cpu,
} from "lucide-react";
import { useGsap } from "@/lib/useGsap";
import { A } from "@/lib/assets";
import { Sec, Head } from "@/components/ui";
import { IMPACT, FORMAT, AGENDA, AUD } from "@/lib/content";
/* eslint-disable @next/next/no-img-element */
const count = (root: HTMLElement) =>
  root.querySelectorAll<HTMLElement>("[data-n]").forEach((e) => {
    const o = { v: 0 },
      n = +e.dataset.n!,
      s = e.dataset.s || "+";
    gsap.to(o, {
      v: n,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        e.textContent = Math.round(o.v) + s;
      },
      scrollTrigger: { trigger: e, start: "top 92%", once: true },
    });
  });
export function Stats() {
  const r = useRef<HTMLElement>(null);
  useGsap(r, () => {
    gsap.from(".st", {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "expo.out",
      scrollTrigger: { trigger: r.current, start: "top 92%", once: true },
    });
    count(r.current!);
  });
  const S: [typeof Users, string, string, string?][] = [
    [Users, "", "Expected attendees", "500"],
    [Calendar, "2 Days", "CTF + Offline event"],
    [Users, "Expert", "Speakers & workshops"],
    [FileText, "", "Sessions", "10"],
    [Trophy, "Exciting", "Prizes & rewards"],
  ];
  return (
    <section
      ref={r}
      className="relative z-10 mx-auto mt-20 max-w-6xl px-5 pb-16"
    >
      <div className="hud grid grid-cols-2 gap-6 p-7 md:grid-cols-5">
        {S.map(([I, a, b, n], i) => (
          <div key={i} className="st flex items-center gap-3">
            <I className="text-red" size={30} />
            <div>
              <b className="block font-head text-2xl" data-n={n}>
                {a}
              </b>
              <span className="text-xs text-black/60">{b}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function About() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.fromTo(
      ".ab-img",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
        scrollTrigger: {
          trigger: ".ab-img",
          start: "top 88%",
          end: "top 40%",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      ".ab-img img",
      { scale: 1.4 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".ab-img",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    gsap.from(".abc", {
      y: 70,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: ".abc", start: "top 90%", once: true },
    });
  });
  return (
    <Sec id="about" bg={A.bgAbout}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Head n="01" e="About the event">
              Where tradition{" "}
              <span className="text-red">inspires intelligence</span>
            </Head>
            <p className="mt-6 text-lg text-black/70" data-reveal>
              Digital Domination 2.0 is CIC Lucknow's flagship cybersecurity and
              technology event, designed around one core idea:{" "}
              <b className="text-ink">learn by doing</b>.
            </p>
          </div>
          <div className="ab-img hud aspect-[4/3] overflow-hidden">
            <img
              src={A.about}
              alt="Bara Imambara, Lucknow"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="abc hud p-8">
            <h3 className="text-3xl">Cyber Intelligence Community Lucknow</h3>
            <p className="mt-3 text-black/70">
              Cyber Intelligence Community (CIC) is a community-driven
              cybersecurity initiative focused on hands-on learning, industry
              collaboration, practical security experience and community
              building. Founded in March 2025, CIC works across cybersecurity,
              artificial intelligence, cloud security, OSINT, digital forensics
              and emerging technology.
            </p>
          </div>
          <div className="abc hud p-8">
            <h3 className="text-3xl">Digital Domination 2.0</h3>
            <p className="mt-3 text-black/70">
              The two-day experience combines a 12-hour online Capture The Flag
              competition with an offline cybersecurity summit featuring
              technical sessions, a hands-on workshop, industry interaction,
              networking and CTF winner felicitation.
            </p>
          </div>
        </div>
      </div>
    </Sec>
  );
}
export function Impact() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.from(".im", {
      y: 80,
      opacity: 0,
      rotateX: -40,
      transformPerspective: 800,
      stagger: 0.12,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: r.current, start: "top 80%", once: true },
    });
    count(r.current!);
  });
  return (
    <Sec id="impact" bg={A.bgImpact}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-24">
        <Head n="02" e="Impact">
          A proven execution track record.
        </Head>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {IMPACT.map(([v, l]) => (
            <div key={l} className="im hud p-8">
              <b
                className="block font-head text-6xl text-red"
                data-n={parseInt(v)}
                data-s={v.replace(/\d+/, "")}
              >
                {v}
              </b>
              <span className="mt-2 block text-sm text-black/70">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}
export function Expect() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.from(".ex", {
      y: 100,
      opacity: 0,
      rotateX: -30,
      transformPerspective: 800,
      stagger: 0.12,
      duration: 1.1,
      ease: "expo.out",
      scrollTrigger: { trigger: r.current, start: "top 78%", once: true },
    });
  });
  const X: [typeof Flag, string, string][] = [
    [Flag, "Online CTF", "Test your skills with real-world challenges."],
    [Users, "Expert Sessions", "Learn from industry professionals."],
    [Settings, "Hands-on Workshops", "Gain practical, job-ready skills."],
    [Network, "Networking", "Connect with like-minded people."],
    [Trophy, "Prizes & Rewards", "Win goodies and recognition."],
  ];
  return (
    <Sec id="expect" bg={A.bgExpect}>
      <div ref={r} className="mx-auto max-w-[92rem] px-5 py-24">
        <Head n="04" e="Event highlights">
          What to expect
        </Head>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {X.map(([I, t, d]) => (
            <div
              key={t}
              className="ex hud flex min-h-[22rem] flex-col justify-between p-8"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-red/10">
                <I className="text-red" size={34} />
              </span>
              <div>
                <h3 className="text-3xl">{t}</h3>
                <p className="mt-3 text-black/65">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}
export function Format() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.from(".fm", {
      x: -80,
      opacity: 0,
      duration: 1.1,
      ease: "expo.out",
      scrollTrigger: { trigger: r.current, start: "top 80%", once: true },
    });
    gsap.utils
      .toArray<HTMLElement>(".fi")
      .forEach((e, i) =>
        gsap.from(e, {
          x: 100,
          opacity: 0,
          duration: 1,
          delay: i * 0.05,
          ease: "expo.out",
          scrollTrigger: { trigger: e, start: "top 90%", once: true },
        }),
      );
  });
  return (
    <Sec id="event" bg={A.bgFormat}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-24">
        <Head n="05" e="Event format">
          Two days. One complete experience.
        </Head>
        <div className="mt-10 grid gap-6 md:grid-cols-[.9fr_1.6fr]">
          <div className="fm hud p-8 md:sticky md:top-28 md:self-start">
            <h3 className="text-3xl">From competition to connection</h3>
            <p className="mt-3 text-black/70">
              Digital Domination 2.0 brings together practical cybersecurity
              competition, expert-led learning and direct interaction with the
              technology community.
            </p>
            <span className="mt-5 block text-xs tracking-[.15em] text-red">
              5 OCTOBER → 10 OCTOBER 2026
            </span>
          </div>
          <div className="space-y-4">
            {FORMAT.map(([t, d]) => (
              <div key={t} className="fi hud flex gap-4 p-6">
                <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-red" />
                <p className="text-black/70">
                  <b className="text-ink">{t}:</b> {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sec>
  );
}
export function Agenda() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    const c = gsap.utils.toArray<HTMLElement>(".ag"),
      b = gsap.utils.toArray<HTMLElement>(".rb");
    c.forEach((e, i) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 62%",
        end: "bottom 38%",
        onToggle: (s) => {
          e.classList.toggle("on", s.isActive);
          if (s.isActive)
            b.forEach((x, j) => x.classList.toggle("lit", j === i));
        },
      });
      gsap.from(e, {
        x: i % 2 ? 70 : -70,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: e, start: "top 92%", once: true },
      });
    });
    b[0]?.classList.add("lit");
    c[0]?.classList.add("on");
  });
  return (
    <Sec id="agenda" bg={A.bgAgenda}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-24">
        <Head n="06" e="Schedule">
          From competition to connection.
        </Head>
        <div className="mt-10 grid grid-cols-[44px_1fr] gap-5 md:grid-cols-[64px_1fr] md:gap-8">
          <div className="sticky top-[calc(50vh-150px)] flex flex-col gap-2 self-start">
            {AGENDA.map((_, i) => (
              <span
                key={i}
                className="rb grid h-11 w-11 place-items-center border border-black/20 bg-white/50 font-head text-xs backdrop-blur md:h-14 md:w-14"
              >
                0{i + 1}
              </span>
            ))}
          </div>
          <div className="space-y-8">
            {AGENDA.map(([t, h, p]) => (
              <div key={h} className="ag hud p-7 md:p-9">
                <b className="font-head text-sm tracking-[.08em] text-red">
                  {t}
                </b>
                <h3 className="mt-2 text-3xl">{h}</h3>
                <p className="mt-2 text-black/65">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sec>
  );
}
export function Audience() {
  const r = useRef<HTMLDivElement>(null);
  const I = [GraduationCap, Code2, Flag, Briefcase, Cpu, Users];
  useGsap(r, () => {
    gsap.from(".au", {
      y: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: r.current, start: "top 80%", once: true },
    });
  });
  return (
    <Sec id="audience" bg={A.bgAud}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-24">
        <Head n="08" e="Audience">
          A high-intent technology community.
        </Head>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AUD.map(([t, d], i) => {
            const C = I[i];
            return (
              <div key={t} className="au hud p-8">
                <C className="text-red" size={32} />
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-2 text-black/65">{d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Sec>
  );
}
