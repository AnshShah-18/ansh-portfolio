import { Github, Linkedin, Mail } from "lucide-react";
import { data } from "../data/portfolioData";

export default function Navbar() {
  const navItems = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Education", "education"],
    ["Certs", "certs"],
    ["Contact", "contact"],
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-800 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold text-neutral-100 hover:opacity-80 transition"> 
          {data.name}
        </a>
        <nav className="hidden sm:flex gap-6 text-sm">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="hover:opacity-80 transition">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 hover:shadow-md transition-all">
            <Linkedin size={18} />
          </a>
          <a href={data.links.github} target="_blank" rel="noreferrer" className="p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 hover:shadow-md transition-all">
            <Github size={18} />
          </a>
          <a href={`mailto:${data.email}`} className="p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 hover:shadow-md transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
