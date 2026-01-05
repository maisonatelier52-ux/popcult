"use client";
import Head from "next/head";
import Link from "next/link";
import { HelpCircle, MessageSquare, ShieldCheck, Globe, Mail, ChevronRight } from "lucide-react";

export default function FAQ() {
    const categories = [
        {
            title: "About the Platform",
            icon: <Globe className="text-blue-600" size={24} />,
            questions: [
                {
                    q: "What is PRPROMOTIONHUB?",
                    a: "PRPROMOTIONHUB is a digital news platform providing coverage across PR, world news, U.S. affairs, marketing, finance, technology, and entertainment."
                },
                {
                    q: "Is PRPROMOTIONHUB independent?",
                    a: "Yes. Our editorial decisions are made independently and are not influenced by advertisers, sponsors, or external organizations."
                }
            ]
        },
        {
            title: "Editorial & Content",
            icon: <ShieldCheck className="text-blue-600" size={24} />,
            questions: [
                {
                    q: "How often is content updated?",
                    a: "Content is updated regularly throughout the day. Breaking news and developing stories are published as information becomes available."
                },
                {
                    q: "Do you correct errors in articles?",
                    a: "Yes. Accuracy is a priority. If an error is identified, we review it promptly and issue corrections transparently."
                }
            ]
        },
        {
            title: "Submissions & Tips",
            icon: <MessageSquare className="text-blue-600" size={24} />,
            questions: [
                {
                    q: "How can I submit a news tip?",
                    a: "Readers can submit news tips or story ideas by emailing tips@prpromotionhub.com. All submissions are reviewed by our team."
                },
                {
                    q: "Can I republish your content?",
                    a: "Content may not be redistributed without prior written permission. Please refer to our Terms & Conditions for details."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <Head>
                    <title>FAQ | PRPROMOTIONHUB</title>
                </Head>

                {/* Simple Header */}
                <header className="max-w-6xl mx-auto px-4 pb-5 text-center border-b border-gray-200">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        Faq
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-tight">
                        Find answers to commonly asked questions about our content, policies, and services.

                    </p>
                </header>

                <main className="max-w-6xl mx-auto mt-5 md:mt-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="space-y-6">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                                    {cat.icon}
                                    <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
                                </div>

                                {/* Questions */}
                                <div className="space-y-8">
                                    {cat.questions.map((item, qIdx) => (
                                        <div key={qIdx} className="group">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 flex gap-2 group-hover:text-blue-700 transition-colors">
                                                <span className="text-blue-200">Q.</span>
                                                {item.q}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed pl-7 border-l-2 border-transparent group-hover:border-blue-100 transition-all">
                                                {item.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Support Section */}
                    <section className="mt-5 md:mt-10 bg-gray-50 rounded-3xl p-4 md:p-7 border border-gray-100">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-6">
                                <HelpCircle className="text-[#041f4a]" size={32} />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Can't find the answer you're looking for? Our editorial and support teams are
                                ready to help you with any specific inquiries.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className=" px-8 py-3 bg-[#041f4a] text-white rounded-full font-bold hover:bg-blue-800 transition-all shadow-md flex items-center justify-center gap-2"
                                >
                                    <Mail size={18} /> Contact
                                </Link>
                                <Link
                                    href="/about"
                                    className=" px-8 py-3 bg-white text-gray-700 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                                >
                                    Learn More About Us <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}