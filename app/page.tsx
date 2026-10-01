import Hero from "@/components/Hero";
import { Marquee, Countdown } from "@/components/Extras";
import {
  Stats,
  About,
  Impact,
  Expect,
  Format,
  Agenda,
  Audience,
} from "@/components/Story";
import {
  Speakers,
  Ctf,
  Sponsors,
  Faq,
  Footer,
} from "@/components/Lower";
import Legacy from "@/components/Legacy";
import { Team } from "@/components/Team";
export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Impact />
      <Countdown />
      <Expect />
      <Format />
      <Agenda />
      <Speakers />
      <Audience />
      <Ctf />
      <Legacy />
      <Team />
      <Sponsors />
      <Faq />
      <Footer />
    </>
  );
}
