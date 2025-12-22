import React from 'react';
import businessData from '../../../public/data/business.json';
import worldData from '../../../public/data/world.json';
import usData from '../../../public/data/us.json';
import politicsData from '../../../public/data/politics.json';
import financeData from '../../../public/data/entertainment.json';
import sportsData from '../../../public/data/sports.json';
import entertainmentData from '../../../public/data/entertainment.json';
import LatestNewsWithStickyPromo from '../../component/LatestNewsWithStickyPromo'

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
  business: businessData,
  world: worldData,
  us: usData,
  finance: financeData,
  politics: politicsData,
  sports: sportsData,
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
      <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:py-8 py-0">
      <LatestNewsWithStickyPromo data={data}/>
      </div>
    </>
  );
}