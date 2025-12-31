'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaRss,
  FaMediumM,
  FaTag,
  FaEnvelope,
  FaSearch,
} from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import { Menu, X } from 'lucide-react';

import CategoriesNav from './CategoriesNav';
import MobileHeader from './MobileHeader';

const categories = [
  'Entertainment',
  'Culture',
  'Celebrity Buzz',
  'Movies & TV',
  'Lifestyle',
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden border-b border-black">

       <MobileHeader />
      </div>

     

      {/* ================= DESKTOP HEADER (UNCHANGED) ================= */}
      <div className="hidden lg:block">
        <div className="w-full border-b border-[#88888888] py-2">

          {/* Top info bar */}
          <div className="flex items-center justify-between px-6 py-2 text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span className="text-[14.4px] font-outfit font-bold text-black">
                Wednesday, Dec 24, 2025
              </span>

              <span className="h-6 w-px bg-gray-300" />

              <span className="flex gap-3">
                {categories.map((item, index) => (
                  <Link key={item} href="#" className="flex items-center gap-3">
                    {index !== 0 && (
                      <span className="w-2 h-2 bg-[#000080] inline-block" />
                    )}
                    <span className="text-[14px] text-black">{item}</span>
                  </Link>
                ))}
              </span>
            </div>

            <div className="flex items-center gap-4 text-black">
              <FaTwitter className="text-lg hover:opacity-70" />
              <FaInstagram className="text-lg hover:opacity-70" />
              <FaMediumM className="text-lg hover:opacity-70" />
              <SiSubstack className="text-lg hover:opacity-70" />
              <FaFacebookF className="text-lg hover:opacity-70" />
              <FaRss className="text-lg hover:opacity-70" />
            </div>
          </div>

          {/* Logo row */}
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/popcult-logo.png"
                alt="Popcult logo"
                width={160}
                height={40}
                priority
              />
            </Link>

            <div className="flex items-center gap-4 text-[15px] font-semibold text-black">
              <Link href="#">Advertise</Link>
              <span className="text-gray-400">|</span>

              <Link href="#" className="flex items-center gap-1">
                <FaTag className="text-sm" />
                Deal
              </Link>

              <span className="text-gray-400">|</span>

              <Link href="#" className="flex items-center gap-1">
                <FaEnvelope className="text-sm" />
                Contact
              </Link>

              {/* <button className="ml-2 rounded-sm border border-black px-5 py-1.5 text-base font-semibold">
                Newsletter
              </button> */}

              <FaSearch className="text-[20px]" />
            </div>
          </div>
        </div>

        <CategoriesNav />
      </div>
    </header>
  );
}
