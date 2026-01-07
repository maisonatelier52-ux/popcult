import Link from 'next/link';
import CategorySectionHeader from './CategorySectionHeader';
import NewsCard from './NewsCard';
import { FaFacebookF, FaInstagram, FaMediumM, FaTwitter } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import Image from 'next/image';

import prnewsData from '../../public/data/prnews.json';
import financeData from '../../public/data/finance.json';
import usData from '../../public/data/us.json';
import worldData from '../../public/data/world.json';
import marketingData from '../../public/data/marketing.json';
import entertainmentData from '../../public/data/entertainment.json';
import technologyData from '../../public/data/technology.json';

const latestNews = [
  prnewsData?.[0],
  financeData?.[0],
  worldData?.[0],
  usData?.[0],
  marketingData?.[0],
  technologyData?.[0],
  entertainmentData?.[0],
].filter(Boolean);

interface Props {
  onClose: () => void;
}

export default function MobileSidebar({ onClose }: Props) {
  return (
    <aside
      className="
        fixed
        top-[104px]
        left-0
        w-full
        h-[calc(100vh-104px)]
        bg-white
        text-black
        z-50
        overflow-y-auto
        overscroll-contain
      "
    >
      <div className="px-6 py-6 space-y-8">
        {/* Home */}
        <section className="font-bold">
          <h3 className="text-sm mb-3 uppercase">Home</h3>
          <ul className="space-y-3 text-[16px] ml-5">
            {[
              ['/prnews', 'PR News'],
              ['/world', 'World'],
              ['/us', 'U.S'],
              ['/finance', 'Finance'],
              ['/marketing', 'Marketing'],
              ['/technology', 'Technology'],
              ['/entertainment', 'Entertainment'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={onClose}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section className="font-bold">
          <h3 className="text-sm mb-3 uppercase">About</h3>
          <ul className="space-y-3 text-[16px] ml-5">
            {[
              ['/about', 'About Us'],
              ['/contact', 'Contact'],
              ['/editorial', 'Editorial Policy'],
              ['/privacy-policy', 'Privacy Policy'],
              ['/terms-and-conditions', 'Terms and Conditions'],
              ['/faq', 'FAQ'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={onClose}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Ad */}
        <section>
          <Link
            href="https://mirrorstandard.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <Image
              src="/images/mirrorstandard-ad.webp"
              alt="NewsFlashPro Ad"
              width={1200}
              height={500}
              className="w-full h-[100px] object-contain"
              priority
            />
          </Link>
        </section>

        {/* Latest News */}
        <section>
          <CategorySectionHeader title="Latest News" />
          <NewsCard data={latestNews} onClose={onClose} />
        </section>

        {/* Socials */}
        <section>
          <CategorySectionHeader title="Socials" />
          <div className="flex items-center gap-4 mt-5">
            <FaTwitter className="text-xl hover:opacity-70" />
            <FaInstagram className="text-xl hover:opacity-70" />
            <FaMediumM className="text-xl hover:opacity-70" />
            <SiSubstack className="text-xl hover:opacity-70" />
            <FaFacebookF className="text-xl hover:opacity-70" />
          </div>
        </section>
      </div>
    </aside>
  );
}
