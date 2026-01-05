import RelatedNews from "./RelatedNews";

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  twitter: string;
  facebook: string;
  instagram: string;
  substack?: string;
  medium?: string;
}

interface NewsData {
  title: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  author:Author;
}

interface Props {
  data: NewsData[];
}

export default function RelatedNewsSection({ data }: Props) {
  return (
    <section className="mt-8 ">
      {/* Sub Heading */}
      <h2 className="mb-3 text-2xl font-semibold uppercase tracking-wide">
        Related News
      </h2>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-6">
        {data.slice(0, 4).map((item) => (
          <RelatedNews key={item.slug} data={item} />
        ))}
      </div>
    </section>
  );
}
