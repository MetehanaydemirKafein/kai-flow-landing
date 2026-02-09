"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What is KAI Flow?",
        answer:
            "KAI Flow is an intelligent AI workflow automation platform that enables you to build, deploy, and manage AI agents with powerful automation capabilities. It seamlessly integrates with various APIs and works autonomously to solve complex operational tasks.",
    },
    {
        question: "How does KAI Flow integrate with other tools?",
        answer:
            "KAI Flow supports integration with a wide range of tools and platforms including OpenAI, Claude, Gemini, Replit, and many more. You can easily connect your existing tools through our API or use our pre-built integrations.",
    },
    {
        question: "Do I need coding knowledge to use KAI Flow?",
        answer:
            "No! KAI Flow features a low-code visual builder that allows you to create complex AI workflows using an intuitive drag-and-drop interface. However, if you're a developer, you can also leverage our powerful API for advanced customizations.",
    },
    {
        question: "What is RAG (Retrieval Augmented Generation)?",
        answer:
            "RAG is a technique that enhances AI responses by connecting your AI agents with external knowledge sources. This allows your AI to provide more accurate and contextual responses based on your specific data and documents.",
    },
    {
        question: "Is KAI Flow suitable for enterprises?",
        answer:
            "Absolutely! KAI Flow is designed to scale from individual developers to large enterprises. It offers robust security features, team collaboration tools, and enterprise-grade support options.",
    },
    {
        question: "How can I contribute to KAI Flow?",
        answer:
            "KAI Flow is open source! You can contribute by visiting our GitHub repository, submitting pull requests, reporting issues, or joining our community on Discord to discuss features and improvements.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="min-h-screen py-16 md:py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900 flex items-center overflow-hidden scroll-mt-16">
            <div className="max-w-4xl w-full mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-400">
                        Everything you need to know about KAI Flow
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            layout
                            transition={{ layout: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] } }}
                            className="border border-white/10 rounded-xl bg-white/5 will-change-auto"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-semibold text-white pr-8">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                                >
                                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                </motion.div>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.4, 0.0, 0.2, 1],
                                            opacity: { duration: 0.25 }
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pt-2 pb-6 text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">Still have questions?</p>
                    <a
                        href="https://discord.gg/kaiflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                        Join Our Discord
                    </a>
                </div>
            </div>
        </section>
    );
}
