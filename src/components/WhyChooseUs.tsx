"use client";

import Image from "next/image";
import { Shield, Zap, SmilePlus, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[var(--color-primary)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <h2 className="font-display text-4xl leading-tight font-bold">Setting New Standards in Patient Satisfaction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Shield className="text-[var(--color-accent)] size-6" />
                </div>
                <h4 className="font-bold text-xl">5 Star Rated</h4>
                <p className="text-white/70 text-sm">Highly recommended by patients in Akot for consistent results.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Zap className="text-[var(--color-accent)] size-6" />
                </div>
                <h4 className="font-bold text-xl">Latest Tech</h4>
                <p className="text-white/70 text-sm">Using the latest iTero scanners and digital imaging.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <SmilePlus className="text-[var(--color-accent)] size-6" />
                </div>
                <h4 className="font-bold text-xl">Pain Free</h4>
                <p className="text-white/70 text-sm">Relaxing sedation and gentle techniques for any procedure.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <FileText className="text-[var(--color-accent)] size-6" />
                </div>
                <h4 className="font-bold text-xl">Transparent Pricing</h4>
                <p className="text-white/70 text-sm">No hidden costs. Detailed treatment plan provided upfront.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Og5mG8SllKbNWY3lwr3ArYoTh1EAEcf3CXJhRnW1oMH-OrsgVxpmnw2TOvjObAN5e23bB1h5qIDAMrhbCPvol8BaD8PK7BTob8AgIeOXFL4yLTT6FJACnm04cYRUJYsD2CFHkWn-XIr7wObpfzvpCf0sp-wQMVb8NyegKW8m0AznHoJpRZMIlYJZgTaNvek-nZniOw_dNw5Tw6LhJ8PXQsQ7GBa8oq_qzR2EB5NSZOAWM4WjixIs"
              alt="Dental treatment station"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <p className="text-4xl font-bold font-display text-white">100%</p>
              <p className="text-white/80 mt-1">Sterilization Guarantee</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
