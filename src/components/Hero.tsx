"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-white/40 z-0"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-xs font-bold tracking-wider uppercase w-fit">
            <CheckCircle className="size-4" />
            Premium Dental Care Akot
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-gradient font-bold">
            Healthy Smiles.<br />Confident Lives.
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text)]/80 max-w-lg leading-relaxed">
            Experience world-class dental care in Akot. Where cutting-edge technology meets luxury comfort for your peace of mind.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#book"
              className="flex items-center justify-center bg-[var(--color-primary)] text-white h-14 px-10 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book Appointment
            </Link>
            <a
              href="https://wa.me/910000000000"
              className="flex items-center justify-center glass-card h-14 px-10 rounded-xl font-bold text-lg hover:bg-white/50 transition-all text-[var(--color-primary)]"
            >
              WhatsApp Us
            </a>
          </div>
          
          <div className="flex items-center gap-6 mt-4">
            <div className="glass-card p-4 rounded-2xl flex items-center gap-4 shadow-sm border-white/50">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDidFDbpM_Oj-ARohTBvf58FsDL9Yw7uUNRBtmzWQ1vFKVTpuf-A_d6y_-0lQNPc_gR_WUTH11l3EQrVhLs0yb8KbdZi2dFKPWLHVs2v6aQK_obW_8vcw8DZuWxmZc03z9kD3x7wuqDsgysywMWMDT1M03H5amppvSK_yTwbFor1JW1SBalEHHmwLzo5P9XYPO2va8t_12DgQZS_MoaXtg4y1qw0LXN1rN-EWuWNe8rpgNx2Hl7zSPd" alt="Patient" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden relative">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBckkcpoxvt5KmuzWWuVPeAdMMNV4or7_i4tXJCv1W8rXHLa29RJOMn3s4kWZoDUGnKQYW7_GsEWqviKvk2t45QYbPArz9iQce5km4r592isHsLG6jSNCYfrpTfbLDM9Ct4fVvus2VfyTNZnoFHqPcAryI60xGt8sK6qCsg3TmVAptNuzR4x8HsafNfBjrJq_TfkFYnqBExxBTsXbZoiXsXwFvjJ0rP-A9ia_Ts6Nt5oMZvyXqjMCi8" alt="Patient" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400 overflow-hidden relative">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPgsG7-wZebfwsErohAGGWJCh26CSt74VyQc2JtcnTpVKbwyWzW05cD2S9F-9zOxa-9sohinFp3c3rZcbtGfEUBMMjMumM3k-W67lNAzPzP48ICxT73tZ-MQytSlg09snLOqGASRA16ZMwBAMqwNOHBII8pnbQK1WpJhY9MqCXkpt9FqXiQFd6NNHEnE7-mZjDubI0rqy_UqQVqD2hu_k6GOEh1FXUwOSdbie9_jX0An2n8eDrPfre" alt="Patient" fill className="object-cover" />
                </div>
              </div>
              <div>
                <div className="flex items-center text-amber-500 mb-0.5 gap-0.5">
                  <Star className="size-4 fill-amber-500" />
                  <Star className="size-4 fill-amber-500" />
                  <Star className="size-4 fill-amber-500" />
                  <Star className="size-4 fill-amber-500" />
                  <Star className="size-4 fill-amber-500" />
                </div>
                <p className="text-sm font-bold text-[var(--color-primary)]">5.0 | 19+ Happy Patients</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="animate-float relative z-10 w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Ovmon53JQrHsVgr2RqahDelPCpJQA9bdiHLmdncXYZC5zTWGM2sJu2xcy6ykKq5u7xi4dOfbpytS2NZQFNl1Hx00V1n2I6APRqWfbDjEZMNSXfpkOzlnPUv7B9E91MPzNGsxIwLDqpAahioaLuYwHppS8bNAh8V0CC_zeNVoyR_u7uE6X9qtux05lX3NtVNd6PFx9yrV4wz4JYyvVJY7QKiHqIadWX6OY_oPThMoiBa8C0c7M62n"
              alt="Luxury dental clinic interior"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--color-accent)]/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};
