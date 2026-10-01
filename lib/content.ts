import type { A } from "@/lib/assets";
export const NAV = [
  ["About", "about"],
  ["Event", "event"],
  ["Schedule", "agenda"],
  ["Speakers", "speakers"],
  ["CTF", "ctf"],
  ["DD 1.0", "legacy"],
  ["Team", "team"],
  ["Sponsors", "sponsors"],
  ["FAQ", "faq"],
];
export const IMPACT = [
  ["30+", "Events delivered"],
  ["2K+", "Students engaged"],
  ["5+", "Active projects"],
  ["20+", "Collaborations & associations"],
];
export const FORMAT = [
  [
    "Day 01 — Online Capture The Flag",
    "a 12-hour Jeopardy-style competition, open for individual participation or teams of up to two.",
  ],
  [
    "Challenge areas",
    "Web Security, OSINT, Digital Forensics, Cryptography, Reverse Engineering, Networking and Linux.",
  ],
  [
    "Day 02 — Offline Cybersecurity Summit",
    "technical sessions, a hands-on workshop, sponsor session, industry interaction and networking.",
  ],
  [
    "Closing",
    "CTF winner felicitation and a focused opportunity for participants, practitioners and industry to connect.",
  ],
];
export const AGENDA = [
  [
    "DAY 01 · 5 OCTOBER · 12 PM–12 AM",
    "Online Capture The Flag",
    "A 12-hour Jeopardy-style CTF. Participants can compete individually or in teams of up to two.",
  ],
  [
    "DAY 01 · CHALLENGE AREAS",
    "Practical Cybersecurity Challenges",
    "Web Security, OSINT, Digital Forensics, Cryptography, Reverse Engineering, Networking and Linux.",
  ],
  [
    "DAY 02 · 10 OCTOBER · 10 AM–4 PM",
    "Offline Cybersecurity Summit",
    "A curated in-person experience focused on technical learning, practical security and community interaction.",
  ],
  [
    "DAY 02 · TECHNICAL SESSIONS",
    "Expert-Led Learning",
    "Technical sessions covering relevant cybersecurity and technology topics, with opportunities to learn directly from practitioners.",
  ],
  [
    "DAY 02 · WORKSHOP & INDUSTRY",
    "Hands-On Workshop & Interaction",
    "Applied security learning alongside sponsor engagement, industry interaction and networking.",
  ],
  [
    "DAY 02 · CLOSING",
    "Networking & CTF Winner Felicitation",
    "Close the experience by connecting students, practitioners and industry, followed by recognition of CTF winners.",
  ],
];
export const SPEAKERS: {
  session: string;
  topic: string;
  name: string;
  role: string;
  org: string;
  img: keyof typeof A;
}[] = [
  {
    session: "Session 1",
    topic: "AI Security",
    name: "Abhiraj Singh",
    role: "Senior Security Engineer",
    org: "InMobi",
    img: "speakerAbhiraj",
  },
  // {
  //   session: "Session 2",
  //   topic: "AMA",
  //   name: "Zuhaib Khan",
  //   role: "Sr. Software Engineer",
  //   org: "BFC Capital",
  //   img: "speakerZuhaib",
  // },
  {
    session: "Session 2",
    topic: "AMA",
    name: "Kishan Kumar",
    role: "Manager - Cyber Security",
    org: "BDO",
    img: "speakerKishan",
  },
  {
    session: "Session 3",
    topic: "LLM Security",
    name: "Naman Agrawal",
    role: "",
    org: "IIM Lucknow",
    img: "naman",
  },{
    session: "Workshop",
    topic: "Mobile Security",
    name: "Utkarsh Vishwakarma",
    role: "Cyber Security Analyst",
    org: "Codevirus Security",
    img: "utkarsh",
  },
];
export const AUD = [
  [
    "Cybersecurity Learners",
    "Students actively developing practical security skills.",
  ],
  [
    "Hackathon Builders",
    "Students accustomed to solving real technical problems.",
  ],
  [
    "CTF Competitors",
    "Participants demonstrating practical cybersecurity problem-solving.",
  ],
  [
    "Career-Focused Talent",
    "Students exploring internships and technology careers.",
  ],
  [
    "Engineering Students",
    "CSE, IT and engineering students interested in cybersecurity and technology.",
  ],
  [
    "Practitioners & Faculty",
    "People contributing to the cybersecurity ecosystem through practice, teaching and industry experience.",
  ],
];
export const CATS = [
  "Web Security",
  "OSINT",
  "Digital Forensics",
  "Cryptography",
  "Reverse Engineering",
  "Networking",
  "Linux",
  "Prizes & goodies",
];
export const SPONSORS = [
  "Title Sponsor",
  "Gold Sponsor",
];
export const FAQ = [
  [
    "What is Digital Domination 2.0?",
    "A two-day cybersecurity experience by Cyber Intelligence Community Lucknow: an online CTF on 5 October 2026 and an offline summit in Lucknow on 10 October 2026, built around learning, competition and connection.",
  ],
  [
    "Who can participate?",
    "Students, practitioners, faculty and cybersecurity enthusiasts. You don't need to be a security specialist to join.",
  ],
  [
    "How do I register?",
    "Registrations are live on Commudle. The Online CTF and the Offline Event have separate registration pages, so use the Register button on each card in the countdown section. Register for both if you want to attend both days.",
  ],
  [
    "Do I need to register separately for the CTF and the offline event?",
    "Yes. They are two separate events on Commudle. Registering for one does not register you for the other.",
  ],
  [
    "When and how does the CTF run?",
    "The Online CTF runs on 5 October 2026 from 12:00 PM to 12:00 AM IST. It is a 12-hour Jeopardy-style competition that you can play from anywhere.",
  ],
  [
    "Can I play the CTF solo or in a team?",
    "Both. You can compete individually or in a team of up to two people.",
  ],
  [
    "Do I need prior CTF experience?",
    "No. Challenges cover Web Security, OSINT, Digital Forensics, Cryptography, Reverse Engineering, Networking and Linux, so you can start with the category you are most comfortable in.",
  ],
  [
    "What happens at the offline event?",
    "On 10 October 2026, from 10 AM to 4 PM, the Lucknow summit brings expert-led technical sessions, a hands-on workshop, industry interaction and networking, followed by the CTF winner felicitation.",
  ],
  [
    "Is there a fee, and will I get a certificate?",
    "Entry and certificate details are published on each event's Commudle page. Anything new will also be shared with registered participants.",
  ],
  [
    "Can I attend only the offline event, or only the CTF?",
    "Yes. Each day stands on its own, so you can register for just the one you want, or both.",
  ],
  [
    "Are there prizes?",
    "Yes. The CTF ends with a winner felicitation on Day 2, along with prizes, goodies and recognition.",
  ],
];
