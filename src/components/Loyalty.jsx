import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const tiers = [
  {
    name: "Recruit",
    threshold: 0,
    perks: ["Earn 1x points", "Birthday treat"],
  },
  {
    name: "Squire",
    threshold: 150,
    perks: ["Earn 1.25x points", "Early access drops"],
  },
  {
    name: "Knight",
    threshold: 400,
    perks: ["Earn 1.5x points", "Secret spicy menu"],
  },
  {
    name: "Emperor",
    threshold: 900,
    perks: ["Earn 2x points", "Crown tasting invite"],
  },
];

export default function Loyalty() {
  return (
    <section id="loyalty" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <Trophy className="h-6 w-6 text-yellow-300" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Knights of the Golden Crust
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-red-600/25 bg-gradient-to-b from-[#2c0c0f] via-[#17080a] to-[#0d0406] p-6 text-white shadow-[0_10px_30px_-10px_rgba(239,68,68,0.25)]"
            >
              <div className="text-sm text-yellow-300/90">{t.name}</div>
              <div className="mt-1 text-3xl font-extrabold text-yellow-200">
                {t.threshold}
                <span className="ml-1 text-base font-medium text-yellow-300">pts</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {t.perks.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 py-2 font-semibold text-black shadow hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-300/70">
                Enlist Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trophy case */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/85"
        >
          Rack up points with every bite. Unlock badges, secret flavors, and eternal glory.
        </motion.div>
      </div>
    </section>
  );
}
