import Image from "next/image";

type HeroArticleProps = {
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
};

export default function SecondArticle({
  image,
  category,
  title,
  author,
  date,
}: HeroArticleProps) {
  return (
    <article className="w-full border-b border-black pb-8">
      {/* Image */}
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-8">
        {/* Category */}
        <span className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-2 uppercase tracking-wide">
          {category}
        </span>

        {/* Title */}
        <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          {title}
        </h1>

        {/* Meta */}
        <div className="mt-6 text-sm text-gray-600">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>
            By{" "}
            <span className="font-semibold text-black cursor-pointer hover:underline">
              {author}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
