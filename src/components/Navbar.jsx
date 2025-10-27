import { useState } from "react";
import { Crown, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 p-4 text-sm font-semibold text-white sm:flex-row sm:items-center sm:gap-6 sm:p-0">
      <li>
        <a href="#menu" className="hover:text-yellow-300">All Menu</a>
      </li>
      <li>
        <a href="#story" className="hover:text-yellow-300">About Us</a>
      </li>
      <li>
        <a href="#loyalty" className="hover:text-yellow-300">Loyalty</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-yellow-300">Contact</a>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-yellow-500">
            <Crown className="h-4 w-4 text-black" />
          </span>
          <span className="text-sm font-extrabold tracking-widest">CTK EMPANADAS</span>
        </a>

        <nav className="hidden sm:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cart"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-500/20"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
          </a>
          <button
            className="sm:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-white/10 bg-black/80">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
