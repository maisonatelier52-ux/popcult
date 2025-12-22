import { FaYoutube, FaInstagram, FaMedium, FaTwitter } from "react-icons/fa";

interface EditorialItem {
  image: string;
  category: string;
  title: string;
  index: number;
}

interface SocialItem {
  id: string;
  label: string;
  count: string;
  action: string;
  icon: React.ReactNode;
}

interface PopularAndSocialProps {
  editorialItems: EditorialItem[];
  socialItems: SocialItem[];
}

// Import your existing components
import SectionDivider from "./SectionDivider";
import EditorialListItem from "./EditorialListItem";
import SocialFollowList from "./SocialFollowList";

export default function PopularAndSocial({
  editorialItems,
  socialItems,
}: PopularAndSocialProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Popular Section */}
      <SectionDivider title="POPULAR" />
      <div className="space-y-6">
        {editorialItems.map((item) => (
          <EditorialListItem
            key={item.index}
            image={item.image}
            category={item.category}
            title={item.title}
            index={item.index}
          />
        ))}
      </div>

      {/* Social Section */}
      <SectionDivider title="Follow US" />
      <SocialFollowList items={socialItems} />
    </div>
  );
}

// Example usage
const editorialItems: EditorialItem[] = [
  {
    image: "/images/fashion1.jpg",
    category: "Fashion",
    title: "Runway to Real Life How High Fashion is Influencing Everyday Style",
    index: 1,
  },
  {
    image: "/images/celebrity1.jpg",
    category: "Celebrity Buzz",
    title: "OMG Moment Leo West Caught on Camera Doing the Unexpected",
    index: 2,
  },
  {
    image: "/images/celebrity2.jpg",
    category: "Celebrity Buzz",
    title: "Hollywood's Next Power Couple Ethan Cole and Mila Harper Spotted Together",
    index: 3,
  },
  {
    image: "/images/culture1.jpg",
    category: "Culture",
    title: "Street Art Revolution The Hidden Messages Behind Urban Murals",
    index: 4,
  },
];

const socialItems: SocialItem[] = [
  {
    id: "youtube",
    label: "Subscribers",
    count: "1.28M",
    action: "Subscribe",
    icon: <FaYoutube />,
  },
  {
    id: "instagram",
    label: "Followers",
    count: "3.46M",
    action: "Follow",
    icon: <FaInstagram />,
  },
  {
    id: "medium",
    label: "Followers",
    count: "4.95M",
    action: "Follow",
    icon: <FaMedium />,
  },
  {
    id: "twitter",
    label: "Followers",
    count: "45k",
    action: "Follow",
    icon: <FaTwitter />,
  },
];
