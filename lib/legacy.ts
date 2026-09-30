// Digital Domination 1.0 showcase: edit freely. Drop real photos in /public/assets and update src.
export const DD1 = {
  title: "Digital Domination 1.0",
  blurb:
    "The first edition brought students, practitioners and CIC volunteers together for practical, hands-on cybersecurity. Version 2.0 builds on that foundation.",
  points: [
    "Hands-on learning over lectures",
    "A community-first way of organising",
    "The foundation for 2.0",
  ],
};
export const SHOTS = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/assets/dd1-${n}.png`,
  cap: `Moment ${n}`,
}));
