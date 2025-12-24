import Image from "next/image";
import BelowHeroArticle from "./BelowHeroArticle";

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

export default function HeroArticle({
data
}: Props) {
  return (
    <article className="w-full border-b border-black pb-8">
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={data[0].image}
          alt={data[0].title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center mt-8">
        <span className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-2 uppercase tracking-wide">
          {data[0].category}
        </span>
        <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          {data[0].title}
        </h1>
        <div className="mt-6 text-sm text-gray-600">
          <span>{data[0].date}</span>
          <span className="mx-2">•</span>
          <span>
            By{" "}
            <span className="font-semibold text-black cursor-pointer hover:underline">
              david
            </span>
          </span>
        </div>
      </div>
      <BelowHeroArticle data={[data[1],data[2],data[3]]}/>
    </article>
  );
}
