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
      <section className="mx-auto mt-8">
        <CategorySectionHeader title="Recent News" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
          {data.map((item) => (
            <EditorialCard
              key={item.slug} 
              title={item.title}
              image={item.image}
              date={item.date}
              author='David'
              category={item.category}
              slug={item.slug}
            />
          ))}
        </div>
      </section>
    );
  }
