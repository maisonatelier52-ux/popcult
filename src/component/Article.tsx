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
import businessData from '../../public/data/business.json';

interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
}

interface Props {
    article: NewsItem;
}

export default function Article({ article }: Props) {
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
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <ArticleHeader article={article} />
            <SocialShare />
            <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">
                <div className="w-full lg:w-300 mb-6 md:mb-0">
                    {/* Other components on the left */}
                    <ArticleImage src={article.image} alt={article.title} />
                    <div className="flex flex-col md:flex-row space-x-12 mt-8">
                        {/* SocialShareList - Sticky on Desktop and Hidden on Mobile */}
                        <div className="hidden md:flex sticky top-5">
                            <SocialShareList />
                        </div>

                        {/* Article With Description */}
                        <div ref={leftRef}>
                            <ArticleWithDescr data={article} />
                        </div>
                    </div>


                    <ShareComponent />
                    <CommentForm />
                </div>

                <div className="
    w-full lg:w-1/3
    lg:pl-8
    lg:border-l-2
    lg:border-dotted
    lg:border-gray-100
  ">
                    <ArticleCard
                        data={[
                            businessData[0],
                            businessData[1],
                            businessData[2],
                            businessData[3],
                        ]}
                    />
                </div>

            </div>
        </div>
    );
}
