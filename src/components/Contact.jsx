import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, MessageSquare, Send, Linkedin, Github } from "lucide-react";
import { data } from "../data/portfolioData";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_opm1t79", // replace with your EmailJS Service ID
        "template_pybqx5d", // replace with your Template ID
        form.current,
        "bSHiSVENJdIKGb4dn" // replace with your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
      {/* === Section Heading === */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-neutral-100">Contact</h2>
        <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
          Let’s connect! You can find me on these platforms or reach out directly below.
        </p>
      </div>

      {/* === Social Links === */}
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {/* LinkedIn */}
        <a
          href={data.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-600 text-neutral-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all"
        >
          <Linkedin size={22} />
          <span className="font-medium">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href={data.links.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-600 text-neutral-300 hover:border-pink-400 hover:text-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all"
        >
          <Github size={22} />
          <span className="font-medium">GitHub</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-600 text-neutral-300 hover:border-green-500 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] transition-all"
        >
          <Mail size={22} />
          <span className="font-medium">Email</span>
        </a>
      </div>
      {/* === Get in Touch Form === */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold text-blue-400">Get in Touch</h3>
        <p className="text-neutral-400 mt-2">
          Prefer to send a direct message? Fill out the form below — I’ll reply soon!
        </p>
      </div>


      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 backdrop-blur-md p-8 rounded-2xl border border-neutral-700 shadow-lg space-y-6"
      >
        {/* --- Name --- */}
        <div>
          <label className="block text-neutral-400 mb-2 flex items-center gap-2">
            <User size={16} /> Name
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="Your full name"
            required
            className="w-full p-3 rounded-lg bg-neutral-950/80 border border-neutral-600 text-neutral-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

        {/* --- Email --- */}
        <div>
          <label className="block text-neutral-400 mb-2 flex items-center gap-2">
            <Mail size={16} /> Email
          </label>
          <input
            type="email"
            name="from_email"
            placeholder="your.email@example.com"
            required
            className="w-full p-3 rounded-lg bg-neutral-950/80 border border-neutral-600 text-neutral-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

        {/* --- Message --- */}
        <div>
          <label className="block text-neutral-400 mb-2 flex items-center gap-2">
            <MessageSquare size={16} /> Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project, ideas, or just say hello..."
            required
            className="w-full p-3 rounded-lg bg-neutral-950/80 border border-neutral-600 text-neutral-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
          />
        </div>

        {/* --- Submit Button --- */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          <Send size={18} /> Send Message
        </button>

        {/* --- Status Message --- */}
        {status && (
          <p className="text-center mt-3 text-neutral-400 text-sm">{status}</p>
        )}
      </form>
    </section>
  );
}
