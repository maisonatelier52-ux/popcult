import React from 'react';
import Script from "next/script";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
    image: string;
}

const faqData: FAQItem[] = [
    {
        category: "Gadgets",
        question: "Why are Smart Rings the top-selling wearable in 2026?",
        answer:
            "Smart rings have overtaken watches due to 'Invisible Tech' trends. They offer 5-7 day battery life and medical-grade sleep tracking without the distraction of a screen.",
        image: "/images/why-are-smart-rings-the-top-selling-wearable-in-2026.webp",
    },
    {
        category: "Home Office",
        question: "What is the best audio gear for remote work?",
        answer:
            "AI-Powered Noise Cancelling Headphones are the #1 purchase. They use neural networks to isolate voices and filter out domestic background noise during calls.",
        image: "/images/what-is-the-best-audio-gear-for-remote-work.webp",
    },
    {
        category: "Kitchen Tech",
        question: "Why are Glass-Basket Air Fryers trending in the US?",
        answer:
            "They allow users to monitor cooking without opening the drawer, preventing heat loss and speeding up cook times by 15% compared to traditional models.",
        image: "/images/why-are-glass-basket-air-fryers-trending-in-the-us.webp",
    },
];

export default function FAQ() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
                "image": {
                    "@type": "ImageObject",
                    "url": `https://yourdomain.com${item.image}`,
                    "caption": item.question
                }
            }
        }))
    };


    return (
        <aside className="w-full max-w-sm pt-10 px-2">
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />


            <h2 className="text-[18px] font-bold text-gray-900 mb-6 leading-tight  border-b pb-2">
                Frequently Asked Questions
                <span className="text-blue-600 text-sm block font-medium">US Consumer Trends 2026</span>
            </h2>

            <div className="space-y-8">
                {faqData.map((item, index) => (
                    <div key={index} className="block">
                        <h3 className="text-[15px] font-bold  text-gray-800 leading-tight mb-2">
                            {item.question}
                        </h3>

                        {/* Float usage allows text wrapping */}
                        <div className="flow-root text-sm text-gray-600 leading-relaxed">
                            <img
                                src={item.image}
                                alt={item.question}
                                loading="lazy"
                                className="float-right ml-3 mb-1 w-28 h-24 rounded-lg object-cover border border-gray-100"
                            />
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}   