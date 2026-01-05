"use client"
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
    return (
        <>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">

  <header className="max-w-6xl mx-auto px-4 pb-10 text-center border-b mb-12 border-gray-200">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
       Contact
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-tight">
         Contact us for news tips, corrections, advertising inquiries, or general feedback.
        </p>
      </header>

                     <main className="max-w-6xl mx-auto">
                            {/* Main Contact Cards */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {/* General Contact */}
                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                                            📧
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 text-center mb-3">General Inquiries</h3>
                                    <p className="text-gray-600 text-center mb-4 text-sm">For general questions and information</p>
                                    <a
                                        href="mailto:info@prpromotionhub.com"
                                        className="block text-center text-blue-600 hover:text-blue-800 font-semibold text-sm break-all"
                                    >
                                        info@prpromotionhub.com
                                    </a>
                                </div>

                                {/* Editorial */}
                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl">
                                            ✍️
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Editorial Team</h3>
                                    <p className="text-gray-600 text-center mb-4 text-sm">News tips and editorial inquiries</p>
                                    <a
                                        href="mailto:editorial@prpromotionhub.com"
                                        className="block text-center text-blue-600 hover:text-blue-800 font-semibold text-sm break-all"
                                    >
                                        editorial@prpromotionhub.com
                                    </a>
                                </div>

                                {/* News Tips */}
                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                                            📰
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                                        News Tips
                                    </h3>
                                    <p className="text-gray-600 text-center mb-4 text-sm">
                                        Share story ideas, tips, or information with our editorial team
                                    </p>
                                    <a
                                        href="mailto:tips@prpromotionhub.com"
                                        className="block text-center text-blue-600 hover:text-blue-800 font-semibold text-sm break-all"
                                    >
                                        tips@prpromotionhub.com
                                    </a>
                                </div>


                                {/* Press */}
                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl">
                                            🎤
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Press & Media</h3>
                                    <p className="text-gray-600 text-center mb-4 text-sm">Media and press inquiries</p>
                                    <a
                                        href="mailto:press@prpromotionhub.com"
                                        className="block text-center text-blue-600 hover:text-blue-800 font-semibold text-sm break-all"
                                    >
                                        press@prpromotionhub.com
                                    </a>
                                </div>
                            </div>

                            {/* Information Cards */}
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 text-center border border-blue-200">
                                    <div className="text-5xl mb-4">⚡</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
                                    <p className="text-gray-700">We typically respond within 24 hours during business days</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100  rounded-lg shadow-lg p-8 text-center border border-green-200">
                                    <div className="text-5xl mb-4">🔒</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
                                    <p className="text-gray-700">Your information is protected and never shared with third parties</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100  rounded-lg shadow-lg p-8 text-center border border-purple-200">
                                    <div className="text-5xl mb-4">🌍</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
                                    <p className="text-gray-700">We serve readers and partners worldwide from our headquarters</p>
                                </div>
                            </div>

                                         <footer className="bg-gray-50 border-t border-gray-200 py-5 md:py-10 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
  Want to Know More About Our Editorial Standards?
</h2>
<p className="text-gray-600 mb-8 max-w-lg mx-auto">
  If you have questions about our editorial policies, ethics, or reporting practices, our team is happy to provide clarification.
</p>



          <Link 
            href="/contact" 
            className="px-10 py-4 bg-[#041f4a] text-white rounded-full font-bold hover:shadow-lg hover:bg-blue-900 transition-all inline-block"
          >
           Editorial Inquiries

          </Link>
        </div>
      </footer>
                            </main>
                        </div>
            </div>
        </>
    );
}