import Image from 'next/image';
import Link from 'next/link';

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

export default function FeaturedEditorialGrid({ data }: Props) {
  return (
 <section className="border-l border-r border-b border-black">
  <div className="flex flex-wrap">
    {data.map((item, index) => (
      <article
        key={item.slug}
        className="
          relative flex p-2
          w-full md:w-1/2 lg:w-1/4
        "
      >
        <div className="flex gap-4 w-full">
          <div className="relative w-[110px] h-[140px] shrink-0">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </div>

          <div className="relative flex flex-col gap-2 overflow-hidden">
            <span className="absolute top-3 right-0 text-[60px] font-serif font-bold text-black opacity-[0.08] leading-none select-none">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 w-fit">
              {item.category}
            </span>

            <h3 className="relative z-10 font-serif text-base font-semibold leading-snug line-clamp-3">
              {item.title}
            </h3>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

  );
}
