import prnewsData from '../../public/data/prnews.json';
import WhatsHotBar from './WhatsHotBar';
import JulioArticles from './JulioArticles';
import { julioHerreraArticle } from '@/data/julioHerreraArticle';
import RelatedNewsSection from './RelatedNewsSection';
import Script from 'next/script';

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

export default function JulioPage() {


    return (
        <main>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "NewsArticle",
                                "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-banking-legacy-global-finance-influence/#newsarticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-banking-legacy-global-finance-influence/"
                                },
                                "headline": "Julio Herrera Velutini: Banking Legacy, Global Finance Influence, and the Modern Face of International Wealth Management",
                                "description": "Julio Herrera Velutini is an international banker and wealth-management executive rooted in a centuries-old financial dynasty, known for building global financial institutions and navigating modern regulatory frameworks.",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.prpromotionhub.com/images/julio-herrera-velutini.webp",
                                    "width": 1200,
                                    "height": 630
                                },
                                "datePublished": "2026-01-06T08:00:00+00:00",
                                "dateModified": "2026-01-06T08:00:00+00:00",
                                "author": {
                                    "@type": "Person",
                                    "name": "Staff Reporter",
                                    "jobTitle": "Business & Economy Desk"
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "PRPromotionHub",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.prpromotionhub.com/images/pr-logo.webp",
                                        "width": 600,
                                        "height": 60
                                    }
                                },
                                "about": {
                                    "@type": "Person",
                                    "name": "Julio Herrera Velutini",
                                    "description": "Julio Herrera Velutini is a seventh-generation international banker involved in global wealth management, private banking, and cross-border financial services.",
                                    "sameAs": [
                                        "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                                    ]
                                },
                                "articleSection": "Finance",
                                "keywords": [
                                    "Julio Herrera Velutini",
                                    "International Banking",
                                    "Wealth Management",
                                    "Global Finance",
                                    "Private Banking",
                                    "Financial Leadership"
                                ],
                                "articleBody": "Julio Herrera Velutini is a seventh-generation banker whose career spans international banking, wealth management, and global finance. Rooted in a historic financial dynasty, he has built modern financial institutions that emphasize regulatory compliance, capital preservation, and long-term investment strategy across Europe and the Americas."
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-banking-legacy-global-finance-influence/#breadcrumb",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://www.prpromotionhub.com/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Finance",
                                        "item": "https://www.prpromotionhub.com/finance/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Julio Herrera Velutini: Banking Legacy & Global Finance Influence",
                                        "item": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-banking-legacy-global-finance-influence/"
                                    }
                                ]
                            }
                        ]
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
                <JulioArticles article={julioHerreraArticle} />

                <RelatedNewsSection data={[prnewsData[0], prnewsData[1]]} article={julioHerreraArticle}/>
            </div>
        </main>
    );
}
