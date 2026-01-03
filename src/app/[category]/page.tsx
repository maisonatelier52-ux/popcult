import React from 'react';
import prnewsData from '../../../public/data/prnews.json';
import worldData from '../../../public/data/world.json';
import usData from '../../../public/data/us.json';
import marketingData from '../../../public/data/marketing.json';
import financeData from '../../../public/data/finance.json';
import techData from '../../../public/data/tech.json';
import entertainmentData from '../../../public/data/entertainment.json';
import LatestNewsWithStickyPromo from '../../component/LatestNewsWithStickyPromo'
import CategoryHeader from '@/component/CategoryHeader';
import WhatsHotBar from '@/component/WhatsHotBar';
import CategoryContent from '@/component/CategoryContent';

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

const allData: Record<string, NewsItem[]> = {
  prnews: prnewsData,
  world: worldData,
  us: usData,
  finance: financeData,
  marketing: marketingData,
  tech: techData,
  entertainment: entertainmentData
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));

}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  console.log(category,'cag')
  const data = allData[category];

  if (!data) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">
          404 – Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The category you’re looking for doesn’t exist.
        </p>
      </main>
    );
  }

  return (
    <>
    <WhatsHotBar data={data[0]}/>
        <CategoryHeader category={data[0].category}/>
       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <CategoryContent data={data}/>
      </div>
    </>
  );
}