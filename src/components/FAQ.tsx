"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Are invisible aligners painful?",
      answer: "Aligners are generally much more comfortable than traditional metal braces. You may feel slight pressure for the first day of a new set, which indicates the treatment is working correctly."
    },
    {
      question: "How long does a dental implant procedure take?",
      answer: "The surgical placement usually takes 1-2 hours. Healing time varies, but typically a crown is placed 3-6 months after the implant has successfully integrated with the bone."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we prioritize dental emergencies such as severe pain, knocked-out teeth, or broken restorations. Please call us immediately if you require urgent care."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl text-center mb-16 font-bold text-[var(--color-primary)]">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-[var(--color-borders)] rounded-2xl overflow-hidden bg-[var(--color-background)]"
            >
              <button
                onClick={() => toggleOpen(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 transition-colors focus:outline-none"
              >
                <span className="font-bold text-lg text-[var(--color-primary)]">{faq.question}</span>
                <ChevronDown
                  className={`size-5 text-[var(--color-primary)] transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-[var(--color-text)]/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
