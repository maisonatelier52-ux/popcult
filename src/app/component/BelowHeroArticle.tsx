import Image from "next/image";

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData[];
}

export default function BelowHeroArticle({data}:Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 border-t border-black pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <article key={item.slug}>
            {/* Image */}
            <div className="relative w-full aspect-[4/3] mb-5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl font-semibold leading-snug hover:underline cursor-pointer">
              {item.title}
            </h3>

            {/* Meta */}
            <div className="mt-4 text-sm text-gray-600">
              <div>{item.date}</div>
              <div className="mt-1">
                By{" "}
                <span className="text-red-600 font-medium hover:underline cursor-pointer">
                  David
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
