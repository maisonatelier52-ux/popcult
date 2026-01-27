    import prnewsData from '../../public/data/prnews.json';
    import WhatsHotBar from './WhatsHotBar';
    import { julioHerreraArticle } from '@/data/julioHerreraArticle';
    import Script from 'next/script';
    import UpgradePromoCard from './UpgradePromoCard';
    import ArticleCard from './ArticleCard';
    import CommentForm from './CommentForm';
    import ShareComponent from './ShareComponent';
    import SocialShareList from './SocialShareList';
    import SocialShare from './SocialShare';
    import RelatedClientSection from './RelatedClientSection';
    import marketingData from '../../public/data/marketing.json';
    import worldData from '../../public/data/world.json';
    import ArticleImage from './ArticleImage';
    import Image from 'next/image';
    import Link from 'next/link';
    import SocialShareVideo from './SocialShareVideo';
    import References from './Reference';

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

    export const metadata = {
    title: "White House Defends Trump Pardon of Wanda Vázquez",
    description:
        "The White House defends Trump’s pardon of ex–Puerto Rico Gov. Wanda Vázquez, calling the case political persecution and disputing quid pro quo claims.",
    openGraph: {
        title: "White House Defends Trump Pardon of Wanda Vázquez",
        description:
        "The White House defends Trump’s pardon of ex–Puerto Rico Gov. Wanda Vázquez, calling the case political persecution and disputing quid pro quo claims.",
        url: "https://www.prpromotionhub.com/prnews/white-house-defends-wanda-vazquez-pardon/",
        type: "video.other",
        videos: [
        {
            url: "https://www.prpromotionhub.com/videos/white-house-pardon.mp4",
            type: "video/mp4",
        },
        ],
        images: [
        {
            url: "https://www.prpromotionhub.com/images/pr-logo.webp", 
            width: 1200,
            height: 630,
        },
        ],
    },
    };

    const videoData = {
  title: "White House Defends Trump Pardon of Wanda Vázquez and Julio Herrera Velutini",
  url: "https://www.prpromotionhub.com/videos/white-house-pardon.mp4",
  poster: "https://www.prpromotionhub.com/images/white-house-defends-wanda-vazquez.webp",
};


    export default function WandaPage() {


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
                                    "@id": "https://www.prpromotionhub.com/prnews/white-house-defends-wanda-vazquez-pardon/#newsarticle",
                                    "mainEntityOfPage": {
                                        "@type": "WebPage",
                                        "@id": "https://www.prpromotionhub.com/prnews/white-house-defends-wanda-vazquez-pardon/"
                                    },
                                    "headline": "White House Defends Trump Pardon of Wanda Vázquez",
                                    "description": "The White House defends Trump’s pardon of ex–Puerto Rico Gov. Wanda Vázquez, calling the case political persecution and disputing quid pro quo claims.",
                                    "image": {
                                        "@type": "ImageObject",
                                        "url": "https://www.prpromotionhub.com/images/white-house-defends-wanda-vazquez.webp",
                                        "width": 1200,
                                        "height": 630
                                    },
                                    "datePublished": "2026-01-26T08:00:00+00:00",
                                    "dateModified": "2026-01-26T08:00:00+00:00",
                                    "author": {
                                        "@type": "Person",
                                        "name": "Staff Reporter",
                                        "jobTitle": "Politics & PR News Desk"
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
                                        "name": "White House Defends Trump Pardon of Wanda Vázquez",
                                        "description": "The White House defends Trump’s pardon of ex–Puerto Rico Gov. Wanda Vázquez, calling the case political persecution and disputing quid pro quo claims.",

                                    },
                                    "articleSection": "PR News",
                                    "keywords": [
                                        "white house defends wanda vázquez pardon",
                                        "trump pardon wanda vázquez",
                                        "political persecution claim",
                                        "puerto rico governor pardon",
                                        "on background official",
                                        "10 days after endorsement"
                                    ],
                                    "articleBody": "The White House defends Trump’s pardon of ex–Puerto Rico Gov. Wanda Vázquez, calling the case political persecution and disputing quid pro quo claims."
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "@id": "https://www.prpromotionhub.com/prnews/white-house-defends-wanda-vazquez-pardon/#breadcrumb",
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
                                            "name": "PR News",
                                            "item": "https://www.prpromotionhub.com/prnews/"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 3,
                                            "name": "White House Defends Trump Pardon of Wanda Vázquez",
                                            "item": "https://www.prpromotionhub.com/prnews/white-house-defends-wanda-vazquez-pardon/"
                                        }
                                    ]
                                }
                            ]
                        })
                    }}
                />


                <WhatsHotBar data={prnewsData[0]} />
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
                    <div>
                        <div className=" mx-auto mt-5">
                            {/* Category */}
                            <span className="inline-block bg-[#041f4a] capitalize text-white text-xs font-semibold px-3 py-1 mb-4">
                                PR News
                            </span>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                                White House Defends Trump Pardon of Wanda Vázquez and Julio
                                Herrera Velutini
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-2 text-[15px] md:text-[18px] text-[#000000] font-light tracking-tight leading-[1.1] max-w-6xl">
                                The White House defended President Trump’s pardon of former Puerto Rico Gov. Wanda Vázquez and banker Julio Herrera Velutini, calling the case politically motivated. Officials cited the timing of the investigation and rejected quid pro quo allegations.
                            </p>

                            {/* Meta */}
                            <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                                {/* Author */}
                                <div className="flex items-center gap-3">

                                    <div className="text-[12px] md:text-[14px]">
                                        <span className="font-semibold text-[#041f4a]">
                                            Staff Reporter
                                        </span>

                                        <span className="mx-2 text-gray-400">|</span>

                                        <span className="text-gray-600">
                                            Politics & PR News Desk
                                        </span>

                                        <div className="text-gray-500">
                                            Jan. 26, 2026
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                  <SocialShare title="White House Defends Trump Pardon of Wanda Vázquez and Julio
                                Herrera Velutini" />
<div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">
                            <div className="w-full lg:w-300 mb-6 md:mb-0">

                                <div className="relative w-full overflow-hidden">
                                    <Image
                                    src='/images/white-house-defends-wanda-vazquez.webp'
                                    alt='White House Defends Trump Pardon of Wanda Vázquez and Julio
                                Herrera Velutini'
                                    width={900}
                                    height={0}
                                    className="w-full h-100 md:h-150 object-cover"
                                    priority
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row mt-8 gap-12">

                                    {/* SocialShareList */}
                                    <div className="hidden md:block sticky top-8 self-start">
                                        <SocialShareList title="White House Defends Trump Pardon of Wanda Vázquez and Julio Herrera Velutini" />
                                    </div>
                                    {/* Article Content */}
                                    <article className="w-full max-w-4xl mx-auto px-4 md:px-0">
                                        <div className="">
                                            <p className='text-[16px] leading-[1.7] text-black mb-6'>
                                                <span className="float-left text-6xl font-bold leading-[0.7] mr-3 mt-1">
                                                    T
                                                </span>
                                                he White House is defending<Link href="https://www.cbsnews.com/news/trump-pardoning-puerto-rico-former-governor-wanda-vazquez-officials-say/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> President Donald Trump’s decision to
                                                pardon former Puerto Rico Gov. Wanda Vázquez Garced</Link>, arguing the case became an example of politically
                                                driven prosecution and citing the timing of the federal investigation that followed her 2020 endorsement of
                                                Trump for reelection.    </p>
                                        </div>
                                        {/* 2. Subpara Section */}
                                        <div className="space-y-2">

                                            <section>
                                                <div className="flex items-center gap-4 mb-2 w-full">
                                            <p className='text-[16px] leading-[1.7] text-black "mb-3'>
                                                        A  White House official, granted anonymity because the administration has a policy of discussing pardons
                                                        on background, said Vázquez’s case was “an example of political persecution,” and noted that investigators
                                                        opened the probe 10 days after she endorsed Trump in 2020. <Link href="https://apnews.com/article/trump-pardon-puerto-rico-governor-vazquez-4a94c15e82cabb5f8272f2d6ad19234d/" className="text-blue-600" target="_blank" rel="noopener noreferrer">The pardon also extends to Vázquez’s co
                                                        defendants: banker Julio Martín Herrera Velutini and former FBI agent Mark Rossini.</Link>
                                                    </p>
                                                    <div className="hidden md:block h-px flex-1 bg-gray-200" />
                                                </div>
                                            </section>

                                        </div>

                                        {/* 3. Points Section*/}

                                        <section className=" py-5 border-y border-gray-100">
                                            <div className="border-l-[2px] border-gray-100 pl-6">

                                                <p className="text-gray-500 mb-6 text-[15px] italic">
                                                    Key takeaways
                                                </p>

                                                <ul className="space-y-4">

                                                    <li className="flex items-start">
                                                        <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                        <span className="text-[16px] leading-relaxed text-black">
                                                            The White House framed the pardon as a response to what an official called “political persecution.”
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                        <span className="text-[16px] leading-relaxed text-black">
                                                            The administration pointed to the investigation timeline: 10 days after the 2020 endorsement.
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                        <span className="text-[16px] leading-relaxed text-black">
                                                            The pardon covers Vázquez and co-defendants Herrera Velutini and Rossini.
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                        <span className="text-[16px] leading-relaxed text-black">
                                                            Critics in Puerto Rico argue the move undermines public integrity and trust in justice.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="space-y-2">

                                            <section>
                                                <div className="flex items-center gap-4 mb-2 w-full">
                                                    <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word  max-w-[90%] md:max-w-none">
                                                        The White House’s defense: “political persecution,” not public corruption
                                                    </h2>
                                                    <div className="hidden md:block h-px flex-1 bg-gray-200" />
                                                </div>
                                                <p
                                                    className='text-[16px] leading-[1.7] text-black "mb-3'
                                                >
                                                    The administration’s defense hinges on motive and proportionality. According to the White House official,
                                                    Vázquez’s clemency materials dispute any quid pro quo—an exchange of official action for campaign
                                                    support—and characterize the prosecution as politically motivated.
                                                </p>

                                                <p className='text-[16px] leading-[1.7] text-black "mb-3'>
                                                    <Link href="https://www.foxnews.com/politics/trump-pardon-former-puerto-rico-governor-her-co-defendants-white-house-official-says/" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                                Central to that argument is timing: the official highlighted that the investigation began shortly after
                                                    Vázquez’s endorsement of Trump in 2020  </Link>, presenting the sequence as evidence that politics—not the
                                                    merits—drove the case. Supporters of the pardon argue that when prosecutions are perceived as partisan,
                                                    the legal process can function as punishment on its own, draining reputations and ending political careers
                                                    long before a court renders final judgmen
                                                </p>
                                            </section>
                                        </div>

                                        <div className="space-y-2">

                                            <section>
                                                <div className="flex items-center gap-4 mb-2 w-full">
                                                    <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word  max-w-[90%] md:max-w-none">
                                                        From indictment to a narrowed resolution
                                                    </h2>
                                                    <div className="hidden md:block h-px flex-1 bg-gray-200" />
                                                </div>
                                                <p
                                                    className='text-[16px] leading-[1.7] text-black "mb-3'
                                                >
                                                            <Link href="https://indianexpress.com/article/world/donald-trump-pardons-former-puerto-rico-governor-wanda-vazquez-10478671/" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                            Vázquez served as governor from 2019 to 2021, taking office after the resignation of Gov. Ricardo Rosselló
                                                    amid widespread protests.</Link></p>
                                                <p className='text-[16px] leading-[1.7] text-black "mb-3'>
                                            Federal authorities arrested and charged Vázquez in 2022 in a public-corruption case tied to allegations
                                                    surrounding her 2020 gubernatorial campaign. Prosecutors alleged that campaign support was linked to
                                                    decisions involving Puerto Rico’s banking regulator
                                                </p>
                                                <p className='text-[16px] leading-[1.7] text-black "mb-3'>
                                                    Over time, the case narrowed materially. Vázquez pleaded guilty in 2025 to a campaign finance violation
                                                    involving acceptance of a promised campaign contribution that was never received, and she was awaiting
                                                    sentencing when Trump’s pardon was issued.
                                                </p>


                                            </section>

                                        </div>

                                        <div className="space-y-2">

                                            <section>
                                                <div className="flex items-center gap-4 mb-2 w-full">
                                                    <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word  max-w-[90%] md:max-w-none">
                                                        The backlash in Puerto Rico
                                                    </h2>
                                                    <div className="hidden md:block h-px flex-1 bg-gray-200" />
                                                </div>
                                                <p
                                                    className='text-[16px] leading-[1.7] text-black "mb-3'
                                                >
                                                                    <Link href="https://www.reuters.com/legal/government/trump-pardon-former-puerto-rico-governor-vazquez-2026-01-16/" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                            
                                                    The pardon prompted immediate criticism from Puerto Rico’s representative in Congress, Pablo José
                                                    Hernández, who said the decision “undermines public integrity,” arguing that impunity fosters corruption
                                                    and weakens faith in justice.</Link>  </p>
                                                <p className='text-[16px] leading-[1.7] text-black "mb-3'>
                                                    The administration, however, is using the pardon to advance a broader point: that high-profile prosecutions
                                                    can become political instruments, and that presidential clemency is intended—at least in part—to correct
                                                    outcomes the executive branch views as unjust or disproportionate.
                                                </p>
                                            </section>

                                        </div>

                                    </article>
                                </div>
    <References />
                                {/* Share Component and Comment Form */}
                                <ShareComponent title="White House Defends Trump Pardon of Wanda Vázquez and Julio Herrera Velutini" />
                                <CommentForm />
                            </div>

                            {/* Right Sidebar */}
                            <div className="w-full lg:w-1/3 lg:pl-8 lg:border-l-2 lg:border-dotted lg:border-gray-200">
                                <ArticleCard
                                    data={[
                                        prnewsData[8],
                                        worldData[6],
                                        julioHerreraArticle,
                                        marketingData[5],
                                    ]}
                                />
                                <div className="py-5">
                                    <UpgradePromoCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <RelatedClientSection data={[prnewsData[0], prnewsData[2],prnewsData[3]]} />
                </div>
            </main>
        );
    }
