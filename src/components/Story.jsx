import { motion } from "framer-motion";
import { Crown, Shield, Mail } from "lucide-react";

const steps = [
  {
    year: "Year I",
    title: "Forged by Culinary Knights",
    text: "In a humble kitchen, steel met spice. The first CTK empanada was sworn into glory.",
  },
  {
    year: "Year II",
    title: "The Crown Rises",
    text: "Word spread across the realm—golden crust, noble fillings, lines at dawn.",
  },
  {
    year: "Year III",
    title: "A Royal Decree of Hunger",
    text: "We vowed: every bite shall feel like victory. The people cheered. The ovens roared.",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative bg-gradient-to-b from-black to-[#140a0e] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <Crown className="h-6 w-6 text-yellow-300" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            The Origin of the Crown
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-yellow-500/60 to-transparent sm:block" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-yellow-300">
                  {s.year}
                </div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-white/80">{s.text}</p>
                <Shield className="absolute -left-4 top-6 hidden h-8 w-8 text-yellow-400 sm:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-[#2a1a1f] to-[#1b1013] p-6 text-center"
        >
          <div className="mx-auto max-w-xl">
            <h4 className="text-lg font-bold text-white">Swear Fealty For Flavor</h4>
            <p className="mt-1 text-white/80">
              Join the royal newsletter and unlock secret spicy proclamations.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex flex-col items-center gap-3 sm:flex-row"
            >
              <div className="relative w-full sm:flex-1">
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="you@thekingdom.com"
                  className="w-full rounded-full border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-white/40 outline-none ring-yellow-300/40 transition focus:border-yellow-400/50 focus:ring-2"
                />
                <Mail className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 px-6 py-3 font-semibold text-black shadow hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-300/70 sm:w-auto"
              >
                Swear Fealty
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
