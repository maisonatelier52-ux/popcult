import SocialShare from "./SocialShare";

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
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
  author:Author;
}

interface Props {
  article: NewsData;
}

export default function ArticleHeader({article}: Props) {
let category: string;
  
  if (article.category === "prnews") {
    category = "PR News";
  } else if (article.category === "us") {
    category = "U.S";
  } else {
    category = article.category;
  }
  return (
    <header className=" mx-auto mt-5">
      {/* Category */}
      <span className="inline-block bg-[#041f4a] capitalize text-white text-xs font-semibold px-3 py-1 mb-4">
        {category}
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
  <span className="font-semibold text-[#041f4a]">
    {article.author.name}
  </span>

  <span className="mx-2 text-gray-400">|</span>

  <span className="text-gray-600">
    {article.author.role}
  </span>

  <div className="text-gray-500">
    {article.date}
  </div>
</div>

        </div>


      </div>
    </header>
  );
}
