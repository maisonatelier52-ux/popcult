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
           <ArticleHeader article={article}/>

        </main>
    );
}