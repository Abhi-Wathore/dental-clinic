"use client";

import Image from "next/image";
import { ScanLine, ShieldCheck, Activity, Smile } from "lucide-react";
import { motion } from "framer-motion";

export const ClinicHighlights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl mb-4 font-bold text-[var(--color-primary)]">Uncompromising Excellence</h2>
          <p className="text-[var(--color-text)]/70 max-w-2xl mx-auto">
            We set the gold standard for dental care in the region with our state-of-the-art facilities.
          </p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px]"
        >
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-[var(--color-primary)] text-white p-10 flex flex-col justify-end min-h-[300px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf9XmQwjwJCMuDgxIngrUsK7qj7ehlxZX2_pa91xg_NO6wzAdiykXwNeIg6wv24-s30OgZHmGyMGwusRbjBN3TKvHECeYGxZrktlFVlYQBv1hZaZom8AvTjlXB2Jg01Wuol6ZIPa5130n88qjIV0-aUO9l1Q_bEylqR1iUN8exOkKbPDRRHXBsY9HjftHbpMO_7ViwDzkbj4p66UXuz6ldwex73gpMyqg_jUENyj_IEKOnttZ2kGoZ"
              alt="Digital Dentistry"
              fill
              className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative z-10">
              <ScanLine className="text-4xl mb-4 size-10 text-[var(--color-accent)]" />
              <h3 className="text-2xl font-bold mb-2">Digital Dentistry</h3>
              <p className="text-white/80">
                We use high-resolution intraoral scanners for 100% accurate 3D mapping of your teeth, eliminating messy molds.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-[var(--color-secondary)] text-white p-6 flex flex-col gap-2 hover-lift min-h-[200px]">
            <ShieldCheck className="text-[var(--color-accent)] text-3xl size-8" />
            <h3 className="text-lg font-bold">Class-B Sterilization</h3>
            <p className="text-sm text-white/80">World-class hygiene protocols for patient safety.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-white border border-[var(--color-borders)] p-6 flex flex-col gap-2 hover-lift min-h-[200px]">
            <Activity className="text-red-500 text-3xl size-8" />
            <h3 className="text-lg font-bold text-[var(--color-primary)]">Emergency Care</h3>
            <p className="text-sm text-[var(--color-text)]/70">Priority walk-in support for acute dental pain.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-[var(--color-borders)] p-6 flex flex-col justify-center hover-lift min-h-[200px]">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-[var(--color-background)] rounded-2xl">
                <Smile className="text-3xl size-8 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-primary)]">Painless Treatment</h3>
                <p className="text-sm text-[var(--color-text)]/70">Minimally invasive techniques for your total comfort.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
