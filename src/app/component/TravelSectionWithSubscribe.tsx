import SubscribeNewsletter from "./SubscribeNewsletter";
import CategorySectionHeader from "./CategorySectionHeader";
import EditorialGrid2x2 from "./EditorialGrid2x2";

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


export default function TravelSectionWithSubscribe({data}:Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* LEFT: Subscribe */}
        <div className="lg:col-span-1">
          <SubscribeNewsletter />
        </div>

        {/* RIGHT: Category + Grid */}
        <div className="lg:col-span-3">
          {/* Category Header */}
          <CategorySectionHeader title="Finance" />

          {/* 2x2 Editorial Grid */}
          <div className="mt-8">
            <EditorialGrid2x2 data={[data[0],data[1],data[2],data[3]]}/>
          </div>
        </div>
      </div>
    </section>
  );
}
