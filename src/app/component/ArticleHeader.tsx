
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
  d: NewsData;
}

export default function ArticleHeader({article}: Props) {
  return (
    <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
      {/* Category */}
      <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded mb-4">
        {article.category}
      </span>

      {/* Title */}
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        {article.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg text-gray-700 max-w-4xl">
        {/* {article.subtitle} */}
      </p>

      {/* Meta */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Author */}
        <div className="flex items-center gap-3">
          {/* <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          /> */}

          <div className="text-sm">
            <span className="font-semibold text-red-600">
              David
            </span>
            <span className="text-gray-600">
              {" "}
              – manager · 
            </span>

            <div className="text-gray-500 mt-1">
              Last updated: 
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <button className="p-2 border rounded-full hover:bg-gray-100">
            ↗
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100">
            X
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100">
            f
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100">
            ⎘
          </button>
          <span className="ml-2 text-gray-500">
            • 
          </span>
        </div>
      </div>
    </header>
  );
}
