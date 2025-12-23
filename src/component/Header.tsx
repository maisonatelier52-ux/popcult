'use client';

import { useState } from 'react';
import {
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaRss,
} from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import Link from "next/link";
import { Menu, X, Search } from 'lucide-react';
import Image from 'next/image';
import { FaTag, FaEnvelope, FaSearch } from "react-icons/fa";
import CategoriesNav from './CategoriesNav';

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
    <header>
     <div className="w-full border-b border-[#88888888] py-2"> 
       <div className="hidden lg:flex items-center justify-between px-6 py-2 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <span className="text-[14.4px] font-outfit font-bold text-black">
            Wednesday, Dec 24, 2025
          </span>
          <span className="h-6 w-px bg-gray-300" />
          <span className="flex gap-3">
            {categories.map((item, index) => (
              <Link
                key={item}
                href="#"
                className="flex items-center gap-3"
              >
                {index !== 0 && (
                  <span className="w-2 h-2 bg-red-600 inline-block" />
                )}
                <span className='text-[14px] text-black'>{item}</span>
              </Link>
            ))}
          </span>
        </div>
        <div className="flex items-center gap-4 text-black">
          <Link href="#" aria-label="X (Twitter)">
            <FaXTwitter className="text-lg hover:opacity-70 transition" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <FaInstagram className="text-lg hover:opacity-70 transition" />
          </Link>
          <Link href="#" aria-label="Medium">
            <FaMediumM className="text-lg hover:opacity-70 transition" />
          </Link>
          <Link href="#" aria-label="Substack">
            <SiSubstack className="text-lg hover:opacity-70 transition" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <FaFacebookF className="text-lg hover:opacity-70 transition" />
          </Link>
          <Link href="#" aria-label="RSS">
            <FaRss className="text-lg hover:opacity-70 transition" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/popcult-logo.png"
            alt="Popcult logo"
            width={160}
            height={40}
            priority
            className="h-auto w-auto"
          />
        </Link>
        <div className="flex items-center gap-4 text-[15px] font-semibold text-black">
          <Link href="#" className="hover:opacity-70">
            Advertise
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="#" className="flex items-center gap-1 hover:opacity-70">
            <FaTag className="text-sm" />
            Deal
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="#" className="flex items-center gap-1 hover:opacity-70">
            <FaEnvelope className="text-sm" />
            Contact
          </Link>
          <button className="
  ml-2
  rounded-sm
  border-l-3
  border border-black
  bg-white
  px-5 py-1.5
  text-base font-semibold
  text-black
  leading-none
">
            Newsletter
          </button>
          <button aria-label="Search" className=" hover:opacity-70">
            <FaSearch className="text-base text-[20px]" />
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 lg:hidden">
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold">
              POPCULT<span className="text-red-600">●</span>
            </span>
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-lg">
            {categories.map((item) => (
              <Link
                key={item}
                href="#"
                className="border-b pb-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm font-medium text-black">
            <Link href="#" className="hover:opacity-70">
              Advertise
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="flex items-center gap-1 hover:opacity-70">
              <FaTag className="text-sm" />
              Deal
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="flex items-center gap-1 hover:opacity-70">
              <FaEnvelope className="text-sm" />
              Contact
            </Link>
            <button className="ml-2 rounded-md border border-black px-4 py-1 text-sm font-medium hover:bg-black hover:text-white transition">
              Newsletter
            </button>

            <button aria-label="Search" className="ml-1 hover:opacity-70">
              <FaSearch className="text-base" />
            </button>
          </div>
        </div>
      )}
     </div>
       <CategoriesNav />
    </header>
  );
}
