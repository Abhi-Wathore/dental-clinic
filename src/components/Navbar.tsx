import React from "react";
import { Stethoscope } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-3 rounded-full shadow-lg">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center">
            <Stethoscope className="size-5" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-[var(--color-primary)]">
            Dr. Rathi's Align
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link href="#about" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            Services
          </Link>
          <Link href="#process" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            Process
          </Link>
          <Link href="#gallery" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            Gallery
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            FAQ
          </Link>
        </div>
        <Link
          href="#book"
          className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};
