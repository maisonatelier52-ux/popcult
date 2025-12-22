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

export default function LatestNewsList({data}:Props) {
  return (
    <aside className="w-full">
      {/* Heading */}
      <h2 className="text-xl font-serif font-bold border-b-4 border-black inline-block pb-2 mb-6">
        Latest News
      </h2>

      {/* List */}
      <div className="flex flex-col divide-y">
        {data.map((item) => (
          <div key={item.slug} className="py-5">
            <h3 className="font-serif text-lg font-semibold leading-snug hover:underline cursor-pointer">
              {item.title}
            </h3>

            <div className="mt-2 text-sm text-gray-600">
              <span>{item.date}</span>
              <span className="mx-2">|</span>
              <span className="text-red-600 font-medium">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
