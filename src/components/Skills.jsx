import { Code2, Cpu, Wrench } from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4 scroll-mt-24">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* === Programming Languages === */}
          <article
            className="rounded-2xl border border-neutral-600 text-neutral-200
                       bg-neutral-900/40 backdrop-blur-sm p-6 transition-all duration-300
                       hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400">
                <Code2 size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-100">
                Programming Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Scala",
                "C++",
                "JavaScript",
                "TypeScript",
                "HTML / CSS",
                "SQL",
              ].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 border border-neutral-600 rounded-lg text-[1rem]
                             text-neutral-300 hover:border-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]
                             transition-all"
                >
                  {lang}
                </span>
              ))}
            </div>
          </article>

          {/* === Frameworks & Libraries === */}
          <article
            className="rounded-2xl border border-neutral-600 text-neutral-200
                       bg-neutral-900/40 backdrop-blur-sm p-6 transition-all duration-300
                       hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-400">
                <Cpu size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-100">
                Frameworks & Libraries
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express.js",
                "Next.js",
                "PyTorch",
                "TensorFlow",
                "Scikit-learn",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "OpenCV",
                "Flask",
                "FastAPI",
                "Hadoop MapReduce",
                "Lucene",
              ].map((fw) => (
                <span
                  key={fw}
                  className="px-3 py-1 border border-neutral-600 rounded-lg text-[1rem]
                             text-neutral-300 hover:border-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]
                             transition-all"
                >
                  {fw}
                </span>
              ))}
            </div>
          </article>

          {/* === Tools & Platforms === */}
          <article
            className="rounded-2xl border border-neutral-600 text-neutral-200
                       bg-neutral-900/40 backdrop-blur-sm p-6 transition-all duration-300
                       hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400">
                <Wrench size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-100">
                Tools & Platforms
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS (EC2, S3, EMR, Lambda)",
                "Docker",
                "Kubernetes",
                "Git / GitHub / Gitea",
                "Linux",
                "Ollama",
                "Tableau",
                "Power BI",
                "PostgreSQL",
                "MySQL",
                "VS Code",
                "Jupyter",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 border border-neutral-600 rounded-lg text-[1rem]
                             text-neutral-300 hover:border-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]
                             transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>
        </div>
      </FadeInSection>
    </section>
  );
}
