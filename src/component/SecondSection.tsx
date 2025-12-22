import EditorialCard from "./EditorialCard";
import SecondArticle from "./SecondArticle";

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

export default function SecondSection({data}:Props) {
    return (
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left: Main Hero Article */}
                <div className="lg:col-span-2">
                    <SecondArticle
                        image={data[0].image}
                        category={data[0].category}
                        title={data[0].title}
                        author="Clara Quick"
                        date={data[0].date}
                    />
                </div>

                {/* Right: Latest News */}
                <div className="lg:col-span-1">
                    <EditorialCard
                        key={data[1].slug}
                        title={data[1].title}
                        image={data[1].image}
                        date={data[1].date}
                        author='David'
                    />
                    <EditorialCard
                        key={data[2].slug}
                        title={data[2].title}
                        image={data[2].image}
                        date={data[2].date}
                        author='David'
                    />
                </div>
            </div>
        </section>
    );
}
