import RelatedNews from "./RelatedNews";
import financeData from "../../public/data/finance.json";

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
  slug?: string;
}

interface NewsData {
  title: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  shortdescription: string;
  description: string;
  author: Author;
}

interface Props {
  data: NewsData[];    
  article?: NewsData;   
}

export default function RelatedNewsSection({ data, article }: Props) {
  const relatedArticles: NewsData[] = [];
  const usedSlugs = new Set<string>();

  const isValid = (item: NewsData) => {
    if (!item?.slug) return false;
    
    if (article && item.slug === article.slug) return false;
    if (usedSlugs.has(item.slug)) return false;
    return true;
  };

  for (const item of financeData.slice(0, 4)) {
    if (isValid(item)) {
      relatedArticles.push(item);
      usedSlugs.add(item.slug);
    }
    if (relatedArticles.length === 2) break;
  }

  for (const item of data) {
    if (isValid(item)) {
      relatedArticles.push(item);
      usedSlugs.add(item.slug);
    }
    if (relatedArticles.length === 3) break;
  }

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="mb-3 text-2xl font-semibold uppercase tracking-wide">
        Related News
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {relatedArticles.map((item) => (
          <RelatedNews key={item.slug} data={item} />
        ))}
      </div>
    </section>
  );
}
