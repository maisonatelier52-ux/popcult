import React from 'react';
import { notFound } from 'next/navigation';
import prnewsData from '../../../../public/data/prnews.json';
import worldData from '../../../../public/data/world.json';
import usData from '../../../../public/data/us.json';
import marketingData from '../../../../public/data/marketing.json';
import financeData from '../../../../public/data/finance.json';
import techData from '../../../../public/data/tech.json';
import entertainmentData from '../../../../public/data/entertainment.json';
import Script from "next/script";
import { Metadata } from 'next';
import WhatsHotBar from '@/component/WhatsHotBar';
import Article from '@/component/Article';
import RelatedNewsSection from '@/component/RelatedNewsSection';
import JulioArticles from '@/component/JulioArticles';
import { julioHerreraArticle } from '@/data/julioHerreraArticle';

export async function generateStaticParams() {
  const allData = [
    { category: 'prnews', articles: prnewsData },
    { category: 'marketing', articles: marketingData },
    { category: 'world', articles: worldData },
    { category: 'us', articles: usData },
    { category: 'finance', articles: financeData },
    { category: 'tech', articles: techData },
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
  author: Author;
  date: string;
}

interface DetailPageProps {
  params: Promise<{ category: string, slug: string }>;
}

const allData: Record<string, NewsItem[]> = {
  prnews: prnewsData,
  marketing: marketingData,
  world: worldData,
  us: usData,
  finance: financeData,
  tech: techData,
  entertainment: entertainmentData
};

export async function generateMetadata(
  { params }: DetailPageProps
): Promise<Metadata> {
  const { category, slug } = await params;

  const allDataMap: Record<string, NewsItem[]> = {
    prnews: prnewsData,
    world: worldData,
    us: usData,
    finance: financeData,
    entertainment: entertainmentData,
    marketing: marketingData,
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = "https://www.prpromotionhub.com";
  const currentUrl = `${siteUrl}/${category}/${slug}`;

  const imageUrl =
    article?.image?.startsWith("http")
      ? article.image
      : `${siteUrl}${article?.image || "/images/prpromotionhub-logo.webp"}`;

  if (!article) {
    return {
      title: "Article Not Found – PR Promotion Hub",
      description: "The requested article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: article.title,
    description: article.shortdescription,

    keywords: `${article.category}, pr news, marketing news, business news, ${article.title}`,

    authors: [{ name: article.author.name }],

    alternates: {
      canonical: currentUrl,
    },

    openGraph: {
      title: article.title,
      description: article.shortdescription,
      url: currentUrl,
      siteName: "PR Promotion Hub",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.shortdescription,
      images: [imageUrl],
      site: "@prpromotionhub",
      creator: "@prpromotionhub",
    },

    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.title,
        description: article.shortdescription,
        datePublished: article.date,
        dateModified: article.date,
        author: {
          "@type": "Person",
          name: article.author,
        },
        publisher: {
          "@type": "Organization",
          name: "PR Promotion Hub",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/prpromotionhub-logo.webp`,
          },
        },
        image: imageUrl,
        url: currentUrl,
        articleBody: article.description?.slice(0, 200),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": currentUrl,
        },
        keywords: `${article.category}, pr news, marketing, business`,
      }),
    },
  };
}

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
  if (slug == 'julio-herrera-velutini-banking-legacy-global-finance-influence') {


    return (
      <main>

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is Julio Herrera Velutini?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Julio Herrera Velutini is a businessman and banking executive with a background in international finance and private banking, associated with longstanding financial institutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Julio Herrera Velutini known for in the financial sector?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "He is known for his involvement in banking operations, financial leadership, and strategic investment activities within international financial markets."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries has Julio Herrera Velutini worked in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "His professional experience spans banking, finance, investment management, and related business sectors with a global focus."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Julio Herrera Velutini associated with international banking institutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, he has been associated with international banking and financial organizations operating across multiple regions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What leadership roles has Julio Herrera Velutini held?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "He has held executive and leadership roles involving financial strategy, institutional oversight, and business development."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Julio Herrera Velutini’s approach to finance and investment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "His approach emphasizes long-term value creation, risk management, and sustainable financial planning within global markets."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Julio Herrera Velutini participate in philanthropic or social initiatives?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "He has supported initiatives related to education, entrepreneurship, and community development alongside his business activities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is Julio Herrera Velutini recognized in international finance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "He is recognized for his experience in banking, understanding of international financial systems, and involvement in global business operations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Julio Herrera Velutini currently focused on?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "His current focus includes financial leadership, investment oversight, and strategic involvement in banking and business initiatives."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Julio Herrera Velutini contribute to the financial industry?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "He contributes through executive leadership, financial strategy development, and participation in banking and investment projects."
                  }
                }
              ]
            })
          }}
        />

        <WhatsHotBar data={prnewsData[0]} />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
          <JulioArticles article={julioHerreraArticle} />

          <RelatedNewsSection data={[prnewsData[0], prnewsData[1]]} />
        </div>
      </main>
    )
  }

  return (
    <main>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",

            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.prpromotionhub.com/${article.category}/${article.slug}/`
            },

            "headline": article.title,
            "description": article.shortdescription,

            "image": {
              "@type": "ImageObject",
              "url": article.image.startsWith("http")
                ? article.image
                : `https://www.prpromotionhub.com${article.image}`,
              "width": 1200,
              "height": 630
            },

            "author": {
              "@type": "Organization",
              "name": "PR Promotion Hub",
              "url": "https://www.prpromotionhub.com/"
            },

            "publisher": {
              "@type": "Organization",
              "name": "PR Promotion Hub",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.prpromotionhub.com/images/prpromotionhub-logo.webp",
                "width": 628,
                "height": 116
              }
            },

            "datePublished": article.date,
            "dateModified": article.date
          })
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Julio Herrera Velutini?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Julio Herrera Velutini is a businessman and banking executive with a background in international finance and private banking, associated with longstanding financial institutions."
                }
              },
              {
                "@type": "Question",
                "name": "What is Julio Herrera Velutini known for in the financial sector?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "He is known for his involvement in banking operations, financial leadership, and strategic investment activities within international financial markets."
                }
              },
              {
                "@type": "Question",
                "name": "What industries has Julio Herrera Velutini worked in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "His professional experience spans banking, finance, investment management, and related business sectors with a global focus."
                }
              },
              {
                "@type": "Question",
                "name": "Is Julio Herrera Velutini associated with international banking institutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, he has been associated with international banking and financial organizations operating across multiple regions."
                }
              },
              {
                "@type": "Question",
                "name": "What leadership roles has Julio Herrera Velutini held?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "He has held executive and leadership roles involving financial strategy, institutional oversight, and business development."
                }
              },
              {
                "@type": "Question",
                "name": "What is Julio Herrera Velutini’s approach to finance and investment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "His approach emphasizes long-term value creation, risk management, and sustainable financial planning within global markets."
                }
              },
              {
                "@type": "Question",
                "name": "Does Julio Herrera Velutini participate in philanthropic or social initiatives?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "He has supported initiatives related to education, entrepreneurship, and community development alongside his business activities."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Julio Herrera Velutini recognized in international finance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "He is recognized for his experience in banking, understanding of international financial systems, and involvement in global business operations."
                }
              },
              {
                "@type": "Question",
                "name": "What is Julio Herrera Velutini currently focused on?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "His current focus includes financial leadership, investment oversight, and strategic involvement in banking and business initiatives."
                }
              },
              {
                "@type": "Question",
                "name": "How does Julio Herrera Velutini contribute to the financial industry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "He contributes through executive leadership, financial strategy development, and participation in banking and investment projects."
                }
              }
            ]
          })
        }}
      />
      <WhatsHotBar data={prnewsData[0]} />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
        <Article article={article} />

        <RelatedNewsSection data={[prnewsData[0], prnewsData[1]]} />
      </div>
    </main>
  );
}