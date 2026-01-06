import Head from "next/head";

import { CheckCircle, ShieldCheck, Scale, AlertCircle, FileText } from "lucide-react";

export default function Editorial() {
  const sections = [
    { id: "mission", label: "Mission", icon: <FileText size={18} /> },
    { id: "accuracy", label: "Accuracy", icon: <CheckCircle size={18} /> },
    { id: "independence", label: "Independence", icon: <ShieldCheck size={18} /> },
    { id: "ethics", label: "Ethics", icon: <Scale size={18} /> },
    { id: "corrections", label: "Corrections", icon: <AlertCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <Head>
          <title>Editorial Policy | PRPROMOTIONHUB</title>
        </Head>

        {/* Simplified Header */}
        <header className="max-w-6xl mx-auto px-4 pb-5 text-center border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Editorial Policy
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-tight">
            Our editorial policy outlines the principles, standards, and ethics that guide our journalism.
          </p>
        </header>

        <main className="max-w-6xl mx-auto md:py-12 py-5">
          <div className="grid lg:grid-cols-[250px_1fr] md:gap-0 gap-10">

            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-10 space-y-4">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Contents</p>
                <nav className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#041f4a] p-2 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
            {/* Side Navigation */}


            {/* Content Area */}
            <div className="flex-1 space-y-5 md:space-y-16">

              {/* Mission Section */}
              <section id="mission">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="text-blue-600" size={24} />
                  Our Commitment
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    PRPROMOTIONHUB is dedicated to providing news that is accurate, fair, and independent.
                    In an era of rapid information, we prioritize the verification of facts above all else.
                  </p>
                  <p>
                    Our editorial team operates with full autonomy, ensuring that our reporting remains
                    unbiased and focused on the public interest.
                  </p>
                </div>
              </section>

              {/* Principles Grid */}
              <section id="accuracy" className="grid md:grid-cols-2 gap-5 md:gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-3">Accuracy & Verification</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every story undergoes a multi-step verification process. We rely on primary sources,
                    official data, and on-the-ground reporting to ensure that the information we
                    share is reliable.
                  </p>
                </div>
                <div id="independence">
                  <h3 className="text-xl font-bold mb-3">Editorial Independence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our newsroom is strictly separated from our commercial operations. Advertisers
                    and sponsors have no influence over the stories we cover or the perspective
                    we take.
                  </p>
                </div>
              </section>

              {/* Ethics List */}
              <section id="ethics" className="bg-gray-50 rounded-2xl gap-0 md:p-5 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Ethical Conduct</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <CheckCircle className="text-green-600 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Transparency</h4>
                      <p className="text-sm text-gray-600 mt-1">We identify sources whenever possible and disclose any potential conflicts of interest.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="text-green-600 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Fairness</h4>
                      <p className="text-sm text-gray-600 mt-1">We provide those criticized in our reporting an opportunity to respond before publication.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Correction Section */}
              <section id="corrections" className="border-t pt-5 md:pt-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red-700">
                  <AlertCircle size={24} />
                  Correction Policy
                </h2>
                <p className="text-gray-700 mb-6">
                  If we make a mistake, we correct it. Accuracy is a journey, and we are committed to
                  fixing errors transparently. Significant corrections are noted at the top of the
                  article to ensure readers are aware of the changes.
                </p>

              </section>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}