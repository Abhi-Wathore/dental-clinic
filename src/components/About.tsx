"use client";

import Image from "next/image";
import { Stethoscope, Microscope, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd5Wa3I2kMGToMi1xXBvM7BYHE83SynEq58hZoC-56In-ZlWqt1RvsAedZHosP6E_j4xkbiXUKieAe7xSyuan-2vA4qFRn3ARz9H9NEJkDDuYAkMb5Bvnz8xtkYb7J9zBFA1SZ5ZkBV9eDSy38r0dBzLu2JcCfPXc8EyGMPdsrsRqx_oiErPbIxggilRSOuzsVTzZUIv04FA5HLWkGXaCcLyHmBxA_gKKGQenN8d5JYt7f2k55EK4p"
                alt="Dr. Pranit Rathi"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-xl max-w-[240px]">
              <h4 className="font-bold text-xl mb-1 text-[var(--color-primary)]">Dr. Pranit Rathi</h4>
              <p className="text-sm text-[var(--color-text)]/80">Lead Dental Surgeon & Orthodontic Specialist</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h2 className="font-display text-4xl text-[var(--color-primary)] font-bold">Compassionate Care with Modern Expertise</h2>
            <p className="text-lg text-[var(--color-text)]/80 leading-relaxed">
              At Dr. Rathi's Align, we believe a smile is the shortest distance between two people. Our mission is to provide the Akot community with dental services that prioritize comfort, transparency, and lasting results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[var(--color-background)] border border-[var(--color-borders)] hover-lift">
                <Stethoscope className="text-[var(--color-accent)] mb-3 size-8" />
                <h3 className="font-bold text-[var(--color-primary)] mb-1">10+ Years</h3>
                <p className="text-xs text-[var(--color-text)]/70">Clinical Experience</p>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--color-background)] border border-[var(--color-borders)] hover-lift">
                <Microscope className="text-[var(--color-accent)] mb-3 size-8" />
                <h3 className="font-bold text-[var(--color-primary)] mb-1">Modern Tech</h3>
                <p className="text-xs text-[var(--color-text)]/70">Digital Precision</p>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--color-background)] border border-[var(--color-borders)] hover-lift">
                <Heart className="text-[var(--color-accent)] mb-3 size-8" />
                <h3 className="font-bold text-[var(--color-primary)] mb-1">Gentle Care</h3>
                <p className="text-xs text-[var(--color-text)]/70">Anxiety-Free</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
