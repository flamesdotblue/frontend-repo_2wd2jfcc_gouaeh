import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuShowcase from "./components/MenuShowcase";
import Story from "./components/Story";
import Loyalty from "./components/Loyalty";

export default function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter','ui-sans-serif'] text-white">
      {/* Inline marquee keyframes and utilities */}
      <style>{`
        @keyframes marqueeMove { to { transform: translateX(-50%); } }
        .animate-marquee { animation: marqueeMove var(--duration,20s) linear infinite; width: 200%; }
        .perspective { perspective: 1000px; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

      <Navbar />
      <Hero />
      <MenuShowcase />
      <Story />
      <Loyalty />

      <footer id="contact" className="border-t border-white/10 bg-black/60 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} CTK Empanadas · All hail the golden crust
      </footer>
    </div>
  );
}
