import React, { useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { faqItems } from '@/data/faq';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper
      id="faq"
      badge="Knowledge Base"
      subtitle="Frequently Asked Questions"
      title="Common Enquiries & Career Facts"
      description="Clear, fact-checked answers detailing Lewis Hamilton’s world championships, historical milestones, his move to Scuderia Ferrari, and off-track endeavours."
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl bg-[#111114] border transition-all duration-200 overflow-hidden shadow-md ${
                isOpen ? 'border-rosso/50 shadow-lg shadow-rosso/5' : 'border-white/10'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none focus:ring-2 focus:ring-rosso/50"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#18181C] flex items-center justify-center font-telemetry text-xs text-rosso font-bold shrink-0 border border-white/5">
                    {index + 1}
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                    {item.question}
                  </span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-rosso' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-white/10 text-sm text-zinc-300 leading-relaxed font-sans">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
