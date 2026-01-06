import Image from "next/image";
import WhatsHotBar from "../component/WhatsHotBar";
import FeaturedEditorialGrid from "../component/FeaturedEditorialGrid";
import HeroSection from "../component/HeroSection";
import EditorialGrid from "../component/EditorialGrid";
import SecondSection from "../component/SecondSection";
import TravelSectionWithSubscribe from "../component/TravelSectionWithSubscribe";
import LatestNewsWithStickyPromo from "../component/LatestNewsWithStickyPromo";
import prnewsData from '../../public/data/prnews.json';
import marketingData from '../../public/data/marketing.json';
import worldData from '../../public/data/world.json';
import usData from '../../public/data/us.json';
import financeData from '../../public/data/finance.json';
import techData from '../../public/data/tech.json';
import entertainmentData from '../../public/data/entertainment.json';
import CategorySectionHeader from "@/component/CategorySectionHeader";
import Script from "next/script";

const todayDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());


export default function Home() {
  return (
    <div>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PR Promotion Hub",
            url: "https://www.prpromotionhub.com",
            datePublished: todayDate,
            dateModified: todayDate,
            publisher: {
              "@type": "Organization",
              name: "PR Promotion Hub",
              logo: {
                "@type": "ImageObject",
                url: "https://www.prpromotionhub.com/images/pr-logo.webp",
              },
            },
          }),
        }}
      />

      <Script
        id="structured-data-site-navigation"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": [
              "PR News",
              "World",
              "US",
              "Finance",
              "Entertainment",
              "Marketing"
            ],
            "url": [
              "https://www.prpromotionhub.com/prnews/",
              "https://www.prpromotionhub.com/world/",
              "https://www.prpromotionhub.com/us/",
              "https://www.prpromotionhub.com/finance/",
              "https://www.prpromotionhub.com/entertainment/",
              "https://www.prpromotionhub.com/marketing/"
            ]
          })
        }}
      />

      <WhatsHotBar data={prnewsData[1]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedEditorialGrid data={[marketingData[2], financeData[4], usData[1]]} />

        {/* first data must be pr news */}
        <HeroSection data={[prnewsData[0], marketingData[1], financeData[5], worldData[1], techData[0], entertainmentData[0], usData[1], prnewsData[3], usData[2], techData[1], techData[2], prnewsData[4]]} />

        <EditorialGrid data={[marketingData[0], marketingData[3], marketingData[4], marketingData[5]]} />
        <div className="mx-auto mt-8">
          <CategorySectionHeader title="Trending Topics" />
          <SecondSection data={[worldData[0], prnewsData[2]]} />
        </div>
        <TravelSectionWithSubscribe data={[financeData[6], financeData[7], financeData[11], financeData[9]]} />

        <div className="mx-auto mt-8">
          <CategorySectionHeader title="Breaking News" />
          <SecondSection data={[worldData[9], usData[8], entertainmentData[8]]} />
        </div>
        <LatestNewsWithStickyPromo data={[financeData[10], marketingData[6], techData[7], worldData[6], worldData[7], usData[6], worldData[8], entertainmentData[6]]} />
      </div>
    </div>
  );
}
