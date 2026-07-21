"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const AppointmentForm = () => {
  return (
    <section className="py-24 bg-[var(--color-background)]" id="book">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTGEmec7CkJbWVPwlwnmTkU3c6am54od33JtukJ3G8wYUsarMuU7uwUaWDR5gZJB1ukZVW2BZVUcgVB96q_O3uuy7Q32JCaSlT2912qU4wlWJpE_5qfTVgapduO_d6Hf5_h4ZnnASsNb9Yg1Sa42C-YhFI8WWzET7SZzZGS0e4ZSoBzyBazsX_L7980-yQGHOEdV8flcza6gWgsnokH_lMgvprZ4cJzrx0gpFDIp8EMhMK602t8ryZ"
              alt="Dental reception area"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-xl relative z-10">
            <h2 className="font-display text-4xl mb-6 font-bold text-[var(--color-primary)]">Book Your Visit</h2>
            <p className="text-[var(--color-text)]/70 mb-10">
              Take the first step towards a better smile. Our team will contact you within 2 business hours to confirm your time.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-[var(--color-primary)]">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/50 backdrop-blur-sm border border-[var(--color-borders)] rounded-xl p-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-[var(--color-primary)]">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-white/50 backdrop-blur-sm border border-[var(--color-borders)] rounded-xl p-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-[var(--color-primary)]">Requested Treatment</label>
                <select className="w-full bg-white/50 backdrop-blur-sm border border-[var(--color-borders)] rounded-xl p-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none text-[var(--color-text)]">
                  <option>Consultation</option>
                  <option>Invisible Aligners</option>
                  <option>Dental Implants</option>
                  <option>Teeth Whitening</option>
                  <option>Root Canal</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-[var(--color-primary)]">Preferred Date</label>
                <input
                  type="date"
                  className="w-full bg-white/50 backdrop-blur-sm border border-[var(--color-borders)] rounded-xl p-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none text-[var(--color-text)]"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-[var(--color-accent)] font-bold py-5 rounded-xl text-lg hover:shadow-xl transition-all active:scale-95 hover:bg-[var(--color-secondary)]"
              >
                Schedule Appointment
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
