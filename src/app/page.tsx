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

export default function Home() {
  return (
    <div>
      <WhatsHotBar data={prnewsData[0]} />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedEditorialGrid data={[prnewsData[2], marketingData[0], financeData[3], usData[1]]} />
        <HeroSection data={[prnewsData[1], marketingData[1], financeData[1], worldData[1], techData[0], entertainmentData[0], usData[1], prnewsData[2]]} />
        <EditorialGrid data={[marketingData[3], marketingData[4], marketingData[5], marketingData[6]]} />
        <SecondSection data={[prnewsData[3], prnewsData[3], prnewsData[4]]} />
        <TravelSectionWithSubscribe data={[financeData[3], financeData[4], financeData[5], financeData[6]]} />
        <SecondSection data={[worldData[3], usData[4], financeData[7]]} />
        <LatestNewsWithStickyPromo data={[usData[4], usData[5], worldData[4], worldData[5], worldData[6], worldData[7], usData[6], worldData[8], usData[7]]} />
      </div>
    </div>
  );
}
