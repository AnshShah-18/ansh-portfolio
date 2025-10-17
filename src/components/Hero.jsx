import { ReactTyped } from "react-typed";
import { MapPin, ArrowRight } from "lucide-react";
import { data } from "../data/portfolioData";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="py-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* --- Left text side --- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="md:w-1/2 space-y-6 text-center md:text-left"
      >
        <p className="inline-flex items-center justify-center md:justify-start text-sm text-neutral-400 mb-3">
          <MapPin className="mr-2" size={16} /> {data.location}
        </p>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I’m <span className="text-blue-300">Ansh Shah</span>,
          <br />
          <ReactTyped
            strings={[
              "a Machine Learning Engineer.",
              "a Software Developer.",
              "a Cloud Developer.",
            ]}
            typeSpeed={60}
            backSpeed={35}
            backDelay={1800}
            loop
            className="text-blue-300"
          />
        </h1>

        

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-5 py-2 glow-hover"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-5 py-2 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]"
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* --- Right profile image (glow stays same) --- */}
      {/* keep your glowing photo section here */}
      {/* --- Right profile image side --- */}
      <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.3, duration: 1 }}
  className="relative md:w-1/2 flex justify-center items-center"
>
  {/* --- Smooth gradient backdrop --- */}
  <div
    className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full
               bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.35)_0%,_rgba(10,10,20,0)_60%)]
               blur-3xl opacity-70"
  ></div>

  {/* --- Subtle soft halo --- */}
  <div
    className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full
               bg-[conic-gradient(from_0deg,_rgba(37,99,235,0.05),_rgba(37,99,235,0.2),_rgba(59,130,246,0.05))]
               animate-spin-slow blur-2xl opacity-60"
  ></div>

  {/* --- Profile photo --- */}
  <img
    src={profilePic}
    alt="Ansh Shah"
    className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full
               border-[3px] border-neutral-800 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
  />
</motion.div>


    </section>
  );
}
