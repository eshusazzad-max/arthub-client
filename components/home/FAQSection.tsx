"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I purchase an artwork?",
      answer:
        "Click on View Details, explore the artwork information, and complete your purchase securely.",
    },
    {
      question: "Are payments secure?",
      answer:
        "Yes, ArtHub ensures secure and encrypted payment methods for all transactions.",
    },
    {
      question: "Can I download digital artworks instantly?",
      answer:
        "Yes, once your purchase is complete, digital artworks are available for instant download.",
    },
    {
      question: "How can I become an artist on ArtHub?",
      answer:
        "Simply create an account and apply as an artist to start showcasing your collections.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Refunds are available based on our policies and specific purchase conditions.",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-[150px] rounded-full"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></div>
           <motion.span
            animate={{
             opacity:[0.5,1,0.5]
            }}
            transition={{
              duration:2,
              repeat:Infinity
            }}
             className="text-violet-300 uppercase tracking-[6px] text-sm"
           >
             FAQ
           </motion.span>

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>

          <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
               transition={{
                duration: 3,
                repeat: Infinity,
              }}
                className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[180px] bg-violet-500/15 blur-[180px] rounded-full"
            />
           
            <motion.div
               animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.05, 0.2],
               }}
                transition={{
                 duration: 4,
                 repeat: Infinity,
               }}
                 className="absolute left-1/2 top-20 -translate-x-1/2 w-[600px] h-[220px] bg-cyan-500/15 blur-[180px] rounded-full"
            />

          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4">
            Everything you need to know about buying and selling artworks.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <div className="text-violet-400">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}