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
  data: NewsData;
}

export default function HorizontalFeaturedArticle({
  data,
}: Props) {


  return (
    <article className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            {data.title}
          </h2>

          {/* <p className="mt-4 text-gray-600 text-base leading-relaxed">
            {excerpt}
          </p> */}

          <div className="mt-6 text-sm text-gray-600">
            <div>{data.date}</div>
            <div className="mt-1">
              By{" "}
              <span className="text-red-600 font-medium hover:underline cursor-pointer">
             David
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
