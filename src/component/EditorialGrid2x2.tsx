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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div
            key={item.slug}
            className='flex flex-col'
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
