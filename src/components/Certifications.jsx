import { data } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

export default function Certifications() {
  return (
    <section id="certs" className="py-20 scroll-mt-24">
      <FadeInSection>
        <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight">
          Certifications
        </h2>
        </div>
        <ul className="list-disc list-inside text-neutral-400 space-y-2 leading-snug">
          {data.certs.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
