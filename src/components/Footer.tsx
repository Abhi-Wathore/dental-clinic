import { Stethoscope, Globe, Share2, Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg flex items-center justify-center">
                <Stethoscope className="size-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">Dr. Rathi's Align</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              The leading dental clinic in Akot, specializing in aesthetic dentistry, implants, and orthodontic solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all">
                <Globe className="size-4" />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all">
                <Share2 className="size-4" />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all">
                <Phone className="size-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-display">Services</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Clear Aligners</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Root Canal Therapy</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Dental Implants</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Cosmetic Veneers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-display">Clinic Hours</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex justify-between"><span>Mon - Sat</span> <span>10am - 8pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>By Appointment</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-display">Contact & Location</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex gap-3"><MapPin className="size-4 shrink-0" /> Main Road, Akot, Maharashtra</li>
              <li className="flex gap-3"><Mail className="size-4 shrink-0" /> contact@drrathisalign.com</li>
              <li className="flex gap-3"><Phone className="size-4 shrink-0" /> +91 98765 43210</li>
            </ul>
            <a href="https://maps.google.com/?q=Akot" className="inline-block mt-6 text-sm font-bold underline underline-offset-4 hover:text-[var(--color-accent)] transition-colors">
              Get Directions
            </a>
          </div>
        </div>
        
        <div className="h-px w-full bg-white/10 my-16"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-xs">
          <p>© 2024 Dr. Rathi's Align Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
