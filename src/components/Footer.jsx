import { Github, Linkedin, Mail } from "lucide-react";
import { data } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-800 py-10 text-center text-neutral-500 text-sm">
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a
          href={data.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 hover:shadow-md transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={data.links.github}
          target="_blank"
          rel="noreferrer"
          className="p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 hover:shadow-md transition-all"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href={`mailto:${data.email}`}
          className="p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 hover:shadow-md transition-all"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>

      {/* Divider line (subtle glow effect) */}
      <div className="max-w-6xl mx-auto border-t border-neutral-800 mb-4 opacity-60"></div>

      {/* Copyright Text */}
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-neutral-300 font-medium">{data.name}</span>. All
        rights reserved.
      </p>

      {/* Built With Note */}
      <p className="mt-1 text-xs text-neutral-600">
        Built with <span className="text-neutral-400">React</span> &{" "}
        <span className="text-neutral-400">Tailwind CSS</span>.
      </p>
    </footer>
  );
}
