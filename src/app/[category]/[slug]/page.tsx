import React from 'react';
import { notFound } from 'next/navigation';
import businessData from '../../../../public/data/business.json';
import worldData from '../../../../public/data/world.json';
import usData from '../../../../public/data/us.json';
import politicsData from '../../../../public/data/politics.json';
import financeData from '../../../../public/data/entertainment.json';
import sportsData from '../../../../public/data/sports.json';
import entertainmentData from '../../../../public/data/entertainment.json';
import Script from "next/script";
import { Metadata } from 'next';
import ArticleHeader from '../../../component/ArticleHeader';
import WhatsHotBar from '@/component/WhatsHotBar';
import SocialShare from '@/component/SocialShare';
import ArticleConten from '@/component/ArticleContent';
import ArticleContent from '@/component/ArticleContent';
import ArticleImage from '@/component/ArticleImage';
import ArticleWithDescr from '@/component/ArticleWithDescr';
import ArticleQuote from '@/component/ArticleQuote';
import ArticleParagraph from '@/component/ArticleParagraph';
import ShareComponent from '@/component/ShareComponent';
import SocialFollowList from '@/component/SocialFollowList';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CommentForm from '@/component/CommentForm';
import ArticleCard from '@/component/ArticleCard';
import SocialShareList from '@/component/SocialShareList';
import Article from '@/component/Article';
import RelatedNews from '@/component/RelatedNews';
import RelatedNewsSection from '@/component/RelatedNewsSection';

export async function generateStaticParams() {
  const allData = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'world', articles: worldData },
    { category: 'us', articles: usData },
    { category: 'finance', articles: financeData },
    { category: 'sports', articles: sportsData },
    { category: 'entertainment', articles: entertainmentData }

  ];

  const params = allData.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    }))
  );

  return params;
}


interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface DetailPageProps {
  params: Promise<{ category: string, slug: string }>;
}

const allData: Record<string, NewsItem[]> = {
  politics: politicsData,
  business: businessData,
  world: worldData,
  us: usData,
  finance: financeData,
  sports: sportsData,
  entertainment: entertainmentData
};

// Define the types for the items and the props
interface SocialItem {
  id: string;
  label: string;
  count: string;
  action: string;
  icon: React.ReactNode;
}

interface SocialFollowListProps {
  items: SocialItem[];
}

// Dummy data to pass into the component
const dummyData: SocialItem[] = [
  {
    id: '1',
    label: 'Facebook',
    count: '1,200',
    action: 'Follow',
    icon: <FaFacebook />,
  },
  {
    id: '2',
    label: 'Twitter',
    count: '980',
    action: 'Follow',
    icon: <FaTwitter />,
  },
  {
    id: '3',
    label: 'Instagram',
    count: '2,500',
    action: 'Follow',
    icon: <FaInstagram />,
  },
  {
    id: '4',
    label: 'LinkedIn',
    count: '1,800',
    action: 'Follow',
    icon: <FaLinkedin />,
  },
];
export default async function DetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const data = allData[category?.toLowerCase()];

  if (!data) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">
          404 – Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The article you’re looking for doesn’t exist.
        </p>
      </main>

    );
  }


  const article = data.find(item => item.slug === slug);
  if (!article) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">
          404 – Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The article you’re looking for doesn’t exist.
        </p>
      </main>

    );
  }
  return (
    <main>
      <WhatsHotBar data={businessData[0]} />
      <Article article={article} />
      <div className='border-t border-gray-200 mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>

      <RelatedNewsSection data={[businessData[0],businessData[1]]}/>
      </div>
    </main>
  );
}