import { Briefcase } from "lucide-react";
import { data } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-24">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {data.experience.map((e) => (
            <article
              key={e.org}
              className={`rounded-2xl border border-neutral-600 text-[1.05rem]
                          text-neutral-200 bg-neutral-900/40 backdrop-blur-sm
                          transition-all duration-300 p-5
                          ${
                            e.color === "blue"
                              ? "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                              : e.color === "purple"
                              ? "hover:border-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                              : e.color === "green"
                              ? "hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                              : "hover:border-neutral-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                          }`}
            >
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Briefcase size={16} /> {e.period}
              </div>
              <h3 className="mt-1 font-semibold text-lg text-neutral-100">
                {e.role} — {e.org}
              </h3>
              <ul className="mt-2 text-sm text-neutral-400 leading-snug space-y-1">
                {e.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
