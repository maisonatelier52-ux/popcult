import SocialShare from "./SocialShare";

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
  article: NewsData;
}

export default function ArticleHeader({article}: Props) {
  return (
    <header className=" mx-auto mt-5">
      {/* Category */}
      <span className="inline-block bg-[#000080] text-white text-xs font-semibold px-3 py-1 mb-4">
        {article.category}
      </span>

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
        {article.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-[15px] md:text-[18px] text-[#000000] font-light tracking-tight leading-[1.1] max-w-6xl">
        {article.shortdescription}
      </p>

      {/* Meta */}
      <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Author */}
        <div className="flex items-center gap-3">
          {/* <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          /> */}

          <div className="text-[12px] md:text-[14px]">
            <span className="font-semibold text-[#000080]">
              David
            </span>
            <span className="text-gray-600">
              {" "}
              – manager · 
            </span>

            <div className="text-gray-500">
              Last updated: {article.date}
            </div>
          </div>
        </div>


      </div>
    </header>
  );
}
