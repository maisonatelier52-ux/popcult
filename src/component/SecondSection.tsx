import CategorySectionHeader from "./CategorySectionHeader";
import SecondArticle from "./SecondArticle";
import SecondEditorial from "./SecondEditorial";

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

export default function SecondSection({ data }: Props) {
    return (
        <section className="mx-auto mt-8">
            <CategorySectionHeader title="Latest News" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 mt-5">
                {/* Left: Main Hero Article */}
                <div className="lg:col-span-2">
                    <SecondArticle
                        image={data[0].image}
                        category={data[0].category}
                        title={data[0].title}
                        author="Clara Quick"
                        date={data[0].date}
                        shortdescription={data[0].shortdescription}
                        slug={data[0].slug}
                    />
                </div>

                {/* Right: Latest News */}
                <div className="lg:col-span-1 flex flex-col divide-y divide-gray-300 space-y-5">
                    <div className="mb-5">
                        <SecondEditorial
                            key={data[1].slug}
                            title={data[1].title}
                            image={data[1].image}
                            date={data[1].date}
                            author="David"
                            category={data[1].category}
                            slug={data[1].slug}
                        />
                    </div>
                    <div>
                        <SecondEditorial
                            key={data[2].slug}
                            title={data[2].title}
                            image={data[2].image}
                            date={data[2].date}
                            author="David"
                            category={data[2].category}
                            slug={data[2].slug}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
