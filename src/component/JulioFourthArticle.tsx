'use client';

import React, { useEffect, useRef, useState } from 'react';
import ArticleHeader from './ArticleHeader';
import SocialShare from './SocialShare';
import ArticleImage from './ArticleImage';
import SocialShareList from './SocialShareList';
import ArticleWithDescr from './ArticleWithDescr';
import ShareComponent from './ShareComponent';
import CommentForm from './CommentForm';
import ArticleCard from './ArticleCard';
import prnewsData from '../../public/data/prnews.json';
import ClientArticleContent from './ClientArticleContent';
import JulioArticleHeader from './JulioArticleHeader';

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
interface SubParagraph {
    subtitle: string;
    description: string;
}
interface SubParagraph2 {
    subtitle: string;
    description: string;
}
interface SubPoints {
    subline: string;
    points: string[];
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
    subpara?: SubParagraph[];
    subpoints?: SubPoints;
    subpara2?: SubParagraph[];
}

interface Props {
    article: NewsItem;
}

export default function JulioFourthArticle({ article }: Props) {
    const leftRef = useRef<HTMLDivElement>(null);
    const stopRef = useRef<HTMLDivElement>(null);
    const [stopScroll, setStopScroll] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setStopScroll(entry.isIntersecting);
            },
            { root: null, threshold: 0.1 }
        );

        if (stopRef.current) observer.observe(stopRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div>
           <header className=" mx-auto mt-5">
                {/* Category */}
                <span className="inline-block bg-[#041f4a] capitalize text-white text-xs font-semibold px-3 py-1 mb-4">
                    {article.category}
                </span>

                {/* Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                    {article.title}
                </h1>

                {/* Subtitle */}
                <p className="mt-2 text-[15px] md:text-[18px] text-[#000000] font-light tracking-tight leading-[1.1] max-w-6xl">
                    {article.shortdescription}
                </p>

                {/* Meta */}
                <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <div className="text-[12px] md:text-[14px] flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-[#041f4a]">
                                International Banker
                            </span>

                            <span className="text-black">•</span>

                            <span className="text-gray-600">
                                Entrepreneur
                            </span>

                            <span className="text-black">•</span>

                            <span className="text-gray-600">
                                Financial Leader
                            </span>

                           
                        </div>
                        
                    </div>
                    
                </div>
                 <div className="text-gray-500 w-full text-[12px] md:text-[14px]">
                                {article.date}
                            </div>
            </header>
            
            <SocialShare />
            <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">
                <div className="w-full lg:w-300 mb-6 md:mb-0">
                    {/* Other components on the left */}
                    <ArticleImage src={article.image} alt={article.title} />
                    <div className="flex flex-col md:flex-row mt-8 gap-12">

                        {/* SocialShareList */}
                        <div className="hidden md:block sticky top-8 self-start">
                            <SocialShareList />
                        </div>

<ClientArticleContent
  description={article.description}
  subpara={article.subpara}
  subpoints={article.subpoints}
  subpara2={article.subpara2}
/>

                    </div>
                    <ShareComponent />
                    <CommentForm />
                </div>

                <div className="
    w-full lg:w-1/3
    lg:pl-8
    lg:border-l-2
    lg:border-dotted
    lg:border-gray-200
  ">
                    <ArticleCard
                        data={[
                            prnewsData[0],
                            prnewsData[1],
                            prnewsData[2],
                            prnewsData[3],
                        ]}
                    />
                </div>

            </div>
        </div>
    );
}
