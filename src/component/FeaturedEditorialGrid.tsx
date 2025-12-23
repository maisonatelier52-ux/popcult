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
      <section className="border-b border-l border-r border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-black">
          {data.map((item) => (
            <article
              key={item.slug}
              className="flex gap-4 p-4"
            >
              <Link
                href={`/${item.category}/${item.slug}`}
                title={item.title}
                className="block w-full"
                style={{ color: "inherit" }}
              >
                {/* Image */}
                <div className="relative w-24 h-32 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <span className="inline-block bg-red-600 text-white text-[12px] font-bold px-2 py-1 w-fit">
                  {item.category}
                </span>

                <h3 className="font-serif text-[16px] font-semibold leading-tight line-clamp-3 hover:underline cursor-pointer">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
