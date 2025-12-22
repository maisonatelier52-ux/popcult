import { useRef } from "react";

interface ContentSection {
  id: string;
  title: string;
  content: string;
}

interface EditorialProps {
  intro: string;
  quote?: string;
  quoteAuthor?: string;
  sections: ContentSection[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function ArticleConten({
  intro,
  quote,
  quoteAuthor,
  sections,
  imageSrc,
  imageAlt = "Editorial Image",
}: EditorialProps) {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Intro + Image */}
      <div className="flex flex-col md:flex-row gap-6">
        {imageSrc && (
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-lg shadow"
            />
          </div>
        )}
        <p className="text-base sm:text-lg leading-relaxed">{intro}</p>
      </div>

      {/* Contents Box */}
      <div className="border rounded-lg p-4 w-full max-w-xs bg-white shadow-md">
        <div className="font-semibold text-lg flex items-center justify-between cursor-pointer">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Contents
          </span>
        </div>
        <ul className="mt-2 space-y-1 text-sm">
          {sections.map((sec, idx) => (
            <li
              key={sec.id}
              className="flex items-center gap-2 cursor-pointer hover:text-red-600"
              onClick={() => scrollToSection(sec.id)}
            >
              <span className="font-bold">{idx + 1}</span>
              <span>{sec.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((sec) => (
          <div
            key={sec.id}
            ref={(el) => (sectionRefs.current[sec.id] = el)}
            id={sec.id}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-serif font-bold">{sec.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed">{sec.content}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      {quote && (
        <div className="text-center py-6">
          <p className="text-red-600 text-3xl sm:text-4xl font-bold">“</p>
          <p className="text-lg sm:text-2xl font-semibold">{quote}</p>
          {quoteAuthor && (
            <p className="text-gray-500 mt-2 italic">— {quoteAuthor}</p>
          )}
        </div>
      )}
    </div>
  );
}
