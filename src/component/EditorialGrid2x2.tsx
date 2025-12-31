import EditorialCard from "./EditorialCard";
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

export default function EditorialGrid2x2({ data }: Props) {
  return (
    <section className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
        {data.map((item) => (
          <div
            key={item.slug}
            className="
              flex flex-col
              border-b border-gray-200 pb-6
              last:border-b-0
              lg:border-b-0 lg:pb-0
            "
          >
            <SecondEditorial
              title={item.title}
              image={item.image}
              date={item.date}
              author="David"
              category={item.category}
              slug={item.slug}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

