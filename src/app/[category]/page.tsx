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
import { Metadata } from 'next';

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  twitter: string;
  facebook: string;
  instagram: string;
  substack?: string;
  medium?: string;
}

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  author: Author;
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  const categoryMeta: Record<string, { title: string; description: string }> = {
    prnews: {
      title: "PR News & Press Release Updates – PR Promotion Hub",
      description:
        "Latest PR news, press releases, brand announcements, and media coverage insights to help businesses amplify their reach and visibility.",
    },
    world: {
      title: "World News & Global Affairs – PR Promotion Hub",
      description:
        "Breaking world news, international affairs, global business developments, and geopolitical updates shaping today’s world.",
    },
    us: {
      title: "US News & National Updates – PR Promotion Hub",
      description:
        "Stay updated with the latest US news, national developments, politics, economy, and business trends across America.",
    },
    finance: {
      title: "Finance News, Markets & Economy – PR Promotion Hub",
      description:
        "Track finance news, stock market trends, economic updates, investments, startups, and global financial insights.",
    },
    entertainment: {
      title: "Entertainment News, Celebrities & Media – PR Promotion Hub",
      description:
        "Explore entertainment news, celebrity updates, movies, music, streaming trends, and media industry highlights.",
    },
    marketing: {
      title: "Marketing & Branding Insights | PR Promotion Hub",
      description:
        "Discover marketing news, digital marketing strategies, branding insights, SEO trends, and growth tactics for modern businesses.",
    },
    tech: {
      title: "Technology News, AI & Innovation | PR Promotion Hub",
      description:
        "Discover the latest technology news, AI developments, startups, gadgets, software updates, and innovations shaping the digital world.",
    },

  };

  const siteUrl = "https://www.prpromotionhub.com";
  const categoryUrl = `${siteUrl}/${category}`;

  const meta = categoryMeta[category] || {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} News – PR Promotion Hub`,
    description: `Latest ${category} news, updates, and insights from PR Promotion Hub.`,
  };

  const firstArticle = allData?.[category]?.[0];

  const firstArticleImage =
    firstArticle?.image?.startsWith("http")
      ? firstArticle.image
      : `${siteUrl}${firstArticle?.image || "/images/pr-logo.webp"}`;

  if (!firstArticle) {
    return {
      title: "Category Not Found – PR Promotion Hub",
      description: "The requested category could not be found.",
      robots: { index: false, follow: false },
    };
  }
const todayDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());


return {
  title: meta.title,
  description: meta.description,

  alternates: {
    canonical: categoryUrl,
  },

  openGraph: {
    type: "article", 
    title: meta.title,
    description: meta.description,
    url: categoryUrl,
    siteName: "PR Promotion Hub",
    locale: "en_US",
    publishedTime: todayDate, 
    modifiedTime: todayDate, 

    images: [
      {
        url: firstArticleImage,
        width: 1200,
        height: 630,
        alt: `${category} news – PR Promotion Hub`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [firstArticleImage],
    site: "@prpromotionhub",
  },
};

}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  console.log(category, 'cag')
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
      <WhatsHotBar data={data[0]} />
      <CategoryHeader category={data[0].category} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryContent data={data} />
      </div>
    </>
  );
}