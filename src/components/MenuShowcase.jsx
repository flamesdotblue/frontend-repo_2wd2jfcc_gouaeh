import { motion } from "framer-motion";

const items = [
  {
    name: "Imperial Beef",
    price: 5.5,
    heat: "Medium",
    ingredients: "Grass-fed beef, olives, golden raisins, royal spices",
    image:
      "https://images.unsplash.com/photo-1601050690597-9a2ba8c354d3?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Emperor's Chicken",
    price: 5.25,
    heat: "Mild",
    ingredients: "Roast chicken, corn, queso, herbs of the realm",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Dragonfire Veg",
    price: 4.95,
    heat: "Hot",
    ingredients: "Roasted peppers, sweet potato, chipotle, black beans",
    image:
      "https://images.unsplash.com/photo-1530543787849-128d94430c6b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Golden Cheese",
    price: 4.5,
    heat: "Mild",
    ingredients: "Triple cheese blend, herb butter, flake salt",
    image:
      "https://images.unsplash.com/photo-1601050690572-22fa7a1ee48a?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              The Royal Menu
            </h2>
            <p className="mt-2 text-white/70">
              Empanadas presented like collectible treasures.
            </p>
          </div>
          <a
            href="#"
            className="hidden rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-500/20 md:inline-block"
          >
            View Full Menu
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <Card key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* Combo deals banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-[#2a1a1f] to-[#1f1418] p-6 text-center text-yellow-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <p className="text-sm">
            Combo Deals: Any 3 for <span className="font-bold text-yellow-300">$14</span> · Any 6 for <span className="font-bold text-yellow-300">$26</span>
          </p>
          <motion.span
            animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
            className="mt-2 inline-block select-none text-yellow-300"
          >
            ✨ They sparkle with savings
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="group perspective"
    >
      <div className="relative h-80 w-full transform rounded-2xl border border-white/10 bg-white/5 shadow-xl transition [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img
            src={item.image}
            alt={item.name}
            className="h-44 w-full rounded-t-2xl object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-white">{item.name}</h3>
            <p className="mt-1 text-sm text-white/70">${item.price.toFixed(2)}</p>
            <div className="mt-4 inline-flex rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300">
              {item.heat} Heat
            </div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rotate-y-180 rounded-2xl bg-gradient-to-b from-[#2b1a1f] to-black p-4 [backface-visibility:hidden]">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
            Ingredients
          </h4>
          <p className="mt-2 text-sm text-white/80">{item.ingredients}</p>
          <div className="absolute bottom-3 left-4 right-4">
            <button className="w-full rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 py-2 text-sm font-bold text-black shadow hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-300/70">
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
