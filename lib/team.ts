// Add people here. Same format for organisers and volunteers:
//   { name: "Full Name", img: "/team/full-name.jpg", linkedin: "https://…", instagram: "https://…", web: "https://…" }
// Put the photo files in /public/team, register them in lib/assets.ts (e.g. organiserSuryansh: "/team/suryansh.png")
// and point `img` at them with A.<key>. A plain path string like "/team/<file>" also works.
// Only `name` is required: without `img` a monogram avatar is shown, and the
// social links are optional (buttons only appear for the ones you add).
import { A } from "@/lib/assets";
export type Person = {
  name: string;
  img?: string;
  linkedin?: string;
  instagram?: string;
  web?: string;
};
export const ORGANISERS: Person[] = [
  { name: "Suryansh Rai", img: A.organiserSuryansh },
  { name: "Mohd Zuhaib Khan", img: A.organiserZuhaib },
  { name: "Dhaval Viash", img: A.organiserDhaval },
  { name: "Priyanshuu Verma", img: A.organiserPriyanshu },
  { name: "Sidra Zahid", img: A.organiserSidra },
  { name: "Shreyansh Mishra", img: A.organiserShreyansh },
  { name: "Arnav Gupta", img: A.organiserArnav },
];
export const VOLUNTEERS: Person[] = [
  { name: "Shubh Pandey", img: A.volunteerShubh },
  { name: "Mandvi Tripathi", img: A.volunteerMandvi },
  { name: "Avinash", img: A.volunteerAvinash },
  { name: "Zara Siddiqui", img: A.volunteerZara },
  { name: "Kartikey Porwal", img: A.volunteerKartikey },
  { name: "Piyush Jiloka", img: A.volunteerPiyush },
];
