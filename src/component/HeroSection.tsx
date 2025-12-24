import HeroArticle from "./HeroArticle";
import LatestNewsList from "./LatestNewsList";

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

export default function HeroSection({data}:Props) {
  return (
    <section className="mx-auto  mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <HeroArticle data={[data[0],data[1],data[2],data[3]]}/>
        </div>

        <div className="lg:col-span-1">
          <LatestNewsList data={[data[4],data[5],data[6],data[7]]}/>
        </div>
      </div>
    </section>
  );
}
