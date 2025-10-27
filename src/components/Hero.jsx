import { motion } from "framer-motion";
import { Crown, Star, ShoppingBag, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

const reviews = [
  { source: "The Daily Feast", quote: "A royal decree of deliciousness." },
  { source: "Gastro Guild", quote: "Empanadas worthy of a coronation." },
  { source: "Midnight Munch", quote: "All hail the golden crust." },
  { source: "Chew & Tell", quote: "The crown chooses the hungry." },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Immersive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle dark vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.75)_100%)]" />

      {/* Golden sparkle particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <Sparkle key={i} index={i} />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-yellow-300"
        >
          <Crown className="h-4 w-4" />
          CTK Empanadas
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl"
        >
          Bow Down To The King Of Flavor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          Hunger is the enemy. CTK is the cure. Surrender to the golden crust and
          rise a champion of taste.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(234,179,8,0.8)] transition hover:scale-[1.02] hover:shadow-[0_14px_40px_-12px_rgba(234,179,8,0.9)] focus:outline-none focus:ring-2 focus:ring-yellow-300/70"
          >
            <ShoppingBag className="h-4 w-4" /> Order Now
          </a>
          <a
            href="#story"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Meet The Legends
          </a>
        </motion.div>

        {/* Reviews marquee */}
        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 opacity-90 [--duration:25s]">
            {reviews.concat(reviews).map((r, idx) => (
              <div key={idx} className="flex items-center gap-3 text-yellow-200/90">
                <Star className="h-4 w-4 fill-yellow-400/90 text-yellow-300" />
                <p className="whitespace-nowrap text-sm">
                  <span className="font-semibold text-yellow-300">{r.source}</span>
                  : {r.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* subtle gradient overlay to enhance contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}

function Sparkle({ index }) {
  const delay = (index % 6) * 0.6;
  const size = 6 + ((index * 7) % 10);
  const top = `${(index * 13) % 100}%`;
  const left = `${(index * 23) % 100}%`;
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0, 1, 0], scale: [0.7, 1.2, 0.7] }}
      transition={{ duration: 3.2, repeat: Infinity, delay, ease: "easeInOut" }}
      className="absolute text-yellow-300/80"
      style={{ top, left }}
    >
      <Sparkles style={{ width: size, height: size }} />
    </motion.span>
  );
}
