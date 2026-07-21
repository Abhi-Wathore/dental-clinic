"use client";

import { Calendar, ScanFace, FileSignature, Stethoscope, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

export const Process = () => {
  const steps = [
    { icon: <Calendar className="size-6" />, title: "Consultation", description: "Detailed discussion and clinical exam." },
    { icon: <ScanFace className="size-6" />, title: "Digital Scan", description: "Precise 3D mapping of your oral cavity." },
    { icon: <FileSignature className="size-6" />, title: "Planning", description: "Custom treatment design and simulation." },
    { icon: <Stethoscope className="size-6" />, title: "Procedure", description: "Comfort-focused execution of treatment." },
    { icon: <PartyPopper className="size-6" />, title: "Follow-up", description: "Post-care support for lasting results.", isPrimary: true },
  ];

  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl mb-16 font-bold text-[var(--color-primary)]">Your Journey to a Perfect Smile</h2>
        <div className="relative flex flex-col md:flex-row justify-between gap-12">
          {/* Horizontal line for desktop */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-[var(--color-background)] hidden md:block z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex-1 flex flex-col items-center"
            >
              <div
                className={`size-16 rounded-full flex items-center justify-center mb-6 shadow-lg border-2 ${
                  step.isPrimary 
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-accent)]" 
                    : "bg-white border-[var(--color-primary)] text-[var(--color-primary)]"
                }`}
              >
                {step.icon}
              </div>
              <h3 className="font-bold mb-2 text-[var(--color-primary)]">{step.title}</h3>
              <p className="text-sm text-[var(--color-text)]/70 max-w-[200px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
