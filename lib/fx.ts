import gsap from "gsap";
export function scramble(el: HTMLElement, txt: string, dur = 1.2) {
  const C = "01<>/\\#$%&*ABCDEF";
  const o = { p: 0 };
  return gsap.to(o, {
    p: 1,
    duration: dur,
    ease: "none",
    onUpdate: () => {
      const n = Math.floor(o.p * txt.length);
      el.textContent =
        txt.slice(0, n) +
        Array.from(txt.slice(n))
          .map((c) =>
            c === " " ? " " : C[Math.floor(Math.random() * C.length)],
          )
          .join("");
    },
  });
}
export function type(el: HTMLElement, txt: string, dur: number) {
  const o = { p: 0 };
  return gsap.to(o, {
    p: 1,
    duration: dur,
    ease: "none",
    onUpdate: () => {
      el.textContent = txt.slice(0, Math.round(o.p * txt.length));
    },
  });
}
export function split(el: HTMLElement) {
  if (el.dataset.done)
    return Array.from(el.querySelectorAll<HTMLElement>("[data-c]"));
  el.dataset.done = "1";
  el.setAttribute("aria-label", el.textContent || "");
  const out: HTMLElement[] = [];
  const walk = (n: Node) =>
    Array.from(n.childNodes).forEach((c) => {
      if (c.nodeType === 3) {
        const f = document.createDocumentFragment();
        (c.textContent || "").split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) {
            f.appendChild(document.createTextNode(" "));
            return;
          }
          const wd = document.createElement("span");
          wd.setAttribute("aria-hidden", "true");
          wd.style.cssText = "display:inline-block;white-space:nowrap";
          Array.from(w).forEach((ch) => {
            const s = document.createElement("span");
            s.textContent = ch;
            s.dataset.c = "1";
            s.style.display = "inline-block";
            wd.appendChild(s);
            out.push(s);
          });
          f.appendChild(wd);
        });
        c.replaceWith(f);
      } else if ((c as HTMLElement).tagName !== "BR") walk(c);
    });
  walk(el);
  return out;
}
