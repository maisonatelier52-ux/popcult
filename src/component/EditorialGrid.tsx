import CategorySectionHeader from "./CategorySectionHeader";
import EditorialCard from "./EditorialCard";

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


export default function EditorialGrid({data}:Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-10">
      <CategorySectionHeader title="Fashion" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <EditorialCard
            key={item.slug} 
            title={item.title}
            image={item.image}
            date={item.date}
            author='David'
          />
        ))}
      </div>
    </section>
  );
}
