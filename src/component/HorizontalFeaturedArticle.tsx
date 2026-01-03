import Image from "next/image";
import Link from "next/link";

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
  data: NewsData;
}

export default function HorizontalFeaturedArticle({ data }: Props) {
  return (
    <article className="w-full">

      {/* ================= MOBILE + TABLET ================= */}
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.title}
      >

        <div className="flex gap-4 lg:hidden">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-[18px] md:text-[22px] font-semibold tracking-tight leading-[1.1] hover:underline cursor-pointer">
              {data.title}
            </h2>

            <div className="mt-2 text-[12px] text-gray-600">
              <div>{data.date}</div>
              <div className="">
                By{" "}
                <span className="text-[#000080] font-medium hover:underline cursor-pointer">
                  David
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-[110px] md:w-[160px] h-[90px] md:h-[110px] flex-shrink-0">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Link>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.title}
      >
        <div className="hidden lg:grid grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative w-full h-66">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
                <span className="bg-[#000080] capitalize text-white text-xs font-bold px-8 py-1 mb-2 w-fit hidden md:inline-block">
                    {data.category}
                  </span>
            <h2 className="text-[24px] font-semibold tracking-tight leading-[1.1]">
              {data.title}
            </h2>
<p className=" line-clamp-2">{data.shortdescription}</p>
            <div className="mt-2 text-[12px] text-gray-600">
              <div>{data.date}</div>
              <div className="mt-1">
                By{" "}
                <span className="text-[#000080] font-medium hover:underline cursor-pointer">
                  David
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
