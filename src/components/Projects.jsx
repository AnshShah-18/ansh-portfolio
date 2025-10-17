import { ExternalLink } from "lucide-react";
import { data } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

const Badge = ({ children }) => (
  <span className="inline-block rounded-full border border-neutral-700 px-3 py-1 text-sm mb-2 mr-2">
    {children}
  </span>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((p) => (
            <article
              key={p.title}
              className={`rounded-2xl border border-neutral-600 text-[1.05rem]
                          text-neutral-200 bg-neutral-900/40 backdrop-blur-sm
                          transition-all duration-300 p-5
                          ${
                            p.color === "blue"
                              ? "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                              : p.color === "purple"
                              ? "hover:border-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                              : p.color === "green"
                              ? "hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                              : "hover:border-neutral-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                          }`}
            >
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>

              <ul className="space-y-2 text-sm text-neutral-400 leading-snug">
                {p.highlights.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400 
                             hover:text-blue-300 hover:underline transition"
                >
                  View Repo <ExternalLink size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
