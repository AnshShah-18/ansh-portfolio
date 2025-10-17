import { GraduationCap } from "lucide-react";
import { data } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

export default function Education() {
  return (
    <section id="education" className="py-20 scroll-mt-24">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight">
            Education
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {data.education.map((ed) => (
            <article
              key={ed.school}
              className={`rounded-2xl border border-neutral-600 text-[1.05rem]
                          text-neutral-200 bg-neutral-900/40 backdrop-blur-sm
                          transition-all duration-300 p-5
                          ${
                            ed.color === "blue"
                              ? "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                              : ed.color === "purple"
                              ? "hover:border-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                              : ed.color === "green"
                              ? "hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                              : "hover:border-neutral-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                          }`}
            >
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <GraduationCap size={16} /> {ed.period}
              </div>
              <h3 className="mt-1 font-semibold text-lg text-neutral-100">
                {ed.degree}
              </h3>
              <p className="text-neutral-400">{ed.school}</p>
              <p className="mt-2 text-sm text-neutral-400 leading-snug">
                {ed.details}
              </p>
            </article>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
