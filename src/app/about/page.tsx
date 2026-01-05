import { Mail } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>

                    <header className="max-w-6xl mx-auto px-4 pb-10 text-center border-b mb-12 border-gray-200">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                            About
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-tight">
                            A trusted source for accurate news, thoughtful analysis, and stories that matter.
                       </p>
                    </header>

                    {/* Mission & Vision */}
                    <main className="max-w-6xl mx-auto ">    

                 
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#041f4a] mb-4 flex items-center gap-3">
                                <span className="text-3xl">🎯</span>
                                Our Mission
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                To provide accurate, unbiased, and timely news coverage that empowers our readers with the knowledge they need to understand and engage with the world around them. We strive to maintain the highest standards of journalistic integrity while making news accessible to diverse audiences.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#041f4a] mb-4 flex items-center gap-3">
                                <span className="text-3xl">👁️</span>
                                Our Vision
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                To become the world's most trusted and innovative news platform, setting new standards for digital journalism through cutting-edge technology, ethical reporting, and unwavering commitment to truth. We envision a future where informed citizens drive positive global change.
                            </p>
                        </div>
                    </div>

                    {/* Core Values */}
                    <section className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            Our Core Values
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-[#041f4a] hover:bg-blue-50 transition-all duration-300">
                                <h4 className="text-xl font-bold text-gray-900 mb-3">✓ Integrity</h4>
                                <p className="text-gray-600">
                                    We uphold the highest ethical standards in all our reporting and business practices.
                                </p>
                            </div>
                            <div className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-[#041f4a] hover:bg-blue-50 transition-all duration-300">
                                <h4 className="text-xl font-bold text-gray-900 mb-3">✓ Accuracy</h4>
                                <p className="text-gray-600">
                                    We verify facts rigorously and correct errors promptly to maintain credibility.
                                </p>
                            </div>
                            <div className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-[#041f4a] hover:bg-blue-50 transition-all duration-300">
                                <h4 className="text-xl font-bold text-gray-900 mb-3">✓ Independence</h4>
                                <p className="text-gray-600">
                                    Our editorial decisions are free from commercial or political influence.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Coverage Section */}
                    <section className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            What We Cover
                        </h2>
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                            PRPROMOTIONHUB provides comprehensive coverage across multiple sectors, ensuring you stay informed about the topics that matter most to you.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">PR News</h4>
                                <p className="text-gray-600 text-sm">
                                    Latest public relations trends, campaigns, and industry insights.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">World News</h4>
                                <p className="text-gray-600 text-sm">
                                    Global events, international politics, and cross-border developments.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">U.S. News</h4>
                                <p className="text-gray-600 text-sm">
                                    Domestic politics, policy changes, and national affairs.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Marketing</h4>
                                <p className="text-gray-600 text-sm">
                                    Digital marketing trends, brand strategies, and consumer insights.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Finance</h4>
                                <p className="text-gray-600 text-sm">
                                    Market analysis, economic trends, and financial technology.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Entertainment</h4>
                                <p className="text-gray-600 text-sm">
                                    Celebrity news, and entertainment industry updates.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Technology</h4>
                                <p className="text-gray-600 text-sm">
                                    Tech innovations, startups, AI developments, and digital transformation.
                                </p>
                            </div>
                        </div>
                    </section>



                    {/* CTA Section */}
                     <footer className="bg-gray-50 border-t border-gray-200 py-5 md:py-10 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
  Want to Learn More About Us?
</h2>
<p className="text-gray-600 mb-8 max-w-lg mx-auto">
  Whether you have questions, feedback, or collaboration ideas, our team would love to hear from you.
</p>

          <Link 
            href="/contact" 
            className="px-10 py-4 bg-[#041f4a] text-white rounded-full font-bold hover:shadow-lg hover:bg-blue-900 transition-all inline-block"
          >
            Contact Us
          </Link>
        </div>
      </footer>
       </main>
                </div>
            </div>
        </>
    );
}