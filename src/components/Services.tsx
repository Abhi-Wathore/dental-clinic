import React from "react";
import { ArrowRight, ChevronRight, Activity, Syringe, Sparkles, Droplet, Bone, Baby } from "lucide-react";
import Link from "next/link";

export const Services = () => {
  const services = [
    {
      title: "Invisible Aligners",
      description: "Straighten your teeth discreetly without metal wires. Comfortable, removable, and nearly invisible.",
      icon: <Activity className="size-6" />
    },
    {
      title: "Painless Root Canal",
      description: "Save your natural teeth with our precision root canal therapy, performed under local anesthesia for zero discomfort.",
      icon: <Syringe className="size-6" />
    },
    {
      title: "Smile Makeover",
      description: "A customized combination of veneers, crowns, and whitening to give you the smile of your dreams.",
      icon: <Sparkles className="size-6" />
    },
    {
      title: "Teeth Whitening",
      description: "Safe, professional-grade whitening that delivers dramatic results in just a single session.",
      icon: <Droplet className="size-6" />
    },
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking replacement for missing teeth with bio-compatible titanium implants.",
      icon: <Bone className="size-6" />
    },
    {
      title: "Pediatric Care",
      description: "Specialized, gentle dental care for children to ensure their permanent teeth develop correctly.",
      icon: <Baby className="size-6" />
    }
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl mb-4 font-bold text-[var(--color-primary)]">Complete Oral Care</h2>
            <p className="text-[var(--color-text)]/80">
              From routine checkups to complex aesthetic enhancements, we offer a full suite of services tailored to your unique needs.
            </p>
          </div>
          <Link href="#book" className="text-[var(--color-primary)] font-bold flex items-center gap-2 group hover:text-[var(--color-accent)] transition-colors">
            View Pricing Structure
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-[2rem] bg-white border border-[var(--color-borders)] hover:shadow-2xl transition-all duration-300 hover:border-[var(--color-primary)]/20 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[var(--color-background)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors text-[var(--color-primary)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)]">{service.title}</h3>
              <p className="text-[var(--color-text)]/70 mb-6 min-h-[80px]">
                {service.description}
              </p>
              <div className="h-px w-full bg-[var(--color-borders)] mb-6 group-hover:bg-[var(--color-primary)]/10 transition-colors"></div>
              <button className="flex items-center gap-2 font-bold text-sm text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                Learn More <ChevronRight className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
