import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-24">
      <FadeInSection>
      <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight"
      >
        About Me
      </motion.h2>
      </div>
      <div className="grid md:grid-cols-[1fr,1.5fr] gap-10 items-center">
        <motion.img
          src={profilePic}
          alt="Ansh Shah"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl w-full max-w-xs mx-auto border border-neutral-800 shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 text-neutral-400 leading-relaxed"
        >
          <p className="text-neutral-300 leading-relaxed mb-6">
        I’m <span className="text-blue-400 font-semibold">Ansh Shah</span>, a{" "}
        <span className="text-blue-400 font-semibold">Software Developer</span> and{" "}
        <span className="text-blue-400 font-semibold">Machine Learning Engineer</span> pursuing my{" "}
        <span className="font-semibold text-neutral-100">
          M.S. in Computer Science at the University of Illinois Chicago (UIC)
        </span>. I’m passionate about building{" "}
        <span className="text-blue-400">AI-driven, cloud-native, and distributed systems</span> that combine research with real-world engineering.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-6">
        With a strong foundation in software engineering, I develop{" "}
        <span className="text-blue-400">full-stack applications</span> and scalable{" "}
        <span className="text-blue-400">cloud pipelines</span> using technologies like{" "}
        <span className="text-blue-400">AWS (EMR, S3, EC2, Lambda)</span>,{" "}
        <span className="text-blue-400">React, Node.js, Python, and Scala/Spark</span>.
        My focus lies in building efficient ML-powered products that are production-ready.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-6">
        Some of my notable projects include a{" "}
        <span className="text-blue-400">Distributed RAG Pipeline on AWS EMR</span> for semantic document retrieval,
        an <span className="text-blue-400">AI Summarization Tool</span> for text analytics, and an{" "}
        <span className="text-blue-400">Admission Prediction Web App</span> using React and Flask.
      </p>


      {/* Quick Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-center">
        <div className="p-6 rounded-xl border border-neutral-600 bg-neutral-900/30 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">💻 Role</h3>
          <p className="text-neutral-300">Software Developer & ML Engineer</p>
        </div>
        <div className="p-6 rounded-xl border border-neutral-600 bg-neutral-900/30 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">⚙️ Skills</h3>
          <p className="text-neutral-300">
            Python • Scala • React • AWS • Spark • Docker • Kubernetes
          </p>
        </div>
        <div className="p-6 rounded-xl border border-neutral-600 bg-neutral-900/30 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">📍 Location</h3>
          <p className="text-neutral-300">Chicago, IL</p>
        </div>
      </div>
          <a
            href="/Resume_Ansh Shah.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2 border border-neutral-700 rounded-xl glow-hover"
          >
            📄 Download Résumé
          </a>
        </motion.div>
      </div>
      </FadeInSection>
    </section>
  );
}
