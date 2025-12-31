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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-5">
  {data.map((item, index) => (
    <div
      key={item.slug}
 className="border-b border-gray-200 pb-6 last:border-b-0 lg:border-b-0 lg:pb-0"

    >
      <EditorialCard
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
