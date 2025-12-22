import Image from "next/image";
import WhatsHotBar from "../component/WhatsHotBar";
import FeaturedEditorialGrid from "../component/FeaturedEditorialGrid";
import HeroSection from "../component/HeroSection";
import EditorialGrid from "../component/EditorialGrid";
import SecondSection from "../component/SecondSection";
import TravelSectionWithSubscribe from "../component/TravelSectionWithSubscribe";
import LatestNewsWithStickyPromo from "../component/LatestNewsWithStickyPromo";
import businessData from '../../public/data/business.json';
import politicsData from '../../public/data/politics.json';
import worldData from '../../public/data/world.json';
import usData from '../../public/data/us.json';
import financeData from '../../public/data/finance.json';
import sportsData from '../../public/data/sports.json';
import entertainmentData from '../../public/data/entertainment.json';


export default function Home() {
  return (
   <div>

    <WhatsHotBar data={businessData[0]}/>

   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <FeaturedEditorialGrid data={[businessData[0],politicsData[0],financeData[0],usData[0]]}/>
             <HeroSection data={[politicsData[1],businessData[1],financeData[1], worldData[1],sportsData[0],entertainmentData[0],usData[1],businessData[2]]}/>
             <EditorialGrid data={[politicsData[3],politicsData[4],politicsData[5],politicsData[6]]}/>
             <SecondSection data={[businessData[3],businessData[3],businessData[4]]}/>

             <TravelSectionWithSubscribe data={[financeData[3],financeData[4],financeData[5],financeData[6]]}/>
             <SecondSection data={[worldData[3],usData[4],financeData[7]]}/>
             <LatestNewsWithStickyPromo data={[usData[4],usData[5],worldData[4],worldData[5],worldData[6],worldData[7],usData[6],worldData[8],usData[7]]}/>
      </div>
   </div>
  );
}
